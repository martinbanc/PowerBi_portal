//original basic login form without clerk

import { useState } from "react";
import logo from "../assets/images/phoenix-logo.png";
import "../styles/login.css";

//react icons
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginForm = () => {
	const [formData, setFormData] = useState({ email: "", password: "" });

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`Email: ${formData.email}, password: ${formData.password}`);
		setFormData({ email: "", password: "" });
	};

	return (
		<div className="login-wrapper">
			<form onSubmit={handleSubmit} className="login-form">
				<h1 className="form-header">Log in</h1>
				<div className="login-input">
					<label htmlFor="login-email">Email</label>
					<input type="email" name="email" id="login-email" value={formData.email} onChange={handleChange} required />
					<MdAlternateEmail color="black" className="form-icon" />
				</div>
				<div className="login-input">
					<label htmlFor="login-password">Password</label>
					<input type="password" name="password" id="login-password" value={formData.password} onChange={handleChange} required />
					<RiLockPasswordFill color="black" className="form-icon" />
				</div>
				<button className="login-btn" type="submit">
					Log in
				</button>
			</form>
			<div className="form-logo">
				<img src={logo} alt="phoenix logo" />
			</div>
		</div>
	);
};
export default LoginForm;
