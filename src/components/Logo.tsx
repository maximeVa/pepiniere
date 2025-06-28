import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3">
      <Link href="/" className="relative flex-shrink-0 group">
        <Image
          src="/home/logo.png"
          alt="Les Jardins St Michel"
          width={120}
          height={45}
          sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 120px"
          className="w-20 h-auto sm:w-24 md:w-28 lg:w-32 xl:w-36 border-2 border-white/80 rounded-lg transition-all duration-300 group-hover:border-white group-hover:scale-105"
          priority
        />
      </Link>
      <div className="sm:block whitespace-nowrap">
        <span className="text-white font-medium tracking-wider uppercase text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl transition-all duration-300">
          La Pépinière Saint‑Michel
        </span>
      </div>
    </div>
  )
} 