import React from "react";
import Image from "next/image";
import Tag from "../../common/Tag";
import Detail from "../../common/Detail";

import Boldbookmark from "../../public/assets/svg/Boldbookmark.svg";
import Bookmark from "../../public/assets/svg/bookmark.svg";

export default function Projectcard(props) {
  return (
    <div id={props.ID} className="drop-shadow-md">
      <div className=" flex rounded-xl bg-white p-2 w-max">
        <div className="flex-initial bg-white rounded-lg w-64 ">
          <div
            className="h-44 m-2 rounded-xl text-white relative "
            style={{ backgroundColor: "#6A98BF" }}
          >
            <div className="text-2xl text-left ml-3 font-semibold  absolute inset-x-0 top-2 ">
              {props.Pname}
            </div>
            <div className="absolute inset-x-0 bottom-0 m-3 ">
              <div className="flex justify-start text-sm font-light">
                {props.PSdesc}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-initial w-32">
          <div className="flex flex-col text-sm " style={{ color: "#6A98BF" }}>
            <div className="grid justify-items-end ">
              <Image
                src={props.Bookmarked ? Boldbookmark : Bookmark}
                alt="Picture of the author"
                width={30}
                height={30}
              />
            </div>
            <span className="w-11/12 pt-3">
              <Tag text={props.Status} />
            </span>
            <span className="w-11/12 pt-1">
              <Tag text={props.Open} />
            </span>
            <span className="w-11/12 pt-3">
              <Detail v="m" text={props.Memberlist} />
            </span>
            <span className="w-11/12 pt-1">
              <Detail v="c" text={"Contact us"} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="flex justify-center items-center h-screen bg-blue-lightest rounded-lg">
//       <div
//         id="card"
//         className=" p-3 bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest rounded-lg"
//       >
//         <Image
//           className="w-1/2 h-full rounded-l-sm rounded-lg"
//           src="https://bit.ly/2EApSiC"
//           alt="Room Image"
//           width="400vw"
//           height="100%"
//         />
//         <div className="w-full flex flex-col">
//           <div className="p-4 pb-0 flex-1">
//             <h3 className="font-light mb-1 text-grey-darkest">Tower Hotel</h3>
//             <div className="text-xs flex items-center mb-4">
//               <i className="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
//               Soho, London
//             </div>
//             <span className="text-5xl text-grey-darkest">
//               £63.00<span className="text-lg">/PPPN</span>
//             </span>
//             <div className="flex items-center mt-4">
//               <div className="pr-2 text-xs">
//                 <i className="fas fa-wifi text-green"></i> Free WiFi
//               </div>
//               <div className="px-2 text-xs">
//                 <i className="text-grey-darker far fa-building"></i> 2mins to
//                 center
//               </div>
//             </div>
//           </div>
//           <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
//             Book Now
//             <i className="fas fa-chevron-right"></i>
//           </div>
//         </div>
//       </div>
//     </div>
