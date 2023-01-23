import React from "react";
import Chart from "../../components/Charts/Chart";
import Featured from "../../components/Featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/Widgets/Widget";
import "./home.scss";

function Home () {
    return (
        <div className="home">
            <Sidebar />
            <div className="homecontainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type= "earnings" />
                    <Widget type= "balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
              
            </div>
        </div>
    )
}

export default Home