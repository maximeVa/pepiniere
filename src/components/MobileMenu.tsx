'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

const menuItems = [
    { href: '#about', label: 'À propos' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
]

export default function MobileMenu() {
    return (
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white dark:bg-gray-900 shadow-2xl flex flex-col z-50"
        >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Menu
                </h2>
                <DialogClose asChild>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-2"
                    >
                        <X className="w-5 h-5" />
                        <span className="sr-only">Fermer le menu</span>
                    </Button>
                </DialogClose>
            </div>

            {/* Items */}
            <nav className="flex-1 p-6">
                <ul className="space-y-4">
                    {menuItems.map((item, index) => (
                        <motion.li
                            key={item.href}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <DialogClose asChild>
                                <Link
                                    href={item.href}
                                    className="block py-3 px-4 text-lg font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
                                >
                                    {item.label}
                                </Link>
                            </DialogClose>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </motion.div>
    )
}
