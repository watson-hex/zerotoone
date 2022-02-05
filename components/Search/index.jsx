import React, { useState, useEffect } from "react";
import axios from "axios";
import Projectcard from "../Projectcard";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
function Items(props) {
  return (
    <div className="md:grid grid-cols-2 gap-2">
      {props.currentItems &&
        props.currentItems.map((value, index) => {
          return (
            <>
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
            </>
          );
        })}
    </div>
  );
}

export default function Search(props) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + props.itemsPerPage;
    setCurrentItems(props.filteredData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(props.filteredData.length / props.itemsPerPage));
  }, [itemOffset, props.filteredData, props.itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * props.itemsPerPage) % props.filteredData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex justify-center">
        <ReactPaginate
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          previousLinkClassName="flex items-center justify-center w-3 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100"
          nextLabel=">"
          nextLinkClassName="flex items-center justify-center w-3 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100"
          pageClassName=""
          pageLinkClassName="flex items-center justify-center w-3 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100"
          breakClassName="hidden"
          containerClassName=" inline-flex space-x-3  "
          activeClassName="w-4 h-10 text-white transition-colors duration-150 bg-white border border-r-0 border-blue-600 rounded-full focus:shadow-outline"
          renderOnZeroPageCount={null}
        />
      </div>
      <Items currentItems={currentItems} />
    </>
  );
}
