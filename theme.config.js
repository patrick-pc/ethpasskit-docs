export default {
  github: 'https://github.com/web3slinger/ethpasskit-docs',
  docsRepositoryBase:
    'https://github.com/web3slinger/ethpasskit-docs/blob/master',
  titleSuffix: ' – ethpasskit',
  logo: (
    <>
      <span className="mr-2 font-semibold hidden md:inline">
        <span className="text-gray-600">eth</span>passkit
      </span>
      <span className="text-gray-600 text-sm border rounded hidden md:inline py-.5 px-3">
        Beta
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="ethpasskit react component library" />
      <meta
        name="og:description"
        content="ethpasskit react component library"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://ethpasskit-docs.vercel.app/og.png"
      />
      <meta name="twitter:site:domain" content="ethpasskit-docs.vercel.app" />
      <meta name="twitter:url" content="https://ethpasskit-docs.vercel.app" />
      <meta name="og:title" content="ethpasskit" />
      <meta
        name="og:image"
        content="https://ethpasskit-docs.vercel.app/og.png"
      />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © ethpasskit</>,
  unstable_faviconGlyph: '👋',
}
