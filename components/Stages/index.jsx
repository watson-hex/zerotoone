/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Image from "next/image";

import Stage1Pic from "../../public/assets/svg/stage1.svg";
import Stage2Pic from "../../public/assets/svg/stage2.svg";
import Stage3Pic from "../../public/assets/svg/stage3.svg";
import Stage4Pic from "../../public/assets/svg/stage4.svg";
import calendar2 from "../../public/assets/svg/calendar2.svg";

import Email from "../../public/assets/svg/email.svg";

import On1 from "../../public/assets/svg/on1.svg";
import On2 from "../../public/assets/svg/on2.svg";
import On3 from "../../public/assets/svg/on3.svg";
// import partitionApplyAtRules from "tailwindcss/lib/lib/partitionApplyAtRules";

function Stage1(props) {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return (
    <div className="flex flex-wrap">
      <div className="w-2/3 ">
        <div className=" drop-shadow-md rounded-xl bg-white h-full m-4 p-8 ">
          <div>
            <div className="justify-center flex pt-5">
              <Image src={On1} alt="Hello" />{" "}
            </div>
          </div>
          <div className="rounded-xl w-4/5 mx-auto bg-[#DAE8FC] mt-6 ">
            <div className="pt-3 pb-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  props.nextStage();
                }}
              >
                <div className=" ml-14  flex flex-wrap overflow-hidden">
                  <div className="flex flex-col  w-1/2">
                    <label className=" mb-2 text-xl  ">Project Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => {
                        props.updateProjectHandler(
                          [e.target.name],
                          e.target.value
                        );
                      }}
                      placeholder="Mysterious Savanah "
                      className="text-xl indent-4 rounded-xl shadow-inner outline-2 outline-slate-50  w-4/5"
                    />
                  </div>

                  <div className="flex flex-col w-1/2 mb-4 ">
                    <label className=" mb-2 text-xl ">Project Stage</label>
                    <select
                      className="text-xl indent-4 rounded-xl shadow-inner outline-2 outline-slate-50 w-4/5"
                      name="stage"
                      onChange={(e) => {
                        props.updateProjectHandler(
                          [e.target.name],
                          e.target.value
                        );
                      }}
                    >
                      <option>Yes</option>
                      <option>No</option>
                      <option>Maybe</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-1/2 mt-4 mb-4">
                    <label className=" mb-2 text-xl ">
                      Project Description
                    </label>
                    <textarea
                      type="text"
                      name="desription"
                      onChange={(e) => {
                        props.updateProjectHandler(
                          [e.target.name],
                          e.target.value
                        );
                      }}
                      rows="4"
                      placeholder="Mysterious Savanah "
                      className="text-xl indent-4 rounded-xl shadow-inner outline-2 outline-slate-50 w-4/5"
                    />
                  </div>
                  <div className="flex flex-col w-1/2 mt-4 mb-4">
                    <div>
                      <div className="mb-6">
                        <label className=" mb-2 text-xl ">Started On ?</label>
                        <input
                          type="text"
                          name="startedOn"
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
                  <div className="flex flex-col w-1/2 mt-4 mb-4">
                    <label className=" mb-2 text-xl ">Associated Tags</label>
                    <input
                      type="text"
                      name="duration"
                      onChange={(e) => {
                        props.updateProjectHandler(
                          [e.target.name],
                          e.target.value
                        );
                      }}
                      placeholder="Mysterious Savanah "
                      className="text-xl indent-4 rounded-xl shadow-inner outline-2 outline-slate-50 w-4/5"
                    />
                  </div>

                  <div className="flex flex-col relative w-1/2 mt-4 mb-4">
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
                      <div className="ml-3 text-gray-700 font-medium text-xl">
                        Keep Hidden ?
                      </div>
                    </label>
                  </div>
                </div>
                <div className="justify-center flex pt-5">
                  <button
                    className="bg-sky-400 hover:bg-blue-700 text-white text-2xl font-bold py-2  rounded w-1/4"
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
      <div className="w-1/3">
        <div className=" drop-shadow-md rounded-xl bg-white h-full m-4 p-8  ">
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
          fullName: "Full Name",
          emailID: "IIITD Email",
          socialink: "Social link",
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
    <div className="flex flex-wrap">
      <div className="w-2/3 ">
        <div className=" drop-shadow-md rounded-xl bg-white h-full m-4 p-8 ">
          <div>
            <div className="justify-center flex pt-5">
              <Image src={On2} alt="Hello" />{" "}
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.nextStage();
            }}
          >
            <div className="rounded-xl w-4/5 mx-auto bg-[#DAE8FC] mt-6 ">
              <div className="flex flex-col p-8 pb-4 h-96">
                {props.membersDetails.map((member, index) => {
                  return (
                    <div key={index}>
                      <div className="flex flex-wrap justify-between">
                        <div className="text-2xl">Member {index} details</div>
                      </div>
                      <div className="flex flex-wrap justify-between w-full">
                        <div className="w-1/3 min-w-1/3">
                          <input
                            type="text"
                            name="Project Name"
                            placeholder="Full Name "
                            className="text-lg indent-2 rounded-xl shadow-inner outline-2 outline-slate-50"
                          />
                        </div>
                        <div className="w-1/3">
                          <input
                            type="text"
                            name="Project Name"
                            placeholder="Email"
                            className="text-lg indent-2 rounded-xl shadow-inner outline-2 outline-slate-50   "
                          />
                        </div>
                        <div className="w-1/3">
                          <input
                            type="text"
                            name="Project Name"
                            placeholder="Social Link "
                            className="text-lg indent-2 rounded-xl shadow-inner outline-2 outline-slate-50 "
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="flex justify-end">
                  {props.membersDetails.length < 5 ? (
                    <div onClick={addMember}>
                      <svg
                        width="26"
                        height="55"
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
                    <div>
                      Cannot Add More than {props.membersDetails.length} Members
                    </div>
                  )}

                  <div
                    type="submit"
                    className="text-gray-700 text-sm font-bold py-2 rounded"
                    onClick={(e) => {
                      removeMember();
                    }}
                  >
                    delete
                  </div>
                </div>
              </div>
              <div className="flex flex-col relative w-1/2 mt-4 mb-4">
                <label className="flex absolute items-center cursor-pointer">
                  <div className="relative">
                    <input type="checkbox" id="toggleB" className="sr-only" />
                    <div className="block bg-gray-100 w-12 h-6 rounded-full"></div>
                    <div className="dot absolute drop-shadow-lg left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                  </div>
                  <div className="text-gray-700 font-medium  w-max">
                    Want our help in onboarding new members?
                  </div>
                </label>
              </div>
              <div className="justify-center flex pt-9">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 rounded w-1/4"
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/3">
        <div className=" drop-shadow-md rounded-xl bg-white h-full m-4 p-8   ">
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
  const [SocialLinks, setSocialLinks] = useState([]);

  function addSocial() {
    // update Social Links with new member
    if (SocialLinks.length < 5) {
      setSocialLinks([...SocialLinks, ""]);
    }
  }

  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return (
    <div className="flex flex-wrap">
      <div className="w-2/3 ">
        <div className=" drop-shadow-md rounded-xl bg-white h-full m-4 p-8 ">
          <div>
            <div className="justify-center flex pt-5">
              <Image src={On3} alt="Hello" />{" "}
            </div>
          </div>
          <div className="rounded-xl w-4/5 mx-auto bg-[#DAE8FC] mt-6 ">
            <div className="pt-3 pb-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  props.nextStage();
                }}
              >
                <div className=" ml-14 flex flex-wrap overflow-hidden">
                  <div className="flex flex-col  w-1/2">
                    <label className=" mb-2 text-xl  ">
                      Social Links of Project (if Any){" "}
                    </label>
                    {SocialLinks.map((member, index) => {
                      return (
                        <div key={index}>
                          <input
                            type="text"
                            name="Project Name"
                            placeholder="Mysterious Savanah "
                            className="text-xl indent-4 rounded-xl shadow-inner outline-2 outline-slate-50  w-4/5"
                          />
                        </div>
                      );
                    })}

                    {SocialLinks.length < 5 ? (
                      <div className="flex justify-end">
                        <div onClick={addSocial}>
                          <svg
                            width="26"
                            height="55"
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
                      <div>
                        Cannot Add More than {SocialLinks.length} Members
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col w-1/2 mb-4 ">
                    <label className=" mb-2 text-xl ">
                      Our Legal Agreement
                    </label>
                    <div className=" drop-shadow-md rounded-xl bg-white p-4">
                      Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s,when an unknown printer
                      took a galley of type Read more ... Ipsum is simply dummy
                      text of the printing and typesetting industry. Lorem Ipsum
                      has been the industry's standard dummy text ever since the
                      1500s,when an unknown printer took a galley of type Read
                      more ...
                    </div>
                  </div>

                  <div className="flex flex-col w-1/2 mt-4 mb-4">
                    <label className=" mb-2 text-xl ">
                      Other Information ?
                    </label>
                    <textarea
                      type="text"
                      name="Project Name"
                      rows="4"
                      placeholder="Mysterious Savanah "
                      className="text-xl indent-4 rounded-xl shadow-inner outline-2 outline-slate-50 w-4/5"
                    />
                  </div>
                </div>
                <div className="justify-center flex pt-5">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 rounded w-1/4">
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <div className=" drop-shadow-md rounded-xl bg-white h-full m-4 p-8  ">
          <div className="flex justify-center mb-4 ">
            <span className="text-4xl">Our Assurance</span>
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

function Stage4(props) {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return (
    <div>
      <div className="mx-auto drop-shadow-md rounded-xl bg-white h-full w-3/5 m-10 p-10  pb-0 h-full">
        <div>
          <div className="flex flex-col justify-items-center">
            <div className="flex justify-center text-5xl m-5 mt-0 ">
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
