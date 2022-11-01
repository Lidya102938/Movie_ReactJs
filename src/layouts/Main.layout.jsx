import Navbar from './Navbar'
import Footer from './Footer'

export default function MainLayout({ children, bg }) {
  return (
    <div className={bg}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}