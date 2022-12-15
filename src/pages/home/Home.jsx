import React from "react";
import Charts from "../../components/charts/Charts";
import Featured from "../../components/featured/Featured";
import Tables from "../../components/tables/Tables";
import Navbar from "../../components/ui/Navbar";
import Sidebar from "../../components/ui/Sidebar";
import Widget from "../../components/widget/Widget";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="orders" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Charts />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transcation</div>
          <Tables/>
        </div>
      </div>
    </div>
  );
};

export default Home;
