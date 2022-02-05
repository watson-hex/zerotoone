import React, { useState, useEffect } from "react";
import Mainlayout from "../../common/Mainlayout";
import Pencil from "../../public/assets/svg/pencil.svg";
import PencilBlue from "../../public/assets/svg/pencilBlue.svg";
import Profile from "../../public/assets/svg/profile.svg";
import Calendar from "../../public/assets/svg/calendar.svg";
import MainArrow from "../../public/assets/svg/mainArrow.svg";
import Social from "../../public/assets/svg/social.svg";
import Link from "next/link";

import Tag from "../../common/Tag";
import Arrow from "../../public/assets/svg/arrow.svg";

import Image from "next/image";

export default function ProjectPage(props) {
  const [Tags, setTags] = useState(["project", "machinelearning"]);
  const [Members, setMembers] = useState([
    { name: "Yashwardhan", link: "atom" },
    { name: "Yashwardhan", link: "atom" },
    { name: "Yashwardhan", link: "atom" },
    { name: "Yashwardhan", link: "atom" },
    { name: "Yashwardhan", link: "atom" },
  ]);

  return (
    <div>
      <div className="  justify-start mx-10 w-2/3 mt-2">
        <Image src={MainArrow} alt="Hello" />
      </div>
      <div className=" md:w-5/6 mx-3 md:mx-auto md:flex md:flex-wrap ">
        <div className="md:w-1/2 md:min-w-1/2 pb-5">
          <div className="drop-shadow-md rounded-xl bg-white bg-[url('/assets/svg/projectprofile.svg')]  h-full">
            <div className="flex container flex-wrap justify-between pl-5 pr-5 bg-[#538EE1]/[0.8]  rounded-t-xl w-full  ">
              <div className=" my-3 text-white font-semibold text-4xl ">
                Project Name
              </div>
              <div className="my-3">
                <Image src={Pencil} alt="Hello" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:mx-0 md:w-1/2 min-w-1/2">
          <div className="flex flex-wrap">
            <div className=" md:ml-5 md:mr-0 md:mt-0 md:mb-7 md:mr-0 ">
              <div className=" drop-shadow-md rounded-xl bg-white p-2">
                <div className="">
                  <div className="flex container-flex flex-wrap justify-between   rounded-t-xl w-full  ">
                    <div className="my-auto text-[#6A98BF] font-semibold text-2xl pl-2 ">
                      Description
                    </div>
                    <div className="my-1">
                      <Image src={PencilBlue} alt="Hello" />
                    </div>
                  </div>
                  <p className="text-sm mt-5">
                    Guidlines and other Information, Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry&apos;s standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.{" "}
                  </p>
                  <div className="flex  flex-wrap justify-around mt-4   rounded-t-xl w-full  ">
                    <div className="my-auto  text-[#6A98BF] font-semibold">
                      <Tag text={"Ongoing"} />
                    </div>
                    <div className="my-auto   text-[#6A98BF] font-semibold">
                      <Tag text={"Collaborating"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 h-max md:px-5 my-2 md:my-0 pt-0">
              <div className=" drop-shadow-md rounded-xl bg-white p-4 ">
                <div className="flex container-flex flex-wrap justify-between rounded-t-xl w-full   ">
                  <div className=" text-[#6A98BF] font-semibold text-2xl ">
                    Tags
                  </div>
                  <div className="my-1">
                    <Image src={PencilBlue} alt="Hello" />
                  </div>
                </div>
                <p className="text-lg flex flex-wrap text-[#6A98BF] container ">
                  {" "}
                  {Tags.map((user, index) => (
                    <span key={index}>#{user}</span>
                  ))}
                </p>
              </div>
            </div>
            <div className="w-full md:w-2/3 p-5 pr-0 pl-0 pt-0">
              <div className=" drop-shadow-md rounded-xl bg-white p-4">
                <div className="">
                  <div className="flex container-flex flex-wrap justify-between rounded-t-xl w-full   ">
                    <div className=" text-[#6A98BF] font-semibold text-2xl ">
                      Updates
                    </div>
                    <div className="my-1">
                      <Image src={PencilBlue} alt="Hello" />
                    </div>
                  </div>
                  <p className="text-sm container text-black ">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    Lorem Ipsum is simply dummy text of the printing and
                  </p>
                  {/* <div className="flex  flex-wrap justify-between mt-4  rounded-t-xl w-full  ">
                    <div className="my-auto  text-[#6A98BF] font-semibold"></div>
                    <div className="my-1">
                      <Image src={Arrow} alt="Hello" />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 min-w-1/2">
          {" "}
          <div className=" drop-shadow-md rounded-xl bg-white p-4">
            <div className="flex container-flex flex-wrap justify-between rounded-t-xl w-full   ">
              <div className=" text-[#6A98BF] font-semibold text-2xl ">
                Timings and Socials
              </div>
              <div className="my-1">
                <Image src={PencilBlue} alt="Hello" />
              </div>
            </div>
            <div className="">
              <div className="flex flex-wrap justify-around rounded-t-xl w-full pb-0 pt-6   ">
                <div className=" flex flex-col text-[#6A98BF] font-semibold   ">
                  <div className="">
                    <Image src={Calendar} alt="Hello" />
                    <span className="text-lg">Started On:</span>
                    <span className="my-auto text-lg text-black">
                      {/* {props.data} */}
                      11-11-22
                    </span>
                  </div>
                </div>
                <div className=" flex flex-col text-[#6A98BF] font-semibold ">
                  <span className="my-auto text-lg">
                    Tentative Completion in:
                  </span>
                  <span className="my-auto  text-lg text-black">
                    {/* {props.data} */}3 months
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex mt-12 flex-wrap justify-center rounded-t-xl ">
                {Members.map((user, index) => (
                  <div key={index} className="flex flex-wrap px-2 ">
                    <Link href={user.link} passHref>
                      <Image src={Social} alt="Hello" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 min-w-1/2 my-2 md:my-0 md:pl-4 pt-0">
          {" "}
          <div className=" drop-shadow-md rounded-xl bg-white p-4 ">
            <div className="">
              <div className="flex container-flex flex-wrap justify-between rounded-t-xl w-full   ">
                <div className=" text-[#6A98BF] font-semibold text-2xl ">
                  Members
                </div>
                <div className="my-1">
                  <Image src={PencilBlue} alt="Hello" />
                </div>
              </div>
            </div>
            <div className="mt-5">
              {Members.map((user, index) => (
                <div
                  key={index}
                  className="flex container-flex flex-wrap justify-between rounded-t-xl w-full   "
                >
                  <div className=" text-[#6A98BF] font-semibold text-2xl ">
                    <Image src={Profile} alt="Hello" />
                    <span className="my-auto">{user.name}</span>
                  </div>
                  <div className="my-1">
                    <span className="my-auto">{user.link}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="flex  flex-wrap justify-between mt-0 rounded-t-xl w-full  ">
              <div className="my-auto  text-[#6A98BF] font-semibold"></div>
              <div className="my-1">
                <Image src={Arrow} alt="Hello" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectPage.getLayout = function getLayout(page) {
  return <Mainlayout>{page}</Mainlayout>;
};
