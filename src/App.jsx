import { SignedIn, SignedOut, UserButton, SignOutButton } from "@clerk/clerk-react";
import Login from "./pages/Login";

function App() {
	return (
		<>
			<SignedOut>
				<Login />
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