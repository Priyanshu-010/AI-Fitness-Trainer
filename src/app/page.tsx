"use client"
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { SignOutButton } from "@clerk/nextjs";

function page() {
  return (
    <div>
      Home page
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
}

export default page;
