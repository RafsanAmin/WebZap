import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className={'h-[calc(100vh-120px)] grid place-items-center text-slate-300 text-center '}>
        <header className={'flex flex-col gap-6 px-5 drop-shadow-[0_0px_50px_rgba(255,255,255,1)]'}>
          <h2 className={'text-4xl leading-normal sm:leading-normal sm:text-5xl font-bold '}>
            We don’t just code
            <br /> We <span className="text-slate-400">&lt;</span>
            <div
              className={
                ' max-h-[2ch] overflow-hidden text-4xl leading-normal sm:leading-normal sm:text-5xl inline-block align-top'
              }
            >
              <div className="transition-all ease-in-out slide-up">
                <span className="text-sky-300">Think</span>
                <br></br>
                <span className="text-rose-300">Solve</span>
                <br></br>
                <span className="text-emerald-300">Compete</span>
              </div>
            </div>
            <span className="text-slate-400">/&gt;</span>
          </h2>
          <p className={'text-2xl font-regular text-slate-400'}>A team that never gave up</p>
          <div>
            <button
              className={
                'inline-block border border-slate-400 py-2 px-10 rounded-full text-xl hover:bg-[#ffffff11] hover:px-12 transition-all duration-150'
              }
            >
              Discover
            </button>
          </div>
        </header>
      </div>
    </>
  );
}
