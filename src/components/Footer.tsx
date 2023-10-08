import React from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="site-footer bg-blue px-md w-full">
      <div className="container h-full mx-auto items-center py-50">
        <div className="w-full flex justify-start items-center h-full py-5xs gap-md">
          <div>
            <Link href="/">
              <span className="text-white text-xl font-semibold">Logo</span>
              <p className={"text-xs text-white opacity-50 mb-md"}>We help developers, designers and website owner's create stunning websites. We have been building a huge collection of website templates for every business and industry needs. Simply select your favourite template, edit, download and launch 🚀</p>
            </Link>
            <div className={"w-full inline-flex gap-5 items-center justify-start"}>
              <Link href="/" className={"p-5 bg-white-site rounded-6xs w-md h-md inline-flex text-2xs"}>
                <FaFacebookF />
              </Link>
              <Link href="/" className={"p-5 bg-white-site rounded-6xs w-md h-md inline-flex text-2xs"}>
                <FaTwitter />
              </Link>
              <Link href="/" className={"p-5 bg-white-site rounded-6xs w-md h-md inline-flex text-2xs"}>
                <FaInstagram />
              </Link>
              <Link href="/" className={"p-5 bg-white-site rounded-6xs w-md h-md inline-flex text-2xs"}>
                <FaPinterestP />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start w-1/2">
            <ul className="flex flex-col py-3xs px-0 justify-start">

              <li className="nav-item">
                <Link href="/" className={"text-sm text-white-site leading-md py-3xs px-0"}>Home</Link>
              </li>

              <li className="nav-item">
                <Link href="/" className={"text-sm text-white-site leading-md py-3xs px-0"}>Home</Link>
              </li>

              <li className="nav-item">
                <Link href="/" className={"text-sm text-white-site leading-md py-3xs px-0"}>Home</Link>
              </li>
            </ul>
            <h4 className="text-white py-md text-sm  font-bold">Are you a Designer?</h4>
            <ul className="flex flex-col justify-start items-start gap-0 text-sm  font-normal">

              <li className="nav-item">
                <Link href="/" className={"text-sm text-white leading-md py-3xs px-0"}>Home</Link>
              </li>

              <li className="nav-item">
                <Link href="/" className={"text-sm text-white-site leading-md py-3xs px-0"}>Blog</Link>
              </li>

              <li className="nav-item">
                <Link href="/" className={"text-sm text-white-site leading-md py-3xs px-0"}>FAQ</Link>
              </li>

            </ul>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
