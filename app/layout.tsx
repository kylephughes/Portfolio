import type { Metadata } from 'next'
import Provider from './provider'
import Layout from 'components/layout'

export const metadata: Metadata = {
  title: "Kyle Hughes | Software Engineer",
  description:
    "Full stack engineer with extensive experience building production ready experiences in React and React Native.",
  keywords: ["React", "React native", "Software Engineer", "Crypto"],
  alternates: {
    canonical: 'https://kylephughes.com',
}

}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
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
