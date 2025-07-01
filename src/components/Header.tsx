'use client'

import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import Logo from './Logo'
import Navbar from './Navbar'

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300
        ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}
        pt-2 sm:pt-3 md:pt-4 lg:pt-6 xl:pt-8 pb-2`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36">
        <Logo scrolled={scrolled} />
        <Navbar scrolled={scrolled} headerHeight={headerHeight} />
      </div>
    </header>
  )
} 