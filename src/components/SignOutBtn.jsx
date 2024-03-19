import { SignOutButton } from "@clerk/clerk-react";

export default function SignOutBtn({ className }) {
	return (
		<SignOutButton>
			<button className={className}>Sign out</button>
		</SignOutButton>
	);
}
