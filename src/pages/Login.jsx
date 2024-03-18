import { SignIn } from "@clerk/clerk-react";
import "../styles/login.css";

const Login = () => {
	const logoSrc = "https://www.phoenixs.co.uk/wp-content/themes/phoenix/_/images/logo.png";
	return (
		<div className="login-wrapper">
			<SignIn
				appearance={{
					elements: {
						footerAction: { display: "none" },
					},
				}}
			/>
			<img className="login-logo" src={logoSrc} alt="Phoenix logo" />
		</div>
	);
};
export default Login;
