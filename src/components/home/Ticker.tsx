import { Icon } from '../ui/Icon'
import './Ticker.css'

export type TickerItem = { text: string; icon?: string | null }

/** Decorative marquee of capabilities; the same names are real links in the menus and sections. */
export function Ticker({ items }: { items: TickerItem[] }) {
  if (!items.length) return null
  const list = (
    <ul>
      {items.map((item, i) => (
        // Icon colours cycle through the site palette: teal, coral, cyan, navy
        <li key={item.text} className={`tone-${i % 4}`}>
          <span className="e-ticker-ic">
            <Icon name={item.icon} />
          </span>
          {item.text}
        </li>
      ))}
    </ul>
  )
  return (
    <div className="e-ticker" aria-hidden="true">
      <div className="e-ticker-track">
        {list}
        {list}
      </div>
    </div>
  )
}
