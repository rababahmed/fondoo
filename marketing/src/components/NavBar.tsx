import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import Logo from "./blocks/Logo";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";

interface Props {
  data: any;
}

const NavBar = ({ data }: Props) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <header className="bg-white lg:px-20 py-4 2xl:px-40">
        <div className="flex justify-between items-center flex-col md:flex-row gap-2 md:gap-0">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <div className="flex justify-between gap-2 md:gap-4">
            <div>
              <div
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <button>
                  <div
                    className="px-2 py-1 font-inter font-bold md:text-lg cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Features
                  </div>
                </button>

                <div
                  className={
                    isOpen
                      ? "absolute z-10 w-screen max-w-sm px-4 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-md lg:translate-x-1/4"
                      : "hidden"
                  }
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-8 bg-white p-7">
                      {data.body[0].items.map((item: any) => (
                        <Link key={item.title[0].text} href={item.link.url}>
                          <a className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                              <Image
                                src={item.icon.url}
                                alt={item.icon.alt}
                                height={40}
                                width={40}
                              />
                            </div>
                            <div className="ml-4">
                              <p className="text-md font-inter font-medium text-gray-900">
                                {item.title[0].text}
                              </p>
                              <p className="text-sm font-inter text-gray-500">
                                {item.description[0].text}
                              </p>
                            </div>
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {data.body[1].items.map((item: any) => (
              <Link key={item.title[0].text} href={item.link.url}>
                <a className="px-2 py-1 font-inter font-bold md:text-lg cursor-pointer hover:underline">
                  {" "}
                  {item.title[0].text}{" "}
                </a>
              </Link>
            ))}

            <div className="hidden md:block">
              <button
                onClick={() => router.push("https://app.fondoo.io")}
                className="mx-1 border-gray-800 border-2 rounded-lg font-inter font-bold py-1 px-2 md:px-4 text-black hover:bg-gray-800 hover:text-white"
              >
                Login
              </button>
              <button
                onClick={() => router.push("https://fondoo.io/signup")}
                className="mx-1 bg-black border-black border-2 rounded-lg font-inter font-bold py-1 px-2 md:px-4 text-white hover:bg-gray-800 hover:border-gray-800"
              >
                Try Free
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
