import React from "react";
import './widget.scss';
import { PersonOutlinedIcon } from "../sidebar/icons";
import { AccountBalanceOutlined, KeyboardArrowUpOutlined, MonetizationOnOutlined, ShoppingCartOutlined } from "@mui/icons-material";

function Widget({type}) {
    let data;

    //temporary
    const amount =100;
    const diff=20;

        switch(type){
            case "user":
                data={
                    title:"USERS",
                    IsMoney: false,
                    link: "See all users",
                    icon: <PersonOutlinedIcon className="icon" style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0, 0.2)"}} />
                };
                break;
                case "order":
                data={
                    title:"ORDERS",
                    IsMoney: false,
                    link: "view all orders",
                    icon: <ShoppingCartOutlined className="icon" style={{
                        color: "goldenrod",
                        backgroundColor: "rgba(218, 165, 32, 0.2)"
                    }} />
                };
                break;
                case "earnings":
                data={
                    title:"EARNINGS",
                    IsMoney: true,
                    link: "See all earnings",
                    icon: <MonetizationOnOutlined className="icon" style={{
                        backgroundColor: "rgba(0, 128, 0, 0.2)",
                        color: "green"
                    }} />
                };
                break;
                case "balance":
                data={
                    title:"BALANCE",
                    IsMoney: true,
                    link: "See details",
                    icon: <AccountBalanceOutlined className="icon" style={{
                        backgroundColor: "rgba(128, 0, 128, 0.2)",
                        color: "purple"
                    }} />
                };
                break;
                default:
                    break;
        }

    return (
        <div className="widget">
            <div className="left">
               <span className="title">{data.title}</span>
               <span className="counter">{data.IsMoney && "$"}{amount}</span>
               <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlined />
                     {diff}%
                </div> 
                {data.icon}
            </div>

        </div>
    )
}

export default Widget