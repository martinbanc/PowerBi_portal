import { SignedIn, SignedOut, SignIn, UserButton, SignOutButton } from "@clerk/clerk-react";
// import LoginForm from "./pages/LoginForm";

function App() {
	return (
		<>
			<SignedOut>
				<SignIn
					appearance={{
						elements: {
							footerAction: { display: "none" },
						},
					}}
				/>
			</SignedOut>
			<SignedIn>
				<h1>Logged In</h1>
				<UserButton />
				<SignOutButton redirectUrl="/" />
			</SignedIn>
		</>
	);
}

export default App;
