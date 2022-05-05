import React from "react";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/contacts.module.css";

export default function contacts() {
  return (
    <main>
      <Navbar />
      <Contacts />
      <Footer />
    </main>
  );
}
