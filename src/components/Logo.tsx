import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ className = '', scrolled = false }: { className?: string, scrolled?: boolean }) {
  return (
    <div className={`flex items-center space-x-2 sm:space-x-3 ${className}`}>
      <Link href="/" className="relative flex-shrink-0 group">
        <Image
          src="/home/logo.png"
          alt="Les Jardins St Michel"
          width={120}
          height={45}
          sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 120px"
          className={`w-20 h-auto sm:w-24 md:w-28 lg:w-32 xl:w-36 border rounded-lg transition-all duration-300 group-hover:scale-105 ${scrolled ? 'border-gray-400/60 group-hover:border-gray-600/60' : 'border-gray-100/60 group-hover:border-gray-300/60'}`}
          priority
        />
      </Link>
      <div className="sm:block whitespace-nowrap ml-1 xs:ml-2">
        <span className={
          `${scrolled ? 'text-gray-900' : 'text-white'} font-medium tracking-wider uppercase text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl transition-all duration-300`
        }>
          <span className="hidden [@media(min-width:350px)]:inline">Les Jardins Saint‑Michel</span>
          <span className="inline [@media(min-width:350px)]:hidden">
            <span className="block leading-tight">Les Jardins</span>
            <span className="block leading-tight">Saint‑Michel</span>
          </span>
        </span>
      </div>
    </div>
  )
} 