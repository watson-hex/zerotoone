import React, { useState, useEffect } from "react";
// components/layout.js
import axios from "axios";

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

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => {
        console.log(response.data);
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);

  return (
    // <div className=" min-h-screen">
    //   <div className=" h-screen bg-sky-50">
    //     <div className=" mb-12 ">
    //       <Header handleSearch={handleSearch} />
    //     </div>

    //     <Footer />
    //   </div>
    // </div>
    // <div className="flex flex-col h-screen justify-between">
    //   <header className=" bg-red-500">
    //     <Header handleSearch={handleSearch} />
    //   </header>
    //   <main className="  bg-green-500">
    //     {" "}
    //     <Cardstoshow.Provider value={filteredData}>
    //       <main>{children}</main>
    //     </Cardstoshow.Provider>
    //   </main>
    //   <footer className="h-10 bg-blue-500">Footer</footer>
    // </div>

    <div className="h-screen bg-blue-100">
      <header className="">
        <Header handleSearch={handleSearch} />
      </header>
      <main className="h-full bg-blue-100">
        <Cardstoshow.Provider value={filteredData}>
          <main>{children}</main>
        </Cardstoshow.Provider>
      </main>
      <footer className="h-10 bg-white-100">Footer</footer>
    </div>
  );
}
