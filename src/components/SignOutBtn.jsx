import { SignOutButton } from "@clerk/clerk-react";
 
export default function SignOutBtn({ className }) {
  return (
    <div>
      <SignOutButton>
        <button className={className}>Sign out</button>
      </SignOutButton>
    </div>
  );
}