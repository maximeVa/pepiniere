import Logo from './Logo'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 pt-4 sm:pt-6 md:pt-8 lg:pt-12 xl:pt-16 pb-4">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36">
        <Logo />
        <Navbar />
      </div>
    </header>
  )
} 