/** "Log out" in the admin header, so it is always one click away. Uses Payload's own logout route. */
export function LogoutButton() {
  return (
    // A plain link on purpose: next/link may prefetch it, and prefetching the logout route would sign the user out
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a className="said-logout" href="/admin/logout">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <path d="M16 17l5-5-5-5" />
        <path d="M21 12H9" />
      </svg>
      Log out
    </a>
  )
}
