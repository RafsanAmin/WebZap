'use client';
import './globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Lexend_Deca } from 'next/font/google';
import { JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { useState } from 'react';
import Head from 'next/head';

const lexend = Lexend_Deca({ subsets: ['latin'], display: 'swap' });
const jetb = JetBrains_Mono({
  subsets: ['latin'],
  weight: '600',
  style: 'normal',
});

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li
    className={
      'w-full text-center text-[#ffffffa1] px-4 mx-4 py-2 border border-transparent hover:bg-[#ffffff11] hover:border-slate-500 transition rounded-lg cursor-pointer'
    }
  >
    <Link href={href}>{children}</Link>
  </li>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [nav, setNav] = useState(false);
  return (
    <html lang="en">
      <Head>
        <title>Mr. Syntax Experts</title>
      </Head>
      <body style={lexend.style} className={lexend.className}>
        <nav className={'flex flex-1 p-5 sm:p-5 justify-between cont relative'}>
          <main className={'flex gap-3'}>
            <img src="/logo.svg" alt="logo" className="w-[40px] sm:w-[60px]" />
            <span className={'text-lg sm:text-xl my-auto text-[#ffffffa1]'} style={jetb.style}>
              Mr.Syntax_Experts
            </span>
          </main>
          <div className={'my-auto'}>
            <button
              onClick={() => setNav((s) => !s)}
              className={'text-slate-300 text-3xl sm:text-4xl lg:hidden'}
            >
              {nav ? <CgClose /> : <CgMenuRight />}
            </button>
            <ul
              className={`${
                nav || 'hidden'
              } z-10 bg-[#00000042]  backdrop-blur-2xl sm:rounded-xl lg:bg-transparent absolute lg:relative left-0 top-[105%] lg:top-0 gap-5 p-5 lg:p-0 lg:gap-0 w-full flex flex-col lg:flex-row text-base items-center lg:flex`}
            >
              <NavLink href="/">Home</NavLink>
              <NavLink href="/">About</NavLink>
              <NavLink href="/">Competetions</NavLink>
              <NavLink href="/">Notice</NavLink>
              <NavLink href="/">Login</NavLink>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
