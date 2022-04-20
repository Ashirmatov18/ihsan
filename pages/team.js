import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";
import Team from "../components/Team/Team";

export default function news() {
  return (
    <>
      <Head>
        <title>Team</title>
      </Head>
      <main>
        <Navbar />
        <Team />
        <Footer />
      </main>
    </>
  );
}
