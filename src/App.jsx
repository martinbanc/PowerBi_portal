import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Login from "./pages/Login";
import 'apexcharts/dist/apexcharts.css';
import Layout from "./pages/Layout.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import DataForms from "./pages/DataForms.jsx";
import Settings from "./pages/Settings.jsx";
import NotFound from "./pages/NotFound.jsx";


function App() {
	return (
		<>
		<BrowserRouter>
			<SignedOut>
				<Login />
			</SignedOut>
			<SignedIn>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Dashboard />} />
						<Route path="/forms" element={<DataForms />} />
						<Route path="/settings" element={<Settings />}/>
						<Route path="*" element={<NotFound />}/>
					</Route>
				</Routes>
			</SignedIn>	
		</BrowserRouter>
		</>
	);
}

export default App;