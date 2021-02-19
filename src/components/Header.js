import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { menuData } from "../data/menuData";
import BtnThemeSwitch from "./BtnThemeSwitch";
// import { useTheme } from "next-themes";

export default function Header() {
  // const { theme, setTheme } = useTheme();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <header className="relative">
        <div className="pt-6 bg-white dark:bg-gray-900  transition duration-400">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/">
                  <a>
                    <span className="sr-only">Workflow</span>
                    <Image
                      className="h-8 w-auto sm:h-10"
                      width={30}
                      height={30}
                      src={
                        "/assets/images/logos/workflow-mark-teal-200-cyan-400.svg"
                      }
                      alt="Branding logo"
                    />
                  </a>
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <button
                    onClick={handleClick}
                    type="button"
                    // className="bg-gray-200 dark:bg-gray-500 rounded-md p-2 inline-flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                    className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="main-menu"
                    aria-haspopup="true"
                    aria-label="Open main menu"
                  >
                    <span className="sr-only">Open main menu</span>
                    {/* <!-- Heroicon name: outline/menu --> */}
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="hidden space-x-8 md:flex md:ml-10">
                {menuData.map((link) => (
                  <Link key={link.title} href={link.href}>
                    <a className="text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 tracking-normal px-4 py-2 rounded">
                      {link.title}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link href="/">
                <a className="text-base font-medium text-gray-900 dark:text-gray-100  hover:text-gray-800">
                  Log in
                </a>
              </Link>
              <Link href="/">
                <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
                  Start free trial
                </a>
              </Link>
              {/* <!--
              //
            Button theme switch
            //
          --> */}
              <BtnThemeSwitch />
            </div>
          </nav>
        </div>

        {/* <!--
            Mobile menu, show/hide based on menu open state.

            Entering: "duration-150 ease-out"
              From: "opacity-0 scale-95"
              To: "opacity-100 scale-100"
            Leaving: "duration-100 ease-in"
              From: "opacity-100 scale-100"
              To: "opacity-0 scale-95"
          --> */}

        <div
          className={`absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden ${
            click
              ? "duration-150 ease-out opacity-100 scale-100"
              : "duration-150 ease-in opacity-0 scale-95"
          }`}
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Link href="/">
                  <a>
                    <span className="sr-only">Workflow</span>
                    <Image
                      width={30}
                      height={30}
                      src={
                        "/assets/images/logos/workflow-mark-teal-500-cyan-600.svg"
                      }
                      alt="Branding logo"
                    />
                  </a>
                </Link>
              </div>

              <div className="-mr-2">
                <button
                  onClick={handleClick}
                  className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-label="Close menu"
                  type="button"
                >
                  <span className="sr-only">Close menu</span>
                  {/* <!-- Heroicon name: outline/x --> */}
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              className="pt-5 pb-6"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div className="px-2 space-y-1" role="none">
                {menuData.map((link) => (
                  <Link key={link.title} href={link.href}>
                    <a
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                      role="menuitem"
                    >
                      {link.title}
                    </a>
                  </Link>
                ))}
              </div>
              <div role="none" className="mt-6 px-5">
                <Link href="/">
                  <a className="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700">
                    Start free trial
                  </a>
                </Link>
              </div>
              <div role="none" className="mt-6 px-5">
                <p className="text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <Link href="/">
                    <a className="text-gray-900 hover:underline">Login</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
