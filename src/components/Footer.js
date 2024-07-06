import { BiCopyright } from "react-icons/bi";
import Linkedin from "../items/Linkedin.jpg";
import Twitter from "../items/Twitter.png";
import Github from "../items/Github.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Footer = () => {
  const [email,setEmail] = useState("") 
  const handleEmail = (emails) => {
    setEmail(emails);
  }
  return (
    <>
    <div className="bg-black h-48 pt-2 flex justify-between text-white border-t-2 border-gray-100">
      <div className="flex flex-col">
        <div className="mx-12 my-2 text-2xl text-orange-500 font-bold">About us </div>
        <p className="w-60 ml-12">Delicious meals delivered to your door. Order now! Eat well, effortlessly.</p>
        <div className="flex ml-8 mt-1">
          <button className="mx-1">
            <a href="https://github.com/prtxdongare" target="_blank">
              <img
                src={Github}
                alt=""
                className="rounded-full w-14"
              />
            </a>

          </button>
          <button className="hover:shadow-white rounded-full  ">
            <a href="https://www.linkedin.com/in/pratik-d-2329171a7/" target="_blank"><img src={Linkedin} alt="" className="h-11 -ml-1"/></a>
          </button>
          <button className="bg-white rounded-full mt-2 mb-2 px-1 mx-1">
            <a href="https://twitter.com/PratikD88762688" target="_blank"><img src={Twitter} alt="" className="h-7"/></a>
          </button>
        </div>
      </div>
      <div className="hidden lg:flex list-none mt-16">
      <Link className="px-5 hover:text-orange-500 h-10 pt-[6]
          " to="/">
            <li>Home</li>
          </Link>
          <Link className="px-5 hover:text-orange-500 h-10 pt-[6]
          " to="/about">
            <li>About us</li>
          </Link>
          <Link className="px-5 hover:text-orange-500 h-10 pt-[6]
          " to="/faq">
            <li>FAQ</li>
          </Link>
          <Link className="px-5 hover:text-orange-500 h-10 pt-[6]
          " to="/cart" >
            <li data-testid="cart">Cart</li>
          </Link>
          <Link className="px-5 hover:text-orange-500 h-10 pt-[6]
          " to="/Login" >
            <li data-testid="cart">Login</li>
          </Link>
      </div>
      <div className="hidden sm:block mt-11 mr-11">
        <div className="mb-3 font-bold">Subscribe to newsletter for deal updates</div>
        <input type="email" name="email" id="email" placeholder="Enter your email"  value={email} onChange={(e) =>{
          setEmail(e.target.value)
          }}  className="p-2 bg-zinc-800  border border-gray-500 "/>
        <button className="bg-white text-black py-2 px-6 rounded-lg  ml-2 hover:bg-orange-500" onClick={() => setEmail("")}> Submit</button>
      </div>
    </div>
    <div className="hidden md:flex bg-zinc-900 h-15  text-zinc-500 justify-center max-w-full">
      <div className="flex  ">
        <div className="flex mr-60 border-b-2 border-b-slate-600 hover:text-white hover:border-b-white">
      <p className="mt-[5]">BHOOKH LAGI HAI? </p>
        <BiCopyright className="h-9 ml-1 mr-1"/>  
        <p className="mt-[5]"> 2023 </p>
        </div>
        <div className="mt-[5] border-b-2 border-b-slate-600 hover:text-white hover:border-b-white">
        codypratik@gmail.com
        </div>
        </div>
       
    </div>
    </>
  );
};
