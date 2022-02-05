import React, { useState, useEffect } from "react";

import { Stage1, Stage2, Stage3, Stage4, Error } from "../components/Stages";

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
  });

  const projectSubmission = () => {
    //axios calling with projectDetails as payload
    nextStage();
  };

  const [onboardingDetail, setonboardingDetail] = useState(false);

  const [membersDetails, setmembersDetails] = useState([
    {
      fullName: "",
      emailID: "",
      socialink: "",
    },
  ]);

  const [socialDetails, setsocialDetails] = useState([""]);
  const [otherDetails, setotherDetails] = useState({
    otherInfo: "",
  });

  const updateProjectHandler = (target, value) => {
    console.log(target, value);
    setprojectDetails((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  };

  const updateMemberHandler = (target, value) => {
    setmembersDetails(...membersDetails, { [target]: value });
  };

  const updateOtherHandler = (target, value) => {
    setotherDetails(...otherDetails, { [target]: value });
  };

  console.log(projectDetails);
  console.log(onboardingDetail);

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
        />
      ) : Stage === 2 ? (
        <Stage3
          otherDetails={otherDetails}
          setotherDetails={setotherDetails}
          socialDetails={socialDetails}
          setsocialDetails={setsocialDetails}
          nextStage={nextStage}
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
