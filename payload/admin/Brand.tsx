/** Marca marks for the admin: the wordmark on the login screen, the "M" tile in the sidebar. */

export function Logo() {
  return (
    <div className="mc-logo">
      <span className="mc-logo__mark" aria-hidden="true">M</span>
      <span className="mc-logo__text">
        <strong>Marca</strong>
        <span>Studio admin</span>
      </span>
    </div>
  );
}

export function Icon() {
  return (
    <span className="mc-icon" aria-label="Marca">
      M
    </span>
  );
}
