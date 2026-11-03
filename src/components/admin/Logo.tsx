/* eslint-disable @next/next/no-img-element -- admin graphics render outside next/image's optimised pipeline */

/** SAID wordmark on the admin login page. */
export function Logo() {
  return (
    <div className="said-logo">
      <img src="/assets/img/said-logo-transparent.png" alt="SAID Technologies" width={241} height={92} />
      <span className="said-logo__caption">Website Content Management</span>
    </div>
  )
}
