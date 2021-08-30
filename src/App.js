import React from "react";
import "./scss/App.scss";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
