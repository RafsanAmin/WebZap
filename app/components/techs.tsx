import { AOSComp, AOSCont } from './AOS';

const imgSet = ['/r.png'];

const Cont = () => {
  return (
    <AOSComp anim={'left-in'} delay={50}>
      {' '}
      <div className="cont flex flex-col gap-3">
        <h2
          className={
            'text-3xl leading-normal sm:leading-normal sm:text-4xl font-bold  glow text-slate-300 mb-0 text-center'
          }
        >
          Supported <span className="text-red-300">Technologies</span>
        </h2>
        <p className="text-xl sm:text-2xl mb-3 text-center">
          We support wide-ranges of Web Technology with addition to Automatic Technology Detection.
        </p>
        <div className="flex flex-wrap gap-2 place-content-center">
          {[...Array(19).keys()].map((arr, index) => (
            <AOSComp
              anim={'zoom-in'}
              delay={150}
              key=""
              classNameCont="w-[30%] aspect-square max-w-[100px] max-h-[100px] grid place-items-center  border border-slate-400 p-2 rounded-lg text-lg bg-[#ffffff1e]  transition-all duration-150  gap-8 hover:scale-105"
            >
              {' '}
              <img
                className="max-w-[96px] w-[100%] max-h-[100%] rounded-md"
                src={`/techs/${arr + 1}.png`}
                alt=""
              />
            </AOSComp>
          ))}
        </div>
      </div>
    </AOSComp>
  );
};

export default Cont;
