"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // This is the line that fixes your error!
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const pathUrl = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  return (
    <header
      className={`ud-header left-0 top-0 z-40 flex w-full items-center ${
        sticky
          ? "shadow-nav fixed z-[999] border-b border-stroke bg-white/80 backdrop-blur-[5px]"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          {/* LOGO AREA */}
<div className="w-auto max-w-full px-4 font-bold text-xl lg:text-2xl">
  <Link href="/" className={`flex items-center gap-4 ${sticky ? "py-2" : "py-5"}`}>
    {/* Enlarged Logo */}
    <img
      src="/images/logo/logo.png" 
      alt="Diocese Logo"
      className="h-14 w-14 md:h-16 md:w-16 object-contain transition-all duration-300" 
    />
    
    {/* Adjusted Text Size and Leading */}
    <span className={`leading-tight tracking-tight font-bold ${sticky || pathUrl !== "/" ? "text-blue-900" : "text-white"}`}>
  <span className="text-[12px] sm:text-sm uppercase block">
    Anglican Diocese of Otukpo
  </span>
</span>
  </Link>
</div>

          {/* NAVIGATION & ACTION BUTTON */}
          <div className="flex w-full items-center justify-end px-4">
            <div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                    navbarOpen ? " top-[7px] rotate-45" : " "
                  } ${sticky || pathUrl !== "/" ? "bg-dark" : "bg-white"}`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                    navbarOpen ? "opacity-0" : " "
                  } ${sticky || pathUrl !== "/" ? "bg-dark" : "bg-white"}`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                    navbarOpen ? " top-[-8px] -rotate-45" : " "
                  } ${sticky || pathUrl !== "/" ? "bg-dark" : "bg-white"}`}
                />
              </button>

              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[0.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0 lg:visible lg:top-0"
                }`}
              >
                <ul className="block lg:flex lg:items-center lg:gap-x-8 xl:gap-x-12">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="group relative">
                      <Link
                        href={menuItem.path || "#"}
                        onClick={() => setNavbarOpen(false)}
                        className={`flex py-2 text-base font-medium transition-colors hover:text-yellow-500 lg:inline-flex lg:py-6 ${
                          sticky || pathUrl !== "/"
                            ? "text-dark dark:text-white"
                            : "text-white"
                        } ${pathUrl === menuItem.path ? "!text-yellow-500" : ""}`}
                      >
                        {menuItem.title}
                      </Link>
                    </li>
                  ))}
                  
                  {/* MOBILE-ONLY GIVE BUTTON */}
                  <li className="lg:hidden mt-4">
                    <Link
                      href="/donate"
                      onClick={() => setNavbarOpen(false)}
                      className="flex w-full items-center justify-center rounded-md bg-primary py-3 px-6 text-base font-semibold text-white transition duration-300 hover:bg-opacity-90"
                    >
                      Give Now
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* DESKTOP GIVE BUTTON */}
            <div className="hidden items-center justify-end pr-16 sm:flex lg:pr-0">
  <Link
    href="/donate"
    className="ease-in-out duration-300 ml-10 rounded-md bg-primary px-8 py-3 text-base font-bold text-white shadow-md hover:bg-opacity-90 hover:shadow-xl hover:-translate-y-1 transform transition-all md:block"
  >
    Give Now
  </Link>
</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;