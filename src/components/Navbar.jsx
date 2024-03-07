import hamburger_aktif from "../assets/hamburger_aktif.svg"
import hamburger_nonaktif from "../assets/hamburger_nonaktif.svg"
import { useState } from "react";

function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <>
      <header className="bg-white fixed top-0  w-full flex  z-10 py-2 pl-52 mx-auto">
        <div className="container">
          <div className="flex items-center justify-between w-full relative">
            <div className="">
              <a href="#home" class="text-slate-600 font-sacramento font-bold text-4xl block">Sedap Malam</a>
            </div>
            <div className="flex items-center px-4 ">
              <button class="block absolute right-4 lg:hidden" id="hamburger" type="button" name="hamburger"
                onClick={() => setToggleNavbar(toggleNavbar ? false : true)}>
                <img src={toggleNavbar ? hamburger_aktif : hamburger_nonaktif} alt="" />
              </button>
              <nav className={toggleNavbar ? "block absolute py-2 max-w-[250px] w-full right-0 bg-white shadow-lg rounded-l top-full lg:block lg:static lg:max-w-full lg:shadow-none lg:rounded-none" : "hidden flex lg:justify-end gap-4 font-bold  max-w-[250px] w-full right-0 bg-white shadow-lg rounded-l top-full lg:block lg:static lg:max-w-full lg:shadow-none lg:rounded-none"}>
                <ul class="block lg:flex lg:right-0 ">
                  <li className="group"><a href="#home" class=" font-bold border-slate-400 text-base text-slate-500 py-2 mx-8 flex group-hover:text-slate-800">Home</a></li>
                  <li className="group"><a href="#bestseller" class="font-bold  border-slate-400 text-base text-slate-500 py-2 flex mx-8 group-hover:text-slate-800">Best Seller</a></li>
                  <li className="group"><a href="#ourchef" class=" font-bold border-slate-400 text-base text-slate-500 py-2 mx-8 flex group-hover:text-slate-800">Our Chef</a></li>
                  <li className="group"><a href="https://www.instagram.com/adidyadmw/" class=" ml-6 bg-slate-300 px-2 py-2 rounded-xl font-bold border-slate-400 text-base text-slate-500 py-2 mx-8 flex group-hover:text-slate-800">Reservation</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;