import { UserProfile } from "@clerk/clerk-react";
import "../styles/settings.css";

const Settings = () => {
	return (
		<div className="settings-wrapper">
			<UserProfile />
		</div>
	);
};
export default Settings;
