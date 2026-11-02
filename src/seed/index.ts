/**
 * CLI entry for local seeding:
 *   npm run seed                 – only runs on an empty database
 *   SEED_FORCE=true npm run seed – deletes existing content first
 * On Railway, use the one-time POST /next/seed endpoint instead (see README).
 */
import { getPayload } from 'payload'
import config from '../payload.config'
import { runSeed } from './run'

// `payload run` exits once the module is imported, so the work must finish during import.
try {
  const payload = await getPayload({ config })
  const result = await runSeed(payload, { force: process.env.SEED_FORCE === 'true' })
  payload.logger.info(result.message)
  process.exit(0)
} catch (err) {
  console.error(err)
  process.exit(1)
}
