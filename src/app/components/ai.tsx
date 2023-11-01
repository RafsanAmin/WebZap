const Cont = () => {
  return (
    <div className="bg-[#0a1a2742] py-12 border-slate-600 border-l-0 border-r-0 border">
      <div className="cont flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-10 justify-center align-center">
          <img
            className="w-[45%] sm-[95%] max-w-[330px]"
            style={{
              filter: 'invert(1)',
              opacity: '55%',
            }}
            src="/ai.png"
            alt=""
          />
          <div>
            <h2
              className={
                'text-3xl leading-normal sm:leading-normal sm:text-4xl font-bold  glow text-slate-300 mb-0'
              }
            >
              We auto-manage app with <span className="text-sky-300">AI</span>
            </h2>
            <p className="text-xl sm:text-2xl mb-3">
              In the mordern world, usage of AI can improve the existing technologies. So we use
              AI-based technology to manage your app. It ensures-
            </p>
            <ul className="list-disc pl-6 pt-3 flex flex-col gap-2 text-xl text-slate-400">
              <li>Detection of your App Technology</li>
              <li>Proper Load-balancing based on traffic.</li>
              <li>Stronger Security.</li>
              <li>Utilized resource management.</li>
              <li>Faster performance in every aspect.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cont;
