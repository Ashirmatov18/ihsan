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
import News from "../components/News";
import Questions from "../components/Questions";
import Footer from "../components/Footer";

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
        <News />
        <Questions />
        <Footer />
      </main>
    </>
  );
}
