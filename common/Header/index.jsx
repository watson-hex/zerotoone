import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import {Button} from "react-bootstrap";
import GoogleSignIn from "../../components/GoogleSignIn";
import Logo from "../../public/assets/svg/logo.svg";
import Profile from "../../public/assets/svg/profile.svg";
import {setLoggedOut} from "../../utilities/auth";

function signOut() {
    setLoggedOut()
    window.location.href = "/";
}

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
          {!props.isAuthenticated ?
              <GoogleSignIn
                  isAuthenticated={props.isAuthenticated}
                  setLoggedIn={props.setLoggedIn}
                  setStage={props.setStage}
                  stage={props.stage}
                  visibility
              />
              : <button onClick={signOut} className="text-indigo-800 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-xl ">
                  Sign Out
              </button>
          }

        </div>
      </div>
    </nav>
  );
}
