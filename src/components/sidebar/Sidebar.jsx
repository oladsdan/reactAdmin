import React from "react";
import './sidebar.scss'; 
import { DashboardIcon,
    PersonOutlinedIcon,
    StoreOutlinedIcon,
    CreditCardOutlinedIcon,
    LocalShippingOutlinedIcon,
    InsertChartOutlinedIcon,
    NotificationsNoneOutlinedIcon,
    PsychologyOutlinedIcon,
    SettingsApplicationsOutlined,
    AccountCircleOutlinedIcon,
    ExitToAppOutlinedIcon,
    SettingsSystemDaydreamOutlinedIcon } from "./icons";

function Sidebar () {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">OladsAdmin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">Lists</p>
                    <li>
                        <PersonOutlinedIcon className="icon" />
                        <span>Users</span>
                    </li>
                    <li>
                        <StoreOutlinedIcon className="icon" />
                        <span>Products</span>
                    </li>
                    <li>
                        <CreditCardOutlinedIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL </p>
                    <li>
                        <InsertChartOutlinedIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsOutlined className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppOutlinedIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}
export default Sidebar