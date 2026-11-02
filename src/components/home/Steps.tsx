import { Icon } from '../ui/Icon'
import './Steps.css'

export type Step = { title: string; text?: string | null; icon?: string | null }

const defaultIcons = ['search', 'plan', 'rocket', 'check']

/** Process steps: "line" columns joined by a drawn rule, or bordered "cards" joined by connectors. */
export function Steps({ steps, variant = 'line' }: { steps: Step[]; variant?: 'line' | 'cards' }) {
  return (
    <ol
      className={`e-steps${variant === 'cards' ? ' e-steps--cards' : ''} reveal`}
      style={{ ['--cols' as string]: Math.min(steps.length, 4) }}
    >
      {steps.map((s, i) => (
        <li className="e-step" key={s.title}>
          <span className="e-step-ic">
            <Icon name={s.icon || defaultIcons[i % defaultIcons.length]} />
          </span>
          <h3 className="e-step-title">{s.title}</h3>
          {s.text && <p>{s.text}</p>}
        </li>
      ))}
    </ol>
  )
}
