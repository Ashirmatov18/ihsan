import React from "react";
import Newsishan from "../components/News/Newsishan.jsx";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";

export default function news() {
  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <main>
        <Navbar />
        <Newsishan />
        <Footer />
      </main>
    </>
  );
}
