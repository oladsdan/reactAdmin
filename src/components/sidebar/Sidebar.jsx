import React, { useContext } from "react";
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
    import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

function Sidebar () {
    const {dispatch} = useContext(DarkModeContext);// then we use dispatch to pass the functions to toggle

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration : "none"}}>
                    <span className="logo">OladsAdmin</span>
                </Link>
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
                    <Link to="/users" style={{textDecoration : "none"}}>
                        
                        <li>
                            <PersonOutlinedIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{textDecoration : "none"}}>
                        <li>
                            <StoreOutlinedIcon className="icon" />
                            <span>Products</span>
                        </li>

                    </Link>
                    
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
                <div className="colorOption"
                 onClick={() => dispatch({ type: "Light" })}
                 ></div>
                <div className="colorOption"
                onClick={() => dispatch({ type: "Dark" })}></div>
            </div>
        </div>
    )
}
export default Sidebar