import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";
import ReviewsVid from "../components/Reviews/ReviewsVid";

export default function programs() {
  return (
    <div>
      <Head>
        <title>Программы</title>
      </Head>
      <main>
        <Navbar />
        <ReviewsVid />
        <Footer />
      </main>
    </div>
  );
}
