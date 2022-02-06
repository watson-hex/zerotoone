import React, { useState, useEffect } from "react";
// components/layout.js

import { useRouter } from "next/router";
import GoogleSignIn from "../components/GoogleSignIn";
import Header from "./Header";
import Footer from "./Footer";
import { LoginContext } from "../utilities/auth";
export const Cardstoshow = React.createContext(null);
import Script from "next/script";

import axios from "../utilities/axios";
export default function Mainlayout({
  children,
  isAuthenticated,
  setLoggedIn,
  setLoggedOut,
}) {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const [googleState, setGoogleState] = useState("button");

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      return data.title.search(value) != -1;
    });
    setFilteredData(result);
  };
  const router = useRouter();
  console.log(router.asPath);

  useEffect(() => {
    if (router.asPath === "/myprojects/all") {
      axios("/ecell/mine")
        .then((response) => {
          console.log(response.data);
          setAllData(response.data);
          setFilteredData(response.data);
        })
        .catch((error) => {
          console.log("Error getting fake data: " + error);
        });
    } else if (router.asPath === "/myprojects/bookmarks") {
      axios("/ecell/bookmarks")
        .then((response) => {
          console.log(response.data);
          setAllData(response.data);
          setFilteredData(response.data);
        })
        .catch((error) => {
          console.log("Error getting fake data: " + error);
        });
    } else {
      axios("/ecell/all")
        .then((response) => {
          console.log(response.data);
          setAllData(response.data);
          setFilteredData(response.data);
        })
        .catch((error) => {
          console.log("Error getting fake data: " + error);
        });
    }
  }, []);

  return (
    <LoginContext.Provider value={isAuthenticated}>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="beforeInteractive"
      />
      <div className="h-screen bg-sky-50">
        <header className="z-50">
          <Header
            handleSearch={handleSearch}
            isAuthenticated={isAuthenticated}
            setLoggedIn={setLoggedIn}
            setStage={setGoogleState}
            stage={googleState}
            visibility
          />
        </header>
        <main className="h-full bg-sky-50">
          <Cardstoshow.Provider value={filteredData}>
            <main>{children}</main>
          </Cardstoshow.Provider>
        </main>
        {/* <footer className="h-10bg-sky-50">Footer</footer> */}
      </div>
    </LoginContext.Provider>
  );
}
