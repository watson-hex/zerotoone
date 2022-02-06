import React, { useState, useEffect } from "react";

import { Stage1, Stage2, Stage3, Stage4, Error } from "../components/Stages";

import axios from "../utilities/axios";
import Mainlayout from "../common/Mainlayout";

export default function Registeration() {
  const [Stage, setStage] = useState(0);

  // update Stage value by 1 also prevent defaults

  const nextStage = () => {
    setStage(Stage + 1);
    // console.log(Stage);
  };

  // update handler to assign values to target

  const [projectDetails, setprojectDetails] = useState({
    name: "",
    description: "",
    tags: "",
    stage: "Yes",
    startedOn: "",
    duration: "",
    hidden: false,
    form_filling_stage: 1,
  });

  const updateProjectHandler = (target, value) => {
    console.log(target, value);
    setprojectDetails((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  };

  const projectSubmission = () => {
    //axios calling with projectDetails as payload
    axios.post("/ecell/mine/", projectDetails);

    nextStage();
  };

  const [membersDetails, setmembersDetails] = useState([
    {
      fullName: "",
      emailID: "",
      socialink: "",
      form_filling_stage: 2,
    },
  ]);

  const updateMemberHandler = (index, target, value) => {
    console.log(index, target, value);

    setmembersDetails(
      // update a particular member
      membersDetails.map((member) => {
        if (membersDetails.indexOf(member) === index) {
          return {
            ...member,
            [target]: value,
          };
        }
        return member;
      })
    );
  };

  const [onboardingDetail, setonboardingDetail] = useState(false);

  const memberSubmission = () => {
    axios.post(
      "/ecell/mine",
      Object.assign({}, membersDetails, { onBoarding: onboardingDetail })
    );

    //axios calling with projectDetails as payload
    nextStage();
  };

  const [socialDetails, setsocialDetails] = useState([""]);

  const updateSocialHandler = (index, value) => {
    console.log(index, value);

    // update value of a particular socialDetails in array
    setsocialDetails(
      socialDetails.map((social) => {
        if (socialDetails.indexOf(social) === index) {
          return value;
        }
        return social;
      })
    );
  };

  const [otherDetails, setotherDetails] = useState("");

  const otherSubmission = () => {
    //axios calling with projectDetails as payload
    axios.post(
      "/ecell/registeration",
      Object.assign(
        {},
        { socialLinks: socialDetails },
        { onBoarding: onboardingDetail }
      )
    );
    nextStage();
  };

  return (
    <div className="">
      {Stage === 0 ? (
        <Stage1
          projectDetails={projectDetails}
          setprojectDetails={setprojectDetails}
          updateProjectHandler={updateProjectHandler}
          nextStage={nextStage}
          projectSubmission={projectSubmission}
        />
      ) : Stage === 1 ? (
        <Stage2
          membersDetails={membersDetails}
          setmembersDetails={setmembersDetails}
          updateMemberHandler={updateMemberHandler}
          nextStage={nextStage}
          setonboardingDetail={setonboardingDetail}
          memberSubmission={memberSubmission}
        />
      ) : Stage === 2 ? (
        <Stage3
          otherDetails={otherDetails}
          setotherDetails={setotherDetails}
          socialDetails={socialDetails}
          setsocialDetails={setsocialDetails}
          nextStage={nextStage}
          updateSocialHandler={updateSocialHandler}
          otherSubmission={otherSubmission}
        />
      ) : Stage === 3 ? (
        <Stage4 />
      ) : (
        <Error />
      )}
    </div>
  );
}

Registeration.getLayout = function getLayout(page) {
  return <Mainlayout>{page}</Mainlayout>;
};
