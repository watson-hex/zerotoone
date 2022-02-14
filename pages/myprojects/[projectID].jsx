import React, { useState, useEffect } from "react";
import Mainlayout from "../../common/Mainlayout";
import Pencil from "../../public/assets/svg/pencil.svg";
import PencilBlue from "../../public/assets/svg/pencilBlue.svg";
import Profile from "../../public/assets/svg/profile.svg";
import Calendar from "../../public/assets/svg/calendar.svg";
import MainArrow from "../../public/assets/svg/mainArrow.svg";
import Social from "../../public/assets/svg/social.svg";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import Tag from "../../common/Tag";
import Arrow from "../../public/assets/svg/arrow.svg";
import axios from "../../utilities/axios";
import Image from "next/image";
import Loading from "../../components/Loading";

export default function ProjectPage(props) {
  const [Data, setData] = useState(undefined);
  const [goneThrough, setgoneThrough] = useState(false);

  const [showModal, setShowModal] = React.useState(false);
  const [modalDetail, setmodalDetail] = React.useState("");

  const router = useRouter();
  var projectID = undefined;

  const array = router.asPath.split("/");
  projectID = array[array.length - 1];

  useEffect(() => {
    if (projectID !== undefined && goneThrough !== true) {
      console.log("main call mar raha hu abb");
      axios
        .get("/ecell/all/" + projectID)
        .then((res) => {
          console.group(res.data);
          setData(res.data);
          setgoneThrough(true);
        })
        .catch((err) => {
          console.log("error aaya");
          console.log(err);
        });
    }
  });

  const [Tags, setTags] = useState(["project", "machinelearning"]);
  const [Members, setMembers] = useState([
    { name: "Yashwardhan", link: "atom" },
    { name: "Yashwardhan", link: "atom" },
    { name: "Yashwardhan", link: "atom" },
    { name: "Yashwardhan", link: "atom" },
    { name: "Yashwardhan", link: "atom" },
  ]);

  if (Data !== undefined) {
    var socials = JSON.parse(Data.social_links);
    console.log(socials);

    return (
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-3">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Editing {modalDetail}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => {
                        setShowModal(false);
                      }}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div className="flex items-center border-b border-[#538EE1] py-2">
                      <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="input here"
                        aria-label="Full name"
                      />
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-[#538EE1]/[0.8] text-white active:bg-[#538EE1] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        <div>
          <div
            className="  justify-start mx-10 w-2/3 mt-2"
            onClick={() => Router.back()}
          >
            <Image src={MainArrow} alt="Hello" />
          </div>
          <div className=" md:w-5/6 mx-3 md:mx-auto md:flex md:flex-wrap ">
            <div className="md:w-1/2 md:min-w-1/2 pb-5">
              <div className="drop-shadow-md rounded-xl bg-white bg-[url('/assets/svg/projectprofile.svg')]  h-full">
                <div className="flex container flex-wrap justify-between pl-5 pr-5 bg-[#538EE1]/[0.8]  rounded-t-xl w-full  ">
                  <div className=" my-3 text-white font-semibold text-4xl ">
                    {Data !== undefined ? Data.name : "Project Name"}
                  </div>
                  <div className="my-3">
                    <Image
                      src={Pencil}
                      alt="Hello"
                      onClick={() => {
                        setShowModal(true);
                        setmodalDetail("name");
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:mx-0 md:w-1/2 min-w-1/2 pl-4">
              <div className="flex flex-wrap">
                <div className="  md:mr-0 md:mt-0 md:mb-5 md:mr-0 ">
                  <div className=" drop-shadow-md rounded-xl bg-white p-2">
                    <div className="">
                      <div className="flex container-flex flex-wrap justify-between   rounded-t-xl w-full  ">
                        <div className="my-auto text-[#6A98BF] font-semibold text-2xl pl-2 ">
                          Description
                        </div>
                        <div className="my-1">
                          <Image
                            src={PencilBlue}
                            alt="Hello"
                            onClick={() => {
                              setShowModal(true);
                              setmodalDetail("Description");
                            }}
                          />
                        </div>
                      </div>
                      <p className="text-sm mt-5">
                        {Data
                          ? Data.description
                          : " Guidlines and other Information, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum  has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
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
                        <Image
                          src={PencilBlue}
                          alt="Hello"
                          onClick={() => {
                            setShowModal(true);
                            setmodalDetail("tags");
                          }}
                        />
                      </div>
                    </div>
                    <p className="text-lg flex flex-wrap text-[#6A98BF] container ">
                      {" "}
                      {Data?.tags.split(",").map((user, index) => (
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
                          <Image
                            src={PencilBlue}
                            alt="Hello"
                            onClick={() => {
                              setShowModal(true);
                              setmodalDetail("updates");
                            }}
                          />
                        </div>
                      </div>
                      <p className="text-sm container text-black ">
                        {Data.other ? Data.other : "We'll Let you know soon"}
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
                    <Image
                      src={PencilBlue}
                      alt="Hello"
                      onClick={() => {
                        setShowModal(true);
                        setmodalDetail("TimingsnSocials");
                      }}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-wrap justify-around rounded-t-xl w-full pb-0 pt-6   ">
                    <div className=" flex flex-col text-[#6A98BF] font-semibold ">
                      <span className="my-auto text-lg">Started On:</span>
                      <span className="my-auto  text-lg text-black">
                        {Data.startedOn ? Data.startedOn : "Once"}
                      </span>
                    </div>
                    <div className=" flex flex-col text-[#6A98BF] font-semibold ">
                      <span className="my-auto text-lg">
                        Tentative Completion in:
                      </span>
                      <span className="my-auto  text-lg text-black">
                        {Data.duration ? Data.duration : "Once"}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex mt-12 flex-wrap justify-center rounded-t-xl ">
                    {socials.map((user, index) => (
                      <div key={index} className="flex flex-wrap px-2 ">
                        <Link href={"https://" + user} passHref>
                          <Image src={Social} alt={user} />
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
                      <Image
                        src={PencilBlue}
                        alt="Hello"
                        onClick={() => {
                          setShowModal(true);
                          setmodalDetail("members");
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="m-5 grid grid-cols-3  gap-3">
                  {Data.owner_details.map((user, index) => (
                    <div key={index} className=" justify-between rounded-t-xl ">
                      <div className="flex flex-col justify-center">
                        <span className="my-auto mx-auto">
                          {user.First_Name + " " + user.Last_Name}
                        </span>
                        <div className="flex flex-wrap justify-center">
                          <Link
                            href={
                              "https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=" +
                              user.email
                            }
                            passHref
                          >
                            <a target="_blank">
                              <Image src={Social} alt={user} />
                            </a>
                          </Link>
                        </div>
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
      </>
    );
  } else {
    return <Loading />;
  }
}

ProjectPage.getLayout = function getLayout(page) {
  return <Mainlayout>{page}</Mainlayout>;
};
