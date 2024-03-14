
// import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faRightFromBracket, faGauge, faChartLine} from '@fortawesome/free-solid-svg-icons'
import CardContainer from "../components/CardContainer"

import "../styles/dashboard.css";

const Dashboard = () => {
const logoSrc = 'https://www.phoenixs.co.uk/wp-content/themes/phoenix/_/images/logo.png';
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FontAwesomeIcon icon={faGauge}/>
        },
        {
            path:"/",
            name:"Repot",
            icon:<FontAwesomeIcon icon={faChartLine}/>
        },{
            path:"/",
            name:"Settings",
            icon:<FontAwesomeIcon icon={faGear}/>
        },
        {
            path:"/",
            name:"Sign Out",
            icon:<FontAwesomeIcon icon={faRightFromBracket}/>
        },
    ]
    return(
        <><div className="container">
            <div className="sidebar">
                <div className="top_section">
                    <div className="bars">
                        <img src={logoSrc} alt="phoenix Logo" />
                    </div>
                </div>
                {menuItem.map((item, index) => (
                    <div to={item.path} key={index} className="link" activeclassname="active">
                        <div className="icon">{item.icon}</div>
                        <div className="link_text">{item.name}</div>
                    </div>
                ))}
                <div className="sectionD">
                    <div className="p">
                        <img src="assets/images/p,jpg" alt="" />
                    </div>
                    <h3>Phoenix</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum</p>
                    <button className="btn">More</button>
                </div>
                <div className="circel">

                </div>
            </div>
            <CardContainer/>
        </div>

        </>
 
    );
}

export default Dashboard