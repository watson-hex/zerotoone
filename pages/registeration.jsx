import {useRouter} from "next/router";
import React, {useState, useEffect, useContext} from "react";

import { Stage1, Stage2, Stage3, Stage4, Error } from "../components/Stages";
import {LoginContext} from "../utilities/auth";

import axios from "../utilities/axios";
import Mainlayout from "../common/Mainlayout";

export default function Registeration() {

  const [Stage, setStage] = useState(0);

  const [id, setid] = useState(undefined);



  // update Stage value by 1 also prevent defaults

  const nextStage = () => {
    setStage(Stage + 1);
    // console.log(Stage);
  };

  const prevStage = () => {
    setStage(Stage - 1);
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
    axios.post("/ecell/mine/", projectDetails).then((res) => {
      console.log(res);
      setid(res.data.id);
    });

    nextStage();
  };

  const [membersDetails, setmembersDetails] = useState([""]);

  const updateMemberHandler = (index, target, value) => {
    console.log(index, target, value);

    setmembersDetails(
      // update a particular member
      membersDetails.map((member) => {
        if (membersDetails.indexOf(member) === index) {
          return value;
        }
        return member;
      })
    );
  };

  const [onboardingDetail, setonboardingDetail] = useState(false);

  const memberSubmission = () => {
    axios.patch("/ecell/mine/", {
      owners: membersDetails,
      onBoarding: onboardingDetail,
      form_filling_stage: 2,

      id: id,
    });

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
    axios
      .patch("/ecell/mine/", {
        social_links: JSON.stringify(socialDetails),
        updates: otherDetails,
        form_filling_stage: 4,

        id: id,
      })
      .then((res) => {
        console.log(res);
        setStage(3);
      });
    // nextStage();
  };

  const isAuthenticated = useContext(LoginContext);
  const router = useRouter();
  if (!isAuthenticated) {
    router.push("/403");
  }

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
          prevStage={prevStage}
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
          prevStage={prevStage}
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
