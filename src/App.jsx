import { SignedIn, SignedOut, SignIn, UserButton, SignOutButton } from "@clerk/clerk-react";

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
				<SignOutButton />
			</SignedIn>
		</>
	);
}

export default App;
