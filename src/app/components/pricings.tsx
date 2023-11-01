import React from 'react';

type prop = {
  title: React.ReactNode;
  money: React.ReactNode;
  features: React.ReactNode[];
  color: string;
};

const arr = [
  [
    'Best for personal projects',
    'No credit card required!',
    <>
      <b className="text-slate-100">3</b> free Apps and Databases
    </>,
    <>
      Max. <b className="text-slate-100">15 hr/day</b> of server uptime{' '}
    </>,
    <>
      Max. <b className="text-slate-100">25000 requests/month</b> .
    </>,
    <>
      <b className="text-slate-100">4.5 GB</b> Space for all apps and databases altogether.
    </>,
    <>
      <b className="text-slate-100">1GB</b> Memory for each app.
    </>,
    <>Shared Processing Core.</>,
  ],
  [
    'Best for small companies, teams and groups!',
    <>
      <b className="text-slate-100">15</b> Apps and Databases
    </>,
    <>
      Max. <b className="text-slate-100">24 hr/day</b> of server uptime{' '}
    </>,
    <>
      Max. <b className="text-slate-100">500,000 requests/month</b> .
    </>,
    <>
      <b className="text-slate-100">35 GB</b> Space for all apps and databases altogether.
    </>,
    <>
      <b className="text-slate-100">4 - 8 GB</b> Memory for each app.
    </>,
    <>
      <b className="text-slate-100">2 - 4 Core </b> Processor for each App.
    </>,
  ],
  [
    'Best for huge scale usage!',
    <>
      <b className="text-slate-100">50</b> Apps and Databases
    </>,
    <>
      Max. <b className="text-slate-100">24 hr/day</b> of server uptime{' '}
    </>,
    <>
      Max. <b className="text-slate-100">3,000,000 requests/month</b> .
    </>,
    <>
      <b className="text-slate-100">256 GB</b> Space for all apps and databases altogether.
    </>,
    <>
      <b className="text-slate-100">8 - 16 GB</b> Memory for each app.
    </>,
    <>
      <b className="text-slate-100">4 - 8 Core </b> Processor for each App.
    </>,
  ],
];

const Pricing = ({ title, money, features, color }: prop) => (
  <div className="border border-slate-400 p-5 rounded-lg text-lg bg-[#ffffff1e]  transition-all duration-150  gap-8">
    <h2 className={`text-${color}-300 font-bold text-2xl`}>{title}</h2>
    <p className="text-slate-200 text-3xl sm:text-5xl py-6 text-left">{money}</p>
    <ul className="flex flex-col gap-3 text-slate-400 justify-center ">
      {features.map((arr, index) => (
        <>
          {' '}
          <li key={index}>{arr}</li>
          <div
            className={
              index + 1 != features.length ? 'border border-transparent  border-b-slate-500' : ''
            }
          />
        </>
      ))}
    </ul>
  </div>
);
const Cont = () => {
  return (
    <div id="price" className="cont flex flex-col gap-3 my-12">
      <h2
        className={
          'text-3xl leading-normal sm:leading-normal sm:text-4xl font-bold  glow text-slate-300 mb-0 text-center'
        }
      >
        Thinking about <span className="text-sky-300">Price?</span>
      </h2>
      <p className="text-xl sm:text-2xl mb-3 text-center">
        WebZap is free for small scale use and has cheap options for more features and storage.
      </p>
      <div className="flex flex-col lg:flex-row  gap-8">
        <Pricing title="Personal" money={'Free'} color="sky" features={arr[0]} />
        <Pricing
          title="Teams"
          color="emerald"
          money={
            <>
              ৳ 4,000<span className="text-xl sm:text-3xl text-slate-400">/month</span>
            </>
          }
          features={arr[1]}
        />
        <Pricing
          title="Corporate"
          money={
            <>
              ৳ 12,000<span className="text-xl sm:text-3xl text-slate-400">/month</span>
            </>
          }
          color="red"
          features={arr[2]}
        />
      </div>
    </div>
  );
};

export default Cont;
