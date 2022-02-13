import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "./blocks/Logo";

const NavBar = () => {
  const router = useRouter();
  return (
    <>
      <section className="bg-white lg:px-20 py-4 2xl:px-40">
        <div className="flex justify-between items-center ">
          <Logo />
          <div className="flex justify-between">
            <div className="flex">
              <Link href="#">
                <a className="px-2 py-1 font-inter font-bold text-lg cursor-pointer hover:underline">
                  Home
                </a>
              </Link>
              <Link href="#">
                <a className="px-2 py-1 font-inter font-bold text-lg cursor-pointer hover:underline">
                  Pricing
                </a>
              </Link>
              <Link href="#">
                <a className="px-2 py-1 font-inter font-bold text-lg cursor-pointer hover:underline">
                  Support
                </a>
              </Link>
            </div>
            <button
              onClick={() => router.push("https://app.fondoo.io")}
              className="bg-gray-800 rounded-lg font-inter font-bold py-1 px-4 text-white"
            >
              Login
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
