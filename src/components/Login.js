import { useState } from "react";
import google from '../items/google.jpeg'
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (emails) => {
    setEmail(emails);
  };
  return (
    <div className="bg-red-100 h-[700] justify-center flex items-center">
      <div className="flex">
        <img
          src="https://images.unsplash.com/photo-1615887087343-6a32f45f27a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt=""
          className="w-[380]"
        />
        <div className="w-[350] bg-white flex flex-col items-center">
          <h1 className="text-xl text-black mt-12 tracking-wide font-serif font-semibold">
            {" "}
            Bhook Lagi Hai?{" "}
          </h1>
          <h1 className="text-lg text-black mt-12 tracking-wide font-serif font-light">
            {" "}
            Welcome Back{" "}
          </h1>
          <h2 className="mt-10 text-sm mr-48 font-semibold">Email Address</h2>
          <input
            type="email"
            name="email"
            id="email"
            placeholder=""
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className=" w-[280] bg-white text-slate-600  border-b-2 pb-1 outline-none "
          />
          <h2 className="mt-4  text-sm mr-56 font-semibold">Password</h2>
          <input type="password" name="" id="" className=" w-[280] bg-white  border-b-2 pb-1 outline-none "
          value={password}
           onChange={(e) => {
            setPassword(e.target.value);
          }}/>
          <h2 className="text-xs text-slate-500 ml-44 mt-2 font-bold hover:cursor-pointer hover:border-b-2 hover:text-slate-300">Forgot Password?</h2>
          <button
            className=" text-white font-semibold py-2 bg-red-400 px-12  rounded-2xl mt-10  hover:bg-red-300"
            onClick={() => {
                setEmail("")
            setPassword("")}}
          >
            {" "}
            Sign In
          </button>
          <div class="relative flex py-5 items-center w-[150] mr-1">
    <div class="flex-grow border-t border-gray-400"></div>
    <span class="flex-shrink mx-2 text-gray-400 mb-1">or</span>
    <div class="flex-grow border-t border-gray-400"></div>
</div>
<div className="flex font-sans hover:bg-red-100 hover:cursor-pointer py-2 px-5 rounded-3xl">
    <img src={google} className="w-5" alt="" />
    <h1 className="text-xs ml-2 mt-[2] text-black font-semibold">Sign in with google</h1>
</div>
<div className="text-xs font-semibold mt-3 ml-1">
    New here? <span className="border-b-2 hover:cursor-pointer hover:text-gray-800">Create Account</span>
</div>
        </div>
      </div>
    </div>
  );
};
