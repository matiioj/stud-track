import './globals.css'

export const metadata = {
  title: 'Students Track',
  description: 'Track your students everytime',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
