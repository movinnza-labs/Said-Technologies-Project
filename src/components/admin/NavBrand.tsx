/* eslint-disable @next/next/no-img-element -- admin graphics render outside next/image's optimised pipeline */
import Link from 'next/link'

/** SAID logo at the top of the admin sidebar, linking back to the dashboard. */
export function NavBrand() {
  return (
    <Link className="said-navbrand" href="/admin" aria-label="SAID Technologies CMS dashboard">
      <img src="/assets/img/said-logo-transparent.png" alt="" width={241} height={92} />
      <span>CMS</span>
    </Link>
  )
}
