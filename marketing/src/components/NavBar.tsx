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
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <div className="flex justify-between gap-4">
            <Link href="#features">
              <a className="px-2 py-1 font-inter font-bold text-lg cursor-pointer hover:underline">
                Features
              </a>
            </Link>
            <Link href="#pricing">
              <a className="px-2 py-1 font-inter font-bold text-lg cursor-pointer hover:underline">
                Pricing
              </a>
            </Link>
            <Link href="mailto:hello@fondoo.io">
              <a className="px-2 py-1 font-inter font-bold text-lg cursor-pointer hover:underline">
                Support
              </a>
            </Link>

            <button
              onClick={() => router.push("https://app.fondoo.io")}
              className="mx-1 border-gray-800 border-2 rounded-lg font-inter font-bold py-1 px-4 text-black hover:bg-gray-800 hover:text-white"
            >
              Login
            </button>
            <button
              onClick={() => router.push("https://app.fondoo.io")}
              className="mx-1 bg-black rounded-lg font-inter font-bold py-1 px-4 text-white hover:bg-gray-800"
            >
              Signup
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
