import { SignedIn, SignedOut, UserButton, SignOutButton } from "@clerk/clerk-react";
import Login from "./pages/Login";
import 'apexcharts/dist/apexcharts.css';
import Dashboard from "./pages/Dashboard";

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
				<Dashboard />
			</SignedIn>
		</>
	);
}

export default App;