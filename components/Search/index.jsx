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
      <div>
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="z-10 bg-indigo-50 border-blue-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          pageLinkClassName="page-link"
          previousClassName="rounded-full bg-white hover:bg-gray-200 w-max"
          previousLinkClassName="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          nextClassName="rounded-full bg-white hover:bg-gray-200 w-max"
          nextLinkClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          breakLabel="..."
          breakClassName="z-10 bg-indigo-50 border-blue-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          breakLinkClassName="page-link "
          containerClassName="pagination flex flex-nowrap mb-6 "
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
      <Items currentItems={currentItems} />
    </>
  );
}
