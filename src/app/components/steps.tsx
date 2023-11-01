import React from 'react';
const Icon = () => {
  return <></>;
};

type stepProps = {
  sl: string | number;
  imgSet: string[];
  title: string;
  desc: string;
};

const Steps = ({ sl, imgSet, title, desc }: stepProps) => (
  <div className="flex gap-3 flex-col flex-1">
    <div className="basis-[30px] min-w-[30px] w-[30px] h-[30px] rounded-full bg-white grid place-items-center font-semibold self-center">
      {sl}
    </div>

    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        {imgSet.map((arr) => (
          <>
            <img className="w-[40px]" src={arr} alt=""></img>
          </>
        ))}
      </div>
      <h3 className="text-xl sm:text-2xl font-bold  glow text-slate-300">{title}</h3>
      <p>{desc}</p>
    </div>
  </div>
);

const Cont = () => {
  return (
    <div className="cont flex flex-col gap-3" id="about">
      <h2
        className={
          'text-3xl leading-normal sm:leading-normal sm:text-4xl font-bold  glow text-slate-300 mb-0'
        }
      >
        You&apos;re just <span className="text-emerald-300">3 steps</span> away
      </h2>
      <p className="text-xl sm:text-2xl mb-3">
        Thinking about complexity? No problem. Host Apps in just 3 steps
      </p>
      <div className="border border-slate-400 p-7 rounded-lg text-lg bg-[#ffffff11]  transition-all duration-150 flex gap-8 flex-col lg:flex-row">
        <Steps
          sl={1}
          imgSet={['/gh.png', '/gl.png']}
          title="Connect your Repo"
          desc="Connect you Github or GitLab Repository of your app code and We will automatically host your app."
        />
        <Steps
          sl={2}
          imgSet={['/t.png', '/r.png']}
          title="Pick your template"
          desc="Pick your template based on technology. Our AI-powered technology detection system can automatically pick template for you."
        />
        <Steps
          sl={3}
          imgSet={['/push.svg']}
          title="Push to update"
          desc="You don't have to update your app manually by re-uploading. Just Git Push your app and we will handle your app update."
        />
        {/* <Steps sl={2} />
        <Steps sl={3} /> */}
      </div>
    </div>
  );
};

export default Cont;
