'use client';
import './globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Lexend_Deca } from 'next/font/google';
import { JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import AOS from 'aos';
const lexend = Lexend_Deca({ subsets: ['latin'], display: 'swap' });
const jetb = JetBrains_Mono({
  subsets: ['latin'],
  weight: '600',
  style: 'normal',
});

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    className={
      'w-full text-center text-[#ffffffa1] px-4 mx-4 py-2 border border-transparent hover:bg-[#ffffff11] hover:border-slate-500 transition rounded-lg cursor-pointer'
    }
    href={href}
  >
    {children}
  </Link>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <html lang="en">
      <Head>
        <title>WebZap</title>
      </Head>
      <body style={lexend.style} className={lexend.className}>
        <nav className={'flex flex-1  justify-between cont '}>
          <main className={'flex gap-3'}>
            <img src="/logo.svg" alt="logo" className="w-[40px] sm:w-[60px]" />
            <span className={'text-lg sm:text-xl my-auto text-[#ffffffa1]'}>WebZap</span>
          </main>
          <div className={'my-auto'}>
            <button
              onClick={() => setNav((s) => !s)}
              className={'text-slate-300 text-3xl sm:text-4xl lg:hidden z-[10] relative'}
            >
              {nav ? <CgClose /> : <CgMenuRight />}
            </button>
            <ul
              onClick={() => {
                setNav(false);
              }}
              className={`${
                nav || 'hidden'
              } bg-[#00000042] z-[9]  backdrop-blur-2xl  lg:bg-transparent absolute lg:relative left-0 top-0 h-[100vh] lg:h-auto pt-[70px] lg:top-0 gap-5 p-5 lg:p-0 lg:gap-0 w-[100vw] lg:w-auto flex flex-col lg:flex-row text-base items-center lg:flex`}
            >
              <NavLink href="/">Home</NavLink>
              <NavLink href="/#about">About</NavLink>
              <NavLink href="/#price">Pricings</NavLink>
              <NavLink href="/#support">Support</NavLink>
              <NavLink href="/login">Login</NavLink>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
