import Link from 'next/link'
import type { Industry } from '@/payload-types'
import { childrenOf, getSolutionList, topLevel, type SolutionCollection, type SolutionDoc } from '@/lib/data'
import { resolveLink } from '@/lib/links'
import { toImage, type ImageSource } from '@/lib/media'
import { docPath } from '@/lib/urls'
import { MagazineGrid } from '../home/MagazineGrid'
import { SolutionIndex } from '../home/SolutionIndex'
import { CmsImage } from '../ui/CmsImage'
import { Icon } from '../ui/Icon'
import { TextLink } from '../ui/Links'
import { SectionHead } from '../ui/SectionHead'
import { toneClass, type BlockContext, type BlockOf, type Tone } from './types'
import './Blocks.css'

type Card = {
  key: string
  label?: string | null
  title: string
  text?: string | null
  href?: string | null
  linkLabel?: string | null
  icon?: string | null
  image?: ImageSource | null
}

const fromDoc = (collection: SolutionCollection, doc: SolutionDoc, label?: string, preferTagline = false): Card => ({
  key: `${collection}-${doc.id}`,
  label,
  title: doc.title,
  text: preferTagline ? doc.tagline || doc.excerpt : doc.excerpt || doc.tagline,
  href: docPath(collection, doc),
  icon: doc.icon,
  image: toImage(doc.cardImage, undefined, doc.title) ?? toImage(doc.hero?.image, undefined, doc.title),
})

async function collectCards(block: BlockOf<'cardGrid'>, ctx: BlockContext): Promise<Card[]> {
  switch (block.source) {
    case 'children': {
      if (ctx.collection !== 'services' && ctx.collection !== 'education') return []
      const all = await getSolutionList(ctx.collection)
      return childrenOf(all, ctx.id).map((d, i) => fromDoc(ctx.collection as SolutionCollection, d, String(i + 1).padStart(2, '0'), true))
    }
    case 'services':
    case 'education':
      return topLevel(await getSolutionList(block.source)).map((d) => fromDoc(block.source as SolutionCollection, d))
    case 'industries':
      return (await getSolutionList('industries')).map((d) => fromDoc('industries', d))
    default:
      return (block.cards ?? []).map((c, i) => ({
        key: c.id ?? String(i),
        label: c.label,
        title: c.title,
        text: c.text,
        href: resolveLink(c.link)?.href,
        linkLabel: c.link?.label,
        icon: c.icon,
        image: toImage(c.image, undefined, c.title),
      }))
  }
}

function CardItem({ card }: { card: Card }) {
  return (
    <li className="e-card reveal">
      {card.image && (
        <figure className="e-card-photo">
          <CmsImage image={card.image} decorative sizes="(min-width: 64rem) 30vw, (min-width: 40rem) 45vw, 100vw" />
        </figure>
      )}
      {!card.image && card.icon && (
        <span className="e-card-ic">
          <Icon name={card.icon} />
        </span>
      )}
      {card.label && <span className="e-card-label">{card.label}</span>}
      <h3 className="e-card-title">
        {card.href ? (
          <Link className="e-stretch" href={card.href}>
            {card.title}
          </Link>
        ) : (
          card.title
        )}
      </h3>
      {card.text &&
        card.text.split('\n').map((line) => (
          <p key={line.slice(0, 40)}>{line}</p>
        ))}
      {card.href && (
        <span className="e-card-more" aria-hidden="true">
          {card.linkLabel || 'Learn more'} <span className="arrow">→</span>
        </span>
      )}
    </li>
  )
}

export async function CardGridSection({ block, ctx, tone }: { block: BlockOf<'cardGrid'>; ctx: BlockContext; tone?: Tone }) {
  const cards = await collectCards(block, ctx)
  const chips = (block.chips ?? []).filter((c): c is Industry => typeof c === 'object' && c !== null)
  const link = resolveLink(block.link)
  if (!cards.length && !chips.length) return null

  let grid
  if (block.style === 'index') {
    grid = (
      <SolutionIndex
        rows={cards.map((c) => ({ title: c.title, text: c.text, href: c.href ?? '#', icon: c.icon, image: c.image?.src ?? null }))}
      />
    )
  } else if (block.style === 'photo') {
    grid = <MagazineGrid items={cards.map((c) => ({ title: c.title, text: c.text, href: c.href ?? '#', image: c.image ?? null }))} />
  } else if (cards.length) {
    // Photos only show in the "photo" style; plain cards stay text-led
    const plain = cards.map((c) => ({ ...c, image: block.source === 'manual' ? c.image : null }))
    grid = (
      <ul className={`e-cards${cards.length === 2 || cards.length === 4 ? ' e-cards--2' : ''}`}>
        {plain.map((card) => (
          <CardItem key={card.key} card={card} />
        ))}
      </ul>
    )
  }

  return (
    <section className={toneClass(tone)} id={block.anchor || undefined}>
      <div className="container">
        <SectionHead kicker={block.eyebrow} heading={block.heading} intro={[block.intro]} />
        {grid}
        {chips.length > 0 && (
          <div className="e-chips-wrap reveal">
            <p className="e-chips-title">{block.chipsHeading || 'Relevant industries'}</p>
            <ul className="e-chips">
              {chips.map((c) => (
                <li key={c.id}>
                  <Link href={docPath('industries', c)}>{c.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {block.footnote && <p className="e-footnote">{block.footnote}</p>}
        {link && (
          <p className="e-block-link">
            <TextLink href={link.href}>{link.label}</TextLink>
          </p>
        )}
      </div>
    </section>
  )
}
