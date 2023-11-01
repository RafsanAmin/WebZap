'use client';
import Link from 'next/link';

const Support = () => {
  return (
    <div
      id="support"
      className="bg-[#00000071] py-12 border-slate-600 border-l-0 border-r-0 border"
    >
      <div className="cont flex flex-col lg:flex-row gap-14">
        <div className="flex flex-col sm:flex-row gap-10 justify-center align-center flex-1">
          <div className="flex flex-col gap-5">
            <h2
              className={
                'text-3xl leading-normal sm:leading-normal sm:text-4xl font-bold  glow text-slate-300 mb-0'
              }
            >
              Why waiting <span className="text-emerald-300">then?</span>
            </h2>
            <p className="text-xl sm:text-2xl mb-3">
              Deploy your app now in just minutes! You can Try our app for free then switch to
              Premium Plans on demand.
            </p>
            <div className="h-[100%]">
              <Link href="/register">
                <button
                  className={
                    'min-w-[250px] my-auto text-slate-300 glow inline-block border border-slate-400 py-2 px-10 rounded-full text-lg hover:bg-[#ffffff11] hover:px-12 transition-all duration-150'
                  }
                >
                  Deploy App Now
                </button>
              </Link>
            </div>
            <main className={'flex gap-3'}>
              <img src="/logo.svg" alt="logo" className="w-[40px] sm:w-[60px]" />
              <span className={'text-2xl sm:text-3xl my-auto text-[#ffffffa1]'}>WebZap</span>
            </main>
            <p>
              You can check our{' '}
              <a
                className="underline-offset-1 underline font-semibold"
                href="https://github.com/RafsanAmin/WebZap"
              >
                Github
              </a>
              . You also can report issues there and help our development.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <h2
            className={
              'text-3xl leading-normal sm:leading-normal sm:text-4xl font-bold  glow text-slate-300 mb-5'
            }
          >
            Need <span className="text-sky-300">Support?</span>
          </h2>
          <input
            className="bg-[#00000071] px-5 py-4 rounded-md block mb-5 w-full"
            placeholder="Name"
          />
          <input
            className="bg-[#00000071] px-5 py-4 rounded-md block mb-5 w-full"
            placeholder="E-mail"
          />
          <textarea
            className="bg-[#00000071] px-5 py-4 rounded-md block mb-5 resize-none w-full"
            placeholder="Your Thoughts"
            rows={5}
          />
          <button
            onClick={() => {
              alert('Your Request has been sent. Please check your e-mail for further update.');
            }}
            className={
              'align-self-right min-w-[250px] my-auto text-slate-300 glow inline-block border border-slate-400 py-2 px-10 rounded-full text-lg hover:bg-[#ffffff11] hover:px-12 transition-all duration-150'
            }
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
