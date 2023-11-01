import React from 'react';

const Login = () => {
  return (
    <div className=" cont grid place-items-center h-[88vh] ">
      {' '}
      <div className="w-full max-w-[550px] grid">
        <h2
          className={
            'text-3xl leading-normal sm:leading-normal sm:text-4xl font-bold  glow text-slate-300 mb-5'
          }
        >
          App <span className="text-sky-300">Login</span>
        </h2>
        <input
          className="bg-[#ffffff11] px-5 py-4 rounded-md block mb-5 w-full"
          placeholder="Name"
        />
        <input
          className="bg-[#ffffff11] px-5 py-4 rounded-md block mb-5 w-full"
          type="password"
          placeholder="Password"
        />
        <button
          className={
            'align-self-right min-w-[250px] my-auto text-slate-300 glow inline-block border border-slate-400 py-2 px-10 rounded-full text-lg hover:bg-[#ffffff11] hover:px-12 transition-all duration-150'
          }
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
