import React from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  return (
    <header className="site-header site-header-marketplace bg-blue shadow-sm px-md h-8xl">
      <div className="h-full mx-auto items-center">
        <div className="w-full flex justify-start items-center h-full py-5xs">
          <Link href="/">
            <span className="text-white text-xl font-semibold">Logo</span>
          </Link>
          <nav className="flex justify-start items-center">
            <ul className="flex lg:px-15">
              <li className="nav-item"> 
                <Link href="/" className={"inline-flex items-center gap-2xs text-white-site"}> 
                  <RxHamburgerMenu className={"w-18 h-18"} /> 
                  <span>Web Templates</span> 
                </Link>
              </li>
            </ul>

            <ul className="flex justify-start items-center gap-0 border-l-px border-l-white-site text-sm  font-normal">

              <li className="nav-item">
                <Link href="/" className={"text-sm text-white leading-md px-md"}>Home</Link>
              </li>

              <li className="nav-item">
                <Link href="/" className={"text-sm text-white-site leading-md px-md"}>Blog</Link>
              </li>

              <li className="nav-item">
                <Link href="/" className={"text-sm text-white-site leading-md px-md"}>FAQ</Link>
              </li>

              <li className="nav-item">
                <Link href="/" className={"text-sm text-white-site leading-md px-md"}>WordPress Themes</Link>
              </li>

              <li className="nav-item">
                <Link href="https://1W3.io" className={"text-sm text-white-site leading-md px-md"}>1W3</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </header>
  );
};

export default Header;
