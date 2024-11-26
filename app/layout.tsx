import type { Metadata } from 'next'
import Provider from './provider'
import Layout from 'components/layout'

export const metadata: Metadata = {
  title: "Kyle Hughes | Software Engineer",
  description:
    "Lead engineer with extensive experience building production ready user experiences in React and React Native.",
  keywords: ["React", "React native", "Software Engineer", "Crypto"],
  alternates: {
    canonical: 'https://kylephughes.com',
}

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><Provider><Layout>{children}</Layout></Provider></body>
    </html>
  )
}
