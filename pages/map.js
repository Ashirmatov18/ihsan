import React from "react";
import Footer from "../components/Footer";
import MainMap from "../components/Map/MainMap";
import Navbar from "../components/Navbar";

export default function map() {
  return (
    <main>
      <Navbar />
      <MainMap />
    </main>
  );
}
