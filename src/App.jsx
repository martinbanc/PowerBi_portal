import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Login from "./pages/Login";
import 'apexcharts/dist/apexcharts.css';
// import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar"
import DataForms from "./pages/DataForms";


function App() {
	return (
		<>
			<SignedOut>
				<Login />
			</SignedOut>
			<SignedIn>
				<NavBar />
				{/* <Dashboard /> */}
				<DataForms />	
			</SignedIn>
		</>
	);
}

export default App;