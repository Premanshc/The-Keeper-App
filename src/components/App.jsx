import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

export default function App() {
  return (
    <div>
      <Header />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}
