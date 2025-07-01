'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

const menuItems = [
    { href: '/', label: 'Accueil' },
    { href: '/la-pepiniere', label: 'La pépinière' },
    { href: '/paysagisme', label: 'Paysagisme' },
    { href: '/euroserre', label: 'Euroserre' },
    { href: '/commande', label: 'Passer commande' },
]

type MobileMenuProps = {
    navbarHeight: number;
    onClose?: () => void;
};

export default function MobileMenu({ navbarHeight, onClose }: MobileMenuProps) {
    return (
        <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
                duration: 0.6
            }}
            style={{
                position: 'fixed',
                left: 0,
                right: 0,
                top: navbarHeight,
                height: `calc(100vh - ${navbarHeight}px)`,
                zIndex: 9999,
            }}
            className="bg-green-700 text-white shadow-2xl flex flex-col"
        >
            {/* Items */}
            <nav className="flex-1 p-6 flex flex-col items-center">
                <ul className="space-y-4 w-full flex flex-col items-center">
                    {menuItems.map((item, index) => (
                        <motion.li
                            key={item.href}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                        >
                            <Link
                                href={item.href}
                                className="block py-3 px-4 text-xl font-medium text-white hover:bg-green-800 rounded-lg transition-colors duration-300 text-center w-full"
                                onClick={onClose}
                            >
                                {item.label}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </motion.div>
    )
}