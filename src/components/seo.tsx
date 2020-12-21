import Head from 'next/head'
import config from '../config'
type SEOProps = {
  title: string
}
export default function SEO(props: SEOProps) {
  const siteTitle = config.title
  const { title } = props

  return (
    <Head>
      <title>{`${config.title} | ${siteTitle}`}</title>
      <meta name="description" content={config.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:site_name" content={title} />
      <meta property="twitter:card" content="summary" />
      {/* <meta property="twitter:creator" content={config.social.twitter} /> */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={config.description} />
    </Head>
  )
}
