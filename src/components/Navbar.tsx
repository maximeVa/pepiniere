import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@radix-ui/react-dialog'
import MobileMenu from './MobileMenu'
import { Menu } from 'lucide-react'

export default function Navbar() {
    return (
        <nav className="flex items-center justify-end w-full">
            {/* Menu desktop */}
            <ul className="hidden lg:flex space-x-8">
                {[
                    { href: '#about', label: 'À PROPOS' },
                    { href: '#services', label: 'SERVICES' },
                    { href: '#contact', label: 'CONTACT' },
                ].map((item) => (
                    <li key={item.href}>
                        <Link 
                            href={item.href}
                            className="relative text-white text-sm xl:text-base tracking-wide hover:text-white/80 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Hamburger mobile */}
            <div className="lg:hidden ml-2">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button 
                            variant="ghost" 
                            size="sm"
                            className="p-2 text-white hover:bg-white/10 transition-colors duration-300"
                        >
                            <Menu className="w-6 h-6" />
                            <span className="sr-only">Ouvrir le menu</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="p-0 bg-transparent shadow-none border-none sm:max-w-none">
                        <DialogTitle className="sr-only">
                            Menu de navigation
                        </DialogTitle>
                        <MobileMenu />
                    </DialogContent>
                </Dialog>
            </div>
        </nav>
    )
}