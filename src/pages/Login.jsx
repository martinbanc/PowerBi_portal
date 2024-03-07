import LoginForm from "../components/LoginForm";
import "../styles/login.css";

const Login = () => {
	return (
		<div className="login-wrapper">
			<h1>Log in</h1>
			<LoginForm />
		</div>
	);
};
export default Login;
