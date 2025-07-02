'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useCallback, useMemo } from 'react'

const menuItems = [
    { href: '/', label: 'Accueil' },
    { href: '/la-pepiniere', label: 'La pépinière' },
    { href: '/paysagisme', label: 'Paysagisme' },
    { href: '/euroserre', label: 'Euroserre' },
    { href: '/commande', label: 'Passer commande' },
] as const

type MobileMenuProps = {
    navbarHeight: number
    onClose?: () => void
}

export default function MobileMenu({ navbarHeight, onClose }: MobileMenuProps) {
    const router = useRouter()

    // Mémoisation de la fonction de navigation pour éviter les re-renders
    const handleNavigate = useCallback((href: string) => {
        onClose?.()
        router.push(href)
    }, [onClose, router])

    // Mémoisation des styles pour éviter les recalculs
    const containerStyle = useMemo(() => ({
        position: 'fixed' as const,
        left: 0,
        right: 0,
        top: navbarHeight,
        height: `calc(100vh - ${navbarHeight}px)`,
        zIndex: 9999,
    }), [navbarHeight])

    // Variants d'animation mémorisés
    const containerVariants = useMemo(() => ({
        initial: { clipPath: 'inset(0 0 100% 0)' },
        animate: { clipPath: 'inset(0 0 0% 0)' },
        exit: { clipPath: 'inset(0 0 100% 0)' }
    }), [])

    const itemVariants = useMemo(() => ({
        initial: { x: 50, opacity: 0 },
        animate: { x: 0, opacity: 1 }
    }), [])

    const transition = useMemo(() => ({
        type: 'spring' as const,
        stiffness: 300,
        damping: 30,
        duration: 0.6
    }), [])

    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            style={containerStyle}
            className="bg-white"
        >
            <nav className="h-full p-6 flex flex-col items-center">
                <ul className="space-y-4 w-full max-w-sm">
                    {menuItems.map((item, index) => (
                        <motion.li
                            key={item.href}
                            variants={itemVariants}
                            initial="initial"
                            animate="animate"
                            transition={{
                                delay: index * 0.1 + 0.3,
                                type: 'spring',
                                stiffness: 400,
                                damping: 25
                            }}
                        >
                            <button
                                type="button"
                                className="block w-full py-3 px-4 text-xl font-medium text-gray-900 rounded-lg text-center transition-transform duration-150 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black/50 active:scale-95 cursor-pointer"
                                onClick={() => handleNavigate(item.href)}
                            >
                                {item.label}
                            </button>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </motion.div>
    )
}