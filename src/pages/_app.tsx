import Head from "next/head"
import "../../public/styles.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kyle Hughes</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
