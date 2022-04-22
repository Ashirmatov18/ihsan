import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";
import Programs from "../components/Programs/Programs.jsx";

export default function programs() {
  return (
    <div>
      <Head>
        <title>Программы</title>
      </Head>
      <main>
        <Navbar />
        <Programs />
        <Footer />
      </main>
    </div>
  );
}
