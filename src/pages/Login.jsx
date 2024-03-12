import { SignIn } from "@clerk/clerk-react";

const Login = () => {
	return (
		<div>
			<SignIn
				appearance={{
					elements: {
						footerAction: { display: "none" },
					},
				}}
			/>
		</div>
	);
};
export default Login;
