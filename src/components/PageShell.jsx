function PageShell({ eyebrow, title, subtitle, children }) {
  return (
    <main className="site-page">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.12),transparent_34%),radial-gradient(circle_at_82%_10%,rgba(255,255,255,0.09),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.07),transparent_40%)]" />
      <div className="page-container">
        <header className="max-w-3xl fade-up">
          {eyebrow ? <p className="page-eyebrow">{eyebrow}</p> : null}
          {title ? <h1 className="page-title">{title}</h1> : null}
          {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
        </header>
        <div className="mt-10 space-y-6">{children}</div>
      </div>
    </main>
  );
}

export default PageShell;
