"use client";
import { AlignRight, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { Button } from "../ui/button";
import { ToggleButton } from "../theme/ToggleButton";

const MenuItem = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="max-w-[1140px] flex flex-wrap items-center justify-between mx-auto p-4 ">
      <Logo />
      <button
        data-collapse-toggle="navbar-solid-bg"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-solid-bg"
        aria-expanded={isMenuOpen}
        onClick={handleToggle}
      >
        <span className="sr-only">Open main menu</span>
        {isMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <AlignRight className="w-6 h-6" />
        )}
      </button>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full md:block md:w-auto lg:flex items-center lg:gap-4`}
        id="navbar-solid-bg"
      >
        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "text-blue-500 block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-fuchsia-500 md:dark:hover:text-fuchsia-400 dark:hover:bg-gray-700 dark:hover:dark:hover:text-fuchsia-400 md:dark:hover:bg-transparent"
                  : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              } `}
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                pathname === "/about"
                  ? "text-blue-500 block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-fuchsia-500 md:dark:hover:text-fuchsia-400 dark:hover:bg-gray-700 dark:hover:dark:hover:text-fuchsia-400 md:dark:hover:bg-transparent"
                  : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              }  `}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact"
                  ? "text-blue-500 block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-fuchsia-500 md:dark:hover:text-fuchsia-400 dark:hover:bg-gray-700 dark:hover:dark:hover:text-fuchsia-400 md:dark:hover:bg-transparent"
                  : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              }  `}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`${
                pathname === "/blog"
                  ? "text-blue-500 block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-fuchsia-500 md:dark:hover:text-fuchsia-400 dark:hover:bg-gray-700 dark:hover:dark:hover:text-fuchsia-400 md:dark:hover:bg-transparent"
                  : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              }  `}
            >
              Blog
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-2 mt-4 lg:mt-0">
          <div>
            <Button variant="customButton" className="rounded-full ">
              <Link
                href="https://docs.google.com/document/d/1Vk96fGeZOek9Dnagn4AMIYkaZ-OdD83u4MKtSYvHBTA/edit?usp=sharing"
                target="_blank"
              >
                {" "}
                Download Resume
              </Link>
            </Button>
          </div>
          <ToggleButton />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
