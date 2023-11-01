import React from 'react';
import { AOSComp } from './AOS';

import Link from 'next/link';
const Icon = () => {
  return <></>;
};

const Header = () => {
  return (
    <AOSComp anim={'zoom-in'} delay={150}>
      <div
        className={
          'h-[calc(100vh-120px)] grid place-items-center text-slate-300 text-center relative'
        }
      >
        <img
          className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] w-[80vw] sm:w-[50vw] h-auto opacity-40 blur-sm z-[-1] drop-shadow-none"
          src="/code_bg.png"
          alt=""
        />
        <header className={' flex flex-col gap-3 sm:gap-6 px-5 '}>
          <h2 className={'text-3xl leading-normal sm:leading-normal sm:text-5xl font-bold  glow '}>
            Deploy your WebApp
            <br /> with <span className="text-slate-400 glow">&lt;</span>
            <div
              className={
                ' glow  max-h-[2ch] overflow-hidden text-3xl leading-normal sm:leading-normal sm:text-5xl inline-block align-top'
              }
            >
              <div className="transition-all ease-in-out ">
                <span className="font-mono text-sky-300">WebZap</span>
              </div>
            </div>
            <span className="text-slate-400 glow ">/&gt;</span>
          </h2>
          <p className={'text-center text-xl sm:text-2xl font-regular text-slate-400 glow '}>
            Host your Full-stack WebApp within minutes!!
          </p>
          <div>
            <Link href="/register">
              <button
                className={
                  ' glow inline-block border border-slate-400 py-2 px-10 rounded-full text-lg hover:bg-[#ffffff11] hover:px-12 transition-all duration-150'
                }
              >
                Deploy App Now
              </button>
            </Link>
          </div>
        </header>
        <img
          className="absolute left-[20%] bottom-[20%] w-[calc(30px+1.75vw)] animation-pulse"
          src="/icons/ic(1).svg"
          alt=""
        />
        <img
          className="absolute left-[15%] bottom-[40%] w-[calc(30px+1.75vw)] animation-pulse"
          src="/icons/ic(2).svg"
          alt=""
        />
        <img
          className="absolute left-[20%] bottom-[60%] w-[calc(30px+1.75vw)] animation-pulse"
          src="/icons/ic(3).svg"
          alt=""
        />
        <img
          className="absolute left-[48%] bottom-[80%] w-[calc(30px+1.75vw)] animation-pulse"
          src="/icons/ic(4).svg"
          alt=""
        />
        <img
          className="absolute left-[78%] bottom-[60%] w-[calc(30px+1.75vw)] animation-pulse"
          src="/icons/ic(5).svg"
          alt=""
        />
        <img
          className="absolute left-[83%] bottom-[40%] w-[calc(30px+1.75vw)] animation-pulse"
          src="/icons/ic(6).svg"
          alt=""
        />
        <img
          className="absolute left-[78%] bottom-[20%] w-[calc(30px+1.75vw)] animation-pulse"
          src="/icons/ic(7).svg"
          alt=""
        />
      </div>
    </AOSComp>
  );
};

export default Header;
