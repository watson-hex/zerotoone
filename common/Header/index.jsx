import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import Logo from "../../public/assets/svg/logo.svg";
import Profile from "../../public/assets/svg/profile.svg";

export default function Header(props) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="z-50 flex items-center flex-wrap bg-white p-3 rounded-b-3xl drop-shadow-md ">
      <Link href="/">
        <a className="inline-flex items-center">
          <Image src={Logo} alt="Hello" />
          <span className="text-indigo-800 text-3xl font-bold md:ml-5 tracking-wide">
            Zero2One
          </span>
        </a>
      </Link>
      <button
        className="inline-flex p-3 rounded lg:hidden text-indigo-800 ml-auto outline-none"
        onClick={handleClick}
      >
        <svg
          className="w-7 h-6"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
      <div
        className={`${
          active ? "" : "hidden"
        }   w-full md:inline-flex md:flex-grow md:w-auto`}
      >
        <form noValidate action="" role="search" className="mx-auto ">
          <input
            onChange={(event) => props.handleSearch(event)}
            placeholder="Search projects"
            className=" indent-2 font-semibold border-2 rounded-lg hover:text-lg focus:text-lg h-12 my-2  md:w-[48rem] w-[20rem]  "
            style={{
              borderColor: "#F3F8FF",
              backgroundColor: "#F3F8FF",
              color: "#9D9D9D",
            }}
            title="Search bar"
          />
        </form>
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link href="/registeration">
            <a className=" text-indigo-800 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-xl ">
              Add Project
            </a>
          </Link>
          <Link href="/myprojects/all">
            <a className="text-indigo-800 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-xl">
              My Projects
            </a>
          </Link>
          <Link href="/myprojects/bookmarks">
            <a className=" text-indigo-800 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-xl ">
              My Bookmarks
            </a>
          </Link>
          <Menu as="div" className=" relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full rounded-md   px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                <Image src={Profile} alt="Hello" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className=" origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                <div className="py-1 z-50">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={
                          (active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm")
                        }
                      >
                        Edit
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={
                          (active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm")
                        }
                      >
                        Duplicate
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={
                          (active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm")
                        }
                      >
                        Archive
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={
                          (active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm")
                        }
                      >
                        Move
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={
                          (active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm")
                        }
                      >
                        Share
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={
                          (active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm")
                        }
                      >
                        Add to favorites
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={
                          (active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm")
                        }
                      >
                        Delete
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
}
