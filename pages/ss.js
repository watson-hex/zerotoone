import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Projectcard from "../components/Projectcard";
import Loading from "../common/Loading";
import Mainlayout from "../common/Mainlayout";
export default function Home() {
  return (
    <div>
      <Loading />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Mainlayout>{page}</Mainlayout>;
};
