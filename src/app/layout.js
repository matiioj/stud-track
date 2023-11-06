import Navbar from './components/Navbar'
import './styles/globals.css'

export const metadata = {
  title: 'Students Track',
  description: 'Track your students everytime',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Navbar />
        <div className='h[calc(100vh-5rem)] container mx-auto'>{children}</div>
      </body>
    </html>
  )
}
