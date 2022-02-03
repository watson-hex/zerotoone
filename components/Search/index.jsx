import React, { useState, useEffect } from "react";
import axios from "axios";
import Projectcard from "../Projectcard";

export default function Search(props) {
  // const [allData, setAllData] = useState([]);
  // const [filteredData, setFilteredData] = useState(allData);

  // const handleSearch = (event) => {
  //   let value = event.target.value.toLowerCase();
  //   let result = [];
  //   console.log(value);
  //   result = allData.filter((data) => {
  //     return data.title.search(value) != -1;
  //   });
  //   setFilteredData(result);
  // };

  // useEffect(() => {
  //   axios("https://jsonplaceholder.typicode.com/albums/1/photos")
  //     .then((response) => {
  //       console.log(response.data);
  //       setAllData(response.data);
  //       setFilteredData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("Error getting fake data: " + error);
  //     });
  // }, []);

  return (
    <div className="md:grid grid-cols-2 gap-2">
      {props.filteredData.map((value, index) => {
        return (
          <div key={value.id}>
            <Projectcard
              ID={"Project1"}
              Pname={"Project Name"}
              PSdesc={value.title}
              Bookmarked={false}
              Status={"Ongoing"}
              Open={"Collaborate"}
              Memberlist={"3 members"}
            />
          </div>
        );
      })}
    </div>
  );
}
