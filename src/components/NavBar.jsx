import { UserButton } from "@clerk/clerk-react";
import "../styles/main.css";
import SignOutBtn from "./SignOutBtn";
const Image = ({ src, className, alt }) => <img src={src} className={className} alt={alt} />;

const NavBar = () => {
	const bellSrc = "https://cdn.builder.io/api/v1/image/assets/TEMP/1897bc6f8509aea1813e73e14d033a824cb99a968df766bbb37fd8d01b7a3ad7?"; // Replace with your bell icon source
	const logoSrc = "https://www.phoenixs.co.uk/wp-content/themes/phoenix/_/images/logo.png";
       
	const handleSearch = (event) => {
		// Handle search input
		console.log(event.target.value);
	};

	const handleLanguageChange = (event) => {
		// Handle language change
		console.log(event.target.value);
	};

	return (
		<div className="navbar">
			<input type="text" className="search-bar" onChange={handleSearch} placeholder="Search here..." />
			<select className="language-select" onChange={handleLanguageChange}>
				<option value="en">English</option>
				<option value="fr">French</option>
				{/* Add more options as needed */}
			</select>
			<img className="img-logo" src={logoSrc} alt="phoenix Logo" /> 
			<div className="user">
				<Image src={bellSrc} className="notification-bell" alt="Notification Bell" />
				<UserButton />
				<SignOutBtn className="btn" />
			</div>
		</div>
	);
};

export default NavBar;
