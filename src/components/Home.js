import React from "react";
import { ContextData } from "./DataFile";
import "./Home.css";
import MainPage from "./MainPage";
import Navbar from "./Navbar";
function Home() {
  return (
    <div className="home">
      <Navbar />
<MainPage/>

    </div>
  );
}

export default Home;
