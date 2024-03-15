// import { NavLink } from "react-router-dom";
import { FaGauge, FaChartLine, FaGear, FaRightFromBracket } from "react-icons/fa6";
import CardContainer from "../components/CardContainer";
import pLogo from "../assets/images/pLogo.jpg";
import "../styles/dashboard.css";

const Dashboard = () => {
	const logoSrc = "https://www.phoenixs.co.uk/wp-content/themes/phoenix/_/images/logo.png";
	const menuItem = [
		{
			path: "/",
			name: "Dashboard",
			icon: <FaGauge />,
		},
		{
			path: "/",
			name: "Repot",
			icon: <FaChartLine />,
		},
		{
			path: "/",
			name: "Settings",
			icon: <FaGear />,
		},
		{
			path: "/",
			name: "Sign Out",
			icon: <FaRightFromBracket />,
		},
	];
	return (
		<div className="container">
			<div className="sidebar">
				<div className="top_section">
					<img src={logoSrc} alt="phoenix Logo" />
				</div>
				{menuItem.map((item, index) => (
					<div to={item.path} key={index} className="link" activeclassname="active">
						<div className="icon">{item.icon}</div>
						<div className="link_text">{item.name}</div>
					</div>
				))}
				<div className="sectionD">
					<div className="p">
						<img src={pLogo} alt="Phoenix P Logo" />
					</div>
					<h3>Phoenix</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum</p>
					<button className="btn">More</button>
				</div>
				<div className="circel"></div>
			</div>
			<CardContainer />
		</div>
	);
};

export default Dashboard;
