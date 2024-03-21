import { FaGauge, FaChartLine, FaGear, FaRightFromBracket } from "react-icons/fa6";
import SignOutBtn from "./SignOutBtn";
import pLogo from "../assets/images/pLogo.jpg";
import { NavLink } from "react-router-dom";
import "../styles/dashboard.css";

const Sidebar = () => {
        const logoSrc = "https://www.phoenixs.co.uk/wp-content/themes/phoenix/_/images/logo.png";
        return (
            <div className="container">
                <div className="sidebar">
                    <div className="top_section">
                        <img src={logoSrc} alt="phoenix Logo" />
                    </div>
                    <NavLink className="link" to="/" activeclassname="active">
                        <div className="icon"><FaGauge /></div>
                        <div className="link_text">Dashboard</div>
                    </NavLink>
                    <NavLink className="link" to="/forms">
                        <div className="icon"><FaChartLine /></div>
                        <div className="link_text">Data Forms</div>
                    </NavLink>
                    <NavLink className="link" to="/settings">
                        <div className="icon"><FaGear /></div>
                        <div className="link_text">Settings</div>
                    </NavLink>
                    <NavLink className="link" to="/sign">
                        <div className="icon"><FaRightFromBracket /></div>
                        <div className="link_text"><SignOutBtn className="sign-out-text"/></div>
                    </NavLink>
                    <div className="sectionD">
                        <div className="p">
                            <img src={pLogo} alt="Phoenix P Logo" />
                        </div>
                        <h3>Phoenix</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum</p>
                        <button className="btn">More</button>
                    </div>
                </div>
            </div>
        );
    };

export default Sidebar;