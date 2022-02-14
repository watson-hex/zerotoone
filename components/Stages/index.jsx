/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Stage1Pic from "../../public/assets/svg/stage1.svg";
import Stage2Pic from "../../public/assets/svg/stage2.svg";
import Stage3Pic from "../../public/assets/svg/stage3.svg";
import Stage4Pic from "../../public/assets/svg/stage4.svg";
import calendar2 from "../../public/assets/svg/calendar2.svg";
import Link from "next/link";
import Email from "../../public/assets/svg/email.svg";

import On1 from "../../public/assets/svg/on1.svg";
import On2 from "../../public/assets/svg/on2.svg";
import On3 from "../../public/assets/svg/on3.svg";
// import partitionApplyAtRules from "tailwindcss/lib/lib/partitionApplyAtRules";

function Stage1(props) {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:

  return (
    <div className="md:flex ">
      <div className="w-full md:w-2/3 ">
        <div className=" drop-shadow-md rounded-xl bg-white h-full m-2 md:m-4 pb-5 d:pb-0  ">
          <div>
            <div className="justify-center flex pt-5 mx-4">
              <Image src={On1} alt="Hello" />{" "}
            </div>
          </div>
          <div className="rounded-xl mx-2 md:w-4/5  md:mx-auto h-3/4  bg-[#DAE8FC] mt-6 ">
            <div className="pt-5 pb-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  props.projectSubmission();
                  // call next stage after submission
                }}
              >
                <div className=" md:ml-14 md:flex md:flex-wrap overflow-hidden mx-5 md:mx-0 ">
                  <div className="flex flex-col w-full md:w-1/2 mb-4">
                    <label className=" mb-2 text-xl  ">Project Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={props.projectDetails.name}
                      onChange={(e) => {
                        props.updateProjectHandler(
                          [e.target.name],
                          e.target.value
                        );
                      }}
                      placeholder="Mysterious Savanah "
                      className="text-lg indent-4 rounded-xl shadow-inner outline-2 outline-slate-50  w-4/5"
                    />
                  </div>

                  <div className="flex flex-col w-full md:w-1/2 mb-4 ">
                    <label className=" mb-2 text-xl ">Project Stage</label>
                    <select
                      className="text-lg indent-4 rounded-xl shadow-inner outline-2 outline-slate-50 w-4/5"
                      name="stage"
                      onChange={(e) => {
                        props.updateProjectHandler(
                          [e.target.name],
                          e.target.value
                        );
                      }}
                      required
                      value={props.projectDetails.stage}
                    >
                      <option defaultChecked>Ideation</option>
                      <option>Prototyping</option>
                      <option>MVP (Minimum Viable Product)</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-full md:w-1/2 mb-4">
                    <label className=" mb-2 text-xl ">
                      Project Description
                    </label>
                    <textarea
                      type="text"
                      name="description"
                      required
                      value={props.projectDetails.description}
                      onChange={(e) => {
                        props.updateProjectHandler(
                          [e.target.name],
                          e.target.value
                        );
                      }}
                      rows="4"
                      placeholder="Mysterious Savanah "
                      className="text-lg indent-4 rounded-xl shadow-inner outline-2 outline-slate-50 w-4/5"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2 mb-4">
                    <div>
                      <div className="mb-8">
                        <label className=" mb-2 text-xl ">Started On ?</label>
                        <input
                          type="text"
                          name="startedOn"
                          required
                          value={props.projectDetails.startedOn}
                          onChange={(e) => {
                            props.updateProjectHandler(
                              [e.target.name],
                              e.target.value
                            );
                          }}
                          placeholder="DD/MM/YYYY"
                          className="text-lg indent-4 rounded-xl shadow-inner outline-2 outline-slate-50  w-4/5"
                        />
                      </div>
                      <div>
                        <label className=" mb-2 text-xl ">
                          Approximate Duration ?
                        </label>
                        <input
                          type="text"
                          name="duration"
                          required
                          value={props.projectDetails.duration}
                          onChange={(e) => {
                            props.updateProjectHandler(
                              [e.target.name],
                              e.target.value
                            );
                          }}
                          placeholder={"3 months"}
                          className="text-lg indent-4 rounded-xl shadow-inner outline-2 outline-slate-50  w-4/5"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full md:w-1/2 mb-4">
                    <label className=" mb-2 text-xl ">
                      Associated Tags
                      <span className="text-sm"> &nbsp; (optional)</span>
                    </label>
                    <input
                      type="text"
                      name="tags"
                      value={props.projectDetails.tags}
                      onChange={(e) => {
                        props.updateProjectHandler(
                          [e.target.name],
                          e.target.value
                        );
                      }}
                      placeholder="Innovation, heroku, tech  "
                      className="text-lg indent-4 rounded-xl shadow-inner outline-2 outline-slate-50 w-4/5"
                    />
                  </div>

                  {/* <div className="flex flex-col relative w-1/2 mt-4 mb-4">
                    <label
                      htmlFor="toggleB"
                      className="flex bottom-0 absolute items-center cursor-pointer"
                    >
                      <div className="relative">
                        <input
                          type="checkBox"
                          id="toggleB"
                          className="sr-only"
                          name="visibility"
                          onClick={(e) => {
                            props.updateProjectHandler(
                              [e.target.name],
                              e.target.checked
                            );
                          }}
                        />
                        <div className="block bg-gray-100 w-12 h-6 rounded-full"></div>
                        <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition drop-shadow-lg"></div>
                      </div>
                      <div className=" text-gray-700 font-medium text-xl">
                        Keep Hidden ?
                      </div>
                    </label>
                  </div> */}
                  <div className="flex flex-col relative md:w-1/2 mt-6 mb-4 pb-2 ">
                    <label className="flex absolute items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkBox"
                          id="toggleB"
                          className="sr-only"
                          name="hidden"
                          value={props.projectDetails.hidden}
                          onClick={(e) => {
                            props.updateProjectHandler(
                              [e.target.name],
                              e.target.checked
                            );
                          }}
                        />
                        <div className="block bg-gray-100 w-12 h-6 rounded-full"></div>
                        <div className="dot absolute drop-shadow-lg left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                      </div>
                      <div className="whitespace-normal text-gray-700 font-small w-max">
                        {props.projectDetails.hidden
                          ? " Visible to all "
                          : "Hidden from community "}
                        <span className="text-sm"> &nbsp; (optional)</span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="justify-center flex pt-5">
                  <button
                    className="bg-sky-400 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-8 rounded w-max"
                    type="submit"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <div className=" drop-shadow-md rounded-xl bg-white h-full md:m-4 md:p-8 m-2 p-3 ">
          <div className="flex justify-center mb-4 ">
            <span className="text-4xl">Project Information</span>
          </div>
          <div className=" mb-4">
            <Image src={Stage1Pic} alt="Hello" />
          </div>
          <div>
            <span>
              Guidlines and other Information, Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen bookok a galley of type and scrambled it to make a
              type specimen book
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stage2(props) {
  function addMember() {
    // update memberlist with new member
    if (props.membersDetails.length < 5) {
      props.setmembersDetails([
        ...props.membersDetails,
        {
          fullName: "",
          emailID: "",
          socialink: "",
        },
      ]);
    }
  }

  function removeMember() {
    console.log();

    // remove last member from list
    if (props.membersDetails.length > 1) {
      props.setmembersDetails(props.membersDetails.slice(0, -1));
    }
  }

  // props.setmembersDetails(
  //   props.membersDetails.filter(function (person) {
  //     return person !== index;
  //   })
  // );

  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return (
    <div className="md:flex">
      <div className="w-full md:w-2/3 ">
        <div className=" drop-shadow-md rounded-xl bg-white h-full  m-2 md:m-4 p-3 ">
          <div>
            <div className="justify-center flex pt-5">
              <Image src={On2} alt="Hello" />{" "}
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.memberSubmission();
              // call next stage after submission
            }}
          >
            <div className="rounded-xl md:w-5/6 mx-auto bg-[#DAE8FC] mt-6 p-2 md:p-1  ">
              <div className="md:flex md:flex-col md:justify-center w-full md:w-2/3 mx-auto justify-center">
                {props.membersDetails.map((member, index) => {
                  console.log(member);
                  return (
                    <div key={index} className="mt-2 mb-2">
                      <div className="text-xl pb-1">
                        Member {index + 1} details
                      </div>
                      <div className="md:flex md:flex-wrap md:justify-between w-full">
                        {/* <div className="md:w-1/3 md:min-w-1/3 mb-1">
                          <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name "
                            onChange={(e) => {
                              e.preventDefault();

                              props.updateMemberHandler(
                                index,
                                e.target.name,
                                e.target.value
                              );
                              // call next stage after submission
                            }}
                            className="text-lg indent-2 rounded-xl shadow-inner outline-2 outline-slate-50"
                          />
                        </div> */}
                        <div className=" mb-1 w-full">
                          <input
                            type="email"
                            name="emailID"
                            placeholder="Email"
                            required
                            value={member.emailID}
                            onChange={(e) => {
                              e.preventDefault();

                              props.updateMemberHandler(
                                index,
                                e.target.name,
                                e.target.value
                              );
                              // call next stage after submission
                            }}
                            className="w-full text-lg indent-2 rounded-xl shadow-inner outline-2 outline-slate-50   "
                          />
                        </div>
                        {/* <div className="md:w-1/3 mb-1">
                          <input
                            type="text"
                            name="socialink"
                            placeholder="Social Link "
                            onChange={(e) => {
                              e.preventDefault();

                              props.updateMemberHandler(
                                index,
                                e.target.name,
                                e.target.value
                              );
                              // call next stage after submission
                            }}
                            className="text-lg indent-2 rounded-xl shadow-inner outline-2 outline-slate-50 "
                          />
                        </div> */}
                      </div>
                    </div>
                  );
                })}

                <div className="flex justify-end mr-2">
                  {props.membersDetails.length < 5 ? (
                    <div onClick={addMember}>
                      <svg
                        width="23"
                        height="48"
                        viewBox="0 0 46 55"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.389 0C27.0856 0 27.6214 0.5775 27.6214 1.265V10.12C27.6214 15.1525 31.6669 19.2775 36.5696 19.305C38.6057 19.305 40.2132 19.3325 41.4455 19.3325C42.2761 19.3325 43.6424 19.305 44.7944 19.305C45.4642 19.305 46 19.855 46 20.5425V42.6525C46 49.4725 40.615 55 33.9441 55H12.6453C5.67967 55 0 49.1975 0 42.0475V12.4025C0 5.5825 5.41176 0 12.0827 0H26.389ZM22.5044 21.3675C21.4059 21.3675 20.495 22.275 20.495 23.4025V28.16H15.887C14.7886 28.16 13.8777 29.0675 13.8777 30.2225C13.8777 31.35 14.7886 32.2575 15.887 32.2575H20.495V37.015C20.495 38.1425 21.4059 39.05 22.5044 39.05C23.6028 39.05 24.4869 38.1425 24.4869 37.015V32.2575H29.1217C30.2201 32.2575 31.131 31.35 31.131 30.2225C31.131 29.0675 30.2201 28.16 29.1217 28.16H24.4869V23.4025C24.4869 22.275 23.6028 21.3675 22.5044 21.3675ZM31.5225 2.49205C31.5225 1.3068 32.9236 0.7183 33.7247 1.57355C36.6208 4.66455 41.6816 10.0683 44.5107 13.0878C45.293 13.9211 44.7197 15.3043 43.5918 15.307C41.3896 15.3153 38.7935 15.307 36.9262 15.2878C33.9631 15.2878 31.5225 12.7825 31.5225 9.74105V2.49205Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {props.membersDetails.length > 1 ? (
                    <div
                      type="submit"
                      className="text-gray-700 text-sm font-bold py-2 rounded mr-2 ml-2"
                      onClick={(e) => {
                        removeMember();
                      }}
                    >
                      <svg
                        width="25"
                        height="31"
                        viewBox="0 0 37 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32.3096 14.362C32.7084 14.362 33.0702 14.536 33.3561 14.83C33.6226 15.144 33.7568 15.534 33.7179 15.946C33.7179 16.082 32.652 29.5619 32.0432 35.2358C31.6619 38.7178 29.4173 40.8318 26.0503 40.8898C23.4614 40.9478 20.9308 40.9678 18.4391 40.9678C15.7938 40.9678 13.2068 40.9478 10.6956 40.8898C7.44148 40.8118 5.19489 38.6598 4.8331 35.2358C4.20677 29.5419 3.16031 16.082 3.14086 15.946C3.1214 15.534 3.25367 15.144 3.5221 14.83C3.78663 14.536 4.16787 14.362 4.56856 14.362H32.3096ZM22.561 0.967773C24.3291 0.967773 25.9085 2.20176 26.3656 3.96174L26.6924 5.42173C26.9569 6.61172 27.9878 7.45371 29.1743 7.45371H35.0058C35.7838 7.45371 36.4315 8.0997 36.4315 8.92169V9.68169C36.4315 10.4837 35.7838 11.1497 35.0058 11.1497H1.85923C1.07924 11.1497 0.431519 10.4837 0.431519 9.68169V8.92169C0.431519 8.0997 1.07924 7.45371 1.85923 7.45371H7.69065C8.87522 7.45371 9.90612 6.61172 10.1726 5.42373L10.478 4.05974C10.9526 2.20176 12.5145 0.967773 14.3021 0.967773H22.561Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
              <div className="flex flex-col relative w-1/2 mt-6 mb-2 p-2 md:w-2/3 md:mx-auto ">
                <label className="flex absolute items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkBox"
                      id="toggleB"
                      className="sr-only"
                      name="onboarding"
                      value={props.onBoardingDetail}
                      onClick={(e) => {
                        props.setonboardingDetail(e.target.checked);
                      }}
                    />
                    <div className="block bg-gray-100 w-12 h-6 rounded-full"></div>
                    <div className="dot absolute drop-shadow-lg left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                  </div>
                  <div className="whitespace-normal text-gray-700 font-small w-max">
                    {props.onBoardingDetail ? "Onboarding" : "Not Onboarding"}
                  </div>
                </label>
              </div>
              <div className="justify-center flex pt-9 pb-2 md:pb-4">
                <button
                  type="button"
                  onClick={props.prevStage}
                  className="bg-blue-500 hover:bg-blue-700 text-white  md:text-2xl font-bold py-2 px-6 md:py-2 md:px-8  mr-1 rounded w-max"
                >
                  Previous
                </button>

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white md:text-2xl font-bold py-2 px-6 md:py-2 md:px-8 ml-1  rounded w-max"
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <div className=" drop-shadow-md rounded-xl bg-white h-full md:m-4 m-2 p-4   ">
          <div className="flex justify-center mb-4 ">
            <span className="text-4xl">Team Information</span>
          </div>
          <div className=" mb-4">
            <Image src={Stage1Pic} alt="Hello" />
          </div>
          <div>
            <span>
              Guidlines and other Information, Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen bookok a galley of type and scrambled it to make a
              type specimen book
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stage3(props) {
  //Making a social Links array using usestate

  // function addSocial() {
  //   // update Social Links with new member
  //   if (SocialLinks.length < 5) {
  //     setSocialLinks([...SocialLinks, ""]);
  //   }
  // }
  const [showModal, setShowModal] = React.useState(false);

  function addSocial() {
    // update memberlist with new member
    if (props.socialDetails.length < 5) {
      props.setsocialDetails([...props.socialDetails, ""]);
    }
  }

  function removeSocial() {
    console.log();

    // remove last member from list
    if (props.socialDetails.length > 1) {
      props.setsocialDetails(props.socialDetails.slice(0, -1));
    }
  }

  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
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
                  <h3 className="text-2xl font-semibold">
                    Our Legal Agreement
                  </h3>
                </div>
                {/*body*/}
                <div className="md:flex md:flex-col  mb-4 ">
                  <div className="  p-4 h-96 overflow-y-scroll">
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s,when an unknown printer took a
                    galley of type Read more ... Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,when
                    an unknown printer took a galley of type Read more ... Ipsum
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s,when an unknown printer took a
                    galley of type Read more ... Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,when
                    an unknown printer took a galley of type Read more ... Ipsum
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s,when an unknown printer took a
                    galley of type Read more ... Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,when
                    an unknown printer took a galley of type Read more ...
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    I'd rather Not
                  </button>
                  <button
                    className="bg-[#538EE1]/[0.8] text-white active:bg-[#538EE1] font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      props.otherSubmission();
                    }}
                  >
                    Accept and Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="md:flex">
        <div className="w-full md:w-2/3 ">
          <div className=" drop-shadow-md rounded-xl bg-white h-full m-2 md:m-4 p-2 ">
            <div className="justify-center flex pt-3">
              <Image src={On3} alt="Hello" />{" "}
            </div>
            <div className="rounded-xl md:w-5/6 mx-auto bg-[#DAE8FC] mt-3 p-1 md:p-4 ">
              <div className="pt-3 pb-3 px-2">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setShowModal(true);
                  }}
                >
                  <div className=" md:flex md:flex-wrap overflow-hidden">
                    <div className="md:flex md:flex-col md:w-1/2 ">
                      <label className=" mb-2 text-lg  ">
                        Social Links of Project (if Any){" "}
                      </label>
                      {props.socialDetails.map((social, index) => {
                        return (
                          <div key={index}>
                            <input
                              type="text"
                              name="Project Name"
                              value={social}
                              onChange={(e) => {
                                e.preventDefault();
                                props.updateSocialHandler(
                                  index,
                                  e.target.value
                                );
                                // call next stage after submission
                              }}
                              placeholder="Contact Info"
                              className="text-lg indent-2 rounded-xl shadow-inner outline-2 outline-slate-50 w-full md:w-4/5 mb-2"
                            />
                          </div>
                        );
                      })}

                      <div className="flex flex-wrap my-2 justify-end md:mr-5 mr-2  ">
                        {props.socialDetails.length < 5 ? (
                          <div className="flex justify-end mx-2 mr-2">
                            <div onClick={addSocial}>
                              <svg
                                width="25"
                                height="31"
                                viewBox="0 0 46 55"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M26.389 0C27.0856 0 27.6214 0.5775 27.6214 1.265V10.12C27.6214 15.1525 31.6669 19.2775 36.5696 19.305C38.6057 19.305 40.2132 19.3325 41.4455 19.3325C42.2761 19.3325 43.6424 19.305 44.7944 19.305C45.4642 19.305 46 19.855 46 20.5425V42.6525C46 49.4725 40.615 55 33.9441 55H12.6453C5.67967 55 0 49.1975 0 42.0475V12.4025C0 5.5825 5.41176 0 12.0827 0H26.389ZM22.5044 21.3675C21.4059 21.3675 20.495 22.275 20.495 23.4025V28.16H15.887C14.7886 28.16 13.8777 29.0675 13.8777 30.2225C13.8777 31.35 14.7886 32.2575 15.887 32.2575H20.495V37.015C20.495 38.1425 21.4059 39.05 22.5044 39.05C23.6028 39.05 24.4869 38.1425 24.4869 37.015V32.2575H29.1217C30.2201 32.2575 31.131 31.35 31.131 30.2225C31.131 29.0675 30.2201 28.16 29.1217 28.16H24.4869V23.4025C24.4869 22.275 23.6028 21.3675 22.5044 21.3675ZM31.5225 2.49205C31.5225 1.3068 32.9236 0.7183 33.7247 1.57355C36.6208 4.66455 41.6816 10.0683 44.5107 13.0878C45.293 13.9211 44.7197 15.3043 43.5918 15.307C41.3896 15.3153 38.7935 15.307 36.9262 15.2878C33.9631 15.2878 31.5225 12.7825 31.5225 9.74105V2.49205Z"
                                  fill="black"
                                />
                              </svg>
                            </div>
                          </div>
                        ) : (
                          <div></div>
                        )}

                        {props.socialDetails.length > 1 ? (
                          <div className="flex justify-end">
                            <div onClick={removeSocial}>
                              <svg
                                width="25"
                                height="31"
                                viewBox="0 0 37 41"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M32.3096 14.362C32.7084 14.362 33.0702 14.536 33.3561 14.83C33.6226 15.144 33.7568 15.534 33.7179 15.946C33.7179 16.082 32.652 29.5619 32.0432 35.2358C31.6619 38.7178 29.4173 40.8318 26.0503 40.8898C23.4614 40.9478 20.9308 40.9678 18.4391 40.9678C15.7938 40.9678 13.2068 40.9478 10.6956 40.8898C7.44148 40.8118 5.19489 38.6598 4.8331 35.2358C4.20677 29.5419 3.16031 16.082 3.14086 15.946C3.1214 15.534 3.25367 15.144 3.5221 14.83C3.78663 14.536 4.16787 14.362 4.56856 14.362H32.3096ZM22.561 0.967773C24.3291 0.967773 25.9085 2.20176 26.3656 3.96174L26.6924 5.42173C26.9569 6.61172 27.9878 7.45371 29.1743 7.45371H35.0058C35.7838 7.45371 36.4315 8.0997 36.4315 8.92169V9.68169C36.4315 10.4837 35.7838 11.1497 35.0058 11.1497H1.85923C1.07924 11.1497 0.431519 10.4837 0.431519 9.68169V8.92169C0.431519 8.0997 1.07924 7.45371 1.85923 7.45371H7.69065C8.87522 7.45371 9.90612 6.61172 10.1726 5.42373L10.478 4.05974C10.9526 2.20176 12.5145 0.967773 14.3021 0.967773H22.561Z"
                                  fill="black"
                                />
                              </svg>
                            </div>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>

                    <div className="md:flex md:flex-col md:w-1/2 mt-4 mb-4">
                      <label className=" mb-2 text-xl ">
                        Other Information ?
                      </label>
                      <textarea
                        type="text"
                        name="Project Name"
                        onChange={(e) => {
                          e.preventDefault();
                          props.setotherDetails(e.target.value);
                          // call next stage after submission
                        }}
                        rows="4"
                        placeholder="Anything we left to ask and you would like it
                      to be included "
                        className="text-lg pl-3 rounded-xl shadow-inner outline-2 outline-slate-50 w-full"
                      />
                    </div>
                  </div>
                  <div className="justify-center flex pt-9 pb-2 md:pb-4">
                    <button
                      type="button"
                      onClick={props.prevStage}
                      className="bg-blue-500 hover:bg-blue-700 text-white  md:text-2xl font-bold py-2 px-6 md:py-2 md:px-8  mr-1 rounded w-max"
                    >
                      Previous
                    </button>

                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white md:text-2xl font-bold py-2 px-6 md:py-2 md:px-8 ml-1  rounded w-max"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className=" drop-shadow-md rounded-xl bg-white h-full  m-2 md:m-4 p-4 md:p-8">
            <div className="flex justify-center mb-4 ">
              <span className="text-4xl">Our Assurance</span>
            </div>
            <div className=" mb-4">
              <Image src={Stage1Pic} alt="Hello" />
            </div>
            <div>
              <span>
                Guidlines and other Information, Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen bookok a galley of type and scrambled it
                to make a type specimen book
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Stage4(props) {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return (
    <div className="m-3">
      <div className="mx-auto drop-shadow-md rounded-xl bg-white md:w-3/5 m-10 p-2 pb-0 h-full">
        <div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-center text-3xl m-5 mt-0 ">
              Submitted Succesfully
            </div>
            <div className="flex justify-center m-5">
              <Image src={Stage4Pic} alt="Hello" />
            </div>
            <div className="flex justify-center text-xl m-5 mb-1">
              Your Project details are safe with us
            </div>
            <div className="flex justify-center text-xl mb-6 m-5 mt-1">
              You’ll soon be notified over email for further details
            </div>
            <div className="flex justify-center text-xl mb-6 m-5 mt-1">
              Return to&nbsp;
              <div className=" underline ">
                <Link href="/ " passHref>
                  Home
                </Link>
              </div>
            </div>
            <div className="flex justify-end text-xl mt-6 mb-3">
              <Image src={Email} alt="Hello" />
              ecell@iiitd.ac.in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Error(props) {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return (
    <div>
      <div className="mx-auto drop-shadow-md rounded-xl bg-white h-full w-3/5 m-10 p-10  pb-0 h-full">
        <div>
          <div className="flex flex-col justify-items-center">
            <div className="flex justify-center text-5xl m-5 mt-0 ">
              Submission Unsuccesful
            </div>

            <div className="flex justify-center text-xl mb-6 m-5 mt-1">
              Your Project Details were not submitted.
            </div>
            <div className="flex justify-end text-xl mt-6 mb-10">
              <Image src={Email} alt="Hello" />
              ecell@iiitd.ac.in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Stage1, Stage2, Stage3, Stage4, Error };
