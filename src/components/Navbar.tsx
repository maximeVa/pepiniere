import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@radix-ui/react-dialog'
import MobileMenu from './MobileMenu'
import { Menu } from 'lucide-react'

export default function Navbar({ scrolled = false }: { scrolled?: boolean }) {
    return (
        <nav className="flex items-center justify-end w-full">
            {/* Menu desktop */}
            <ul className="hidden lg:flex space-x-8">
                {[
                    { href: '/', label: 'ACCUEIL' },
                    { href: '/la-pepiniere', label: 'LA PÉPINIÈRE' },
                    { href: '/paysagisme', label: 'PAYSAGISME' },
                    { href: '/euroserre', label: 'EUROSERRE' },
                    { href: '/commande', label: 'PASSER COMMANDE' },
                ].map((item) => (
                    <li key={item.href}>
                        <Link 
                            href={item.href}
                            className={`relative text-sm xl:text-base tracking-wide transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full
                                ${scrolled ? 'text-gray-900 hover:text-green-700 after:bg-green-700' : 'text-white hover:text-white/80 after:bg-white'}`}
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
                            className={`p-2 transition-colors duration-300 hover:bg-white/10 ${scrolled ? 'text-gray-900' : 'text-white'}`}
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