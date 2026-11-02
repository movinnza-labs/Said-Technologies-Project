# Production image for Railway.
# Debian slim (not Alpine): on Alpine, sharp holds on to freed memory and the container keeps growing.
# Only Next's standalone output ships in the final image. Pending migrations run when the server
# starts (Payload prodMigrations), so the database is never needed during the build.

FROM node:22-slim AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# ---- Dependencies ----
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# ---- Build ----
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- Runtime ----
FROM base AS runner
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000
ENV MEDIA_DIR=/app/media
# Limits native memory arenas; stops sharp's memory from creeping up over time
ENV MALLOC_ARENA_MAX=2

RUN groupadd --system --gid 1001 nodejs && useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Uploads live here; mount a Railway volume at /app/media to keep them across deploys.
RUN mkdir -p /app/media && chown nextjs:nodejs /app/media

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
