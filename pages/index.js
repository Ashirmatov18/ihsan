import Head from "next/head";
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import * as React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Opportunity from "../components/Opportunity";
import Calculator from "../components/Calculator";
import Residential from "../components/Residential";
import Review from "../components/Review";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ishan</title>
      </Head>

      <main>
        <Navbar />
        <Opportunity />
        <Calculator />
        <Residential />
        <Review />
      </main>
    </>
  );
}
