import { useState } from "react";
import "../styles/login.css";

const LoginForm = () => {
	const [formData, setFormData] = useState({ email: "", password: "" });

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`Email: ${formData.email}, password: ${formData.password}`);
	};

	return (
		<form onSubmit={handleSubmit} className="login-form">
			<div className="login-input">
				<label htmlFor="login-email">Email</label>
				<input type="email" name="email" placeholder="example@email.com" id="login-email" value={formData.email} onChange={handleChange} required />
			</div>
			<div className="login-input">
				<label htmlFor="login-password">Password</label>
				<input type="password" name="password" placeholder="Input password..." id="login-password" value={formData.password} onChange={handleChange} required />
			</div>
			<button className="login-btn" type="submit">
				Log in
			</button>
		</form>
	);
};
export default LoginForm;
