import React, { useState, useEffect } from "react";
// components/layout.js
import axios from "axios";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
export const Cardstoshow = React.createContext(null);

export default function Mainlayout({ children }) {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

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
      axios("https://jsonplaceholder.typicode.com/albums/2/photos")
        .then((response) => {
          console.log(response.data);
          setAllData(response.data);
          setFilteredData(response.data);
        })
        .catch((error) => {
          console.log("Error getting fake data: " + error);
        });
    } else {
      axios("https://jsonplaceholder.typicode.com/albums/1/photos")
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
    <div className="h-screen bg-sky-50">
      <header className="z-50">
        <Header handleSearch={handleSearch} />
      </header>
      <main className="h-full bg-sky-50">
        <Cardstoshow.Provider value={filteredData}>
          <main>{children}</main>
        </Cardstoshow.Provider>
      </main>
      {/* <footer className="h-10bg-sky-50">Footer</footer> */}
    </div>
  );
}
