import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";
import NewsDetail from "../components/News/NewsDetailTalas.jsx";

export default function news() {
  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <main>
        <Navbar />
        <NewsDetail />
        <Footer />
      </main>
    </>
  );
}
