"use client"; // 👈 Add this line at the top

import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="w-full max-w-4xl flex bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Left Panel */}
        <div className="w-1/2 p-8 flex flex-col justify-center items-center bg-gradient-to-tr from-blue-500 to-blue-600 text-white">
          <h3 className="text-3xl font-bold mb-4">New here?</h3>
          <p className="text-center mb-6 text-lg">
            Join us and unlock a world of possibilities — <strong>Sign Up</strong> now!
          </p>
          <Image
            src="/images/register.svg"
            alt="Sign Up Illustration"
            width={300}
            height={300}
          />
        </div>

        {/* Right Panel */}
        <div className="w-1/2 p-12">
          <SignUp
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "bg-transparent shadow-none",
                headerTitle: "text-2xl font-semibold text-center",
                headerSubtitle: "text-gray-600 text-center text-lg",
                socialButtonsBlockButton:
                  "border border-gray-300 hover:bg-gray-50",
                socialButtonsBlockButtonText: "font-medium text-lg",
                dividerLine: "bg-gray-200",
                dividerText: "text-gray-500 text-lg",
                formFieldLabel: "font-medium text-gray-700 text-lg",
                formFieldInput:
                  "rounded border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg",
                footerActionText: "text-gray-600 text-lg",
                footerActionLink: "text-blue-600 hover:text-blue-700 text-lg",
                formButtonPrimary:
                  "bg-blue-600 hover:bg-blue-700 text-white text-lg",
              },
              layout: {
                logoPlacement: "inside",
                showOptionalFields: false,
                socialButtonsVariant: "iconButton",
              },
            }}
            redirectUrl="/sync-user"
            signInUrl="/sign-in"
          />
          </div>
        </div>
      </div>
  );
}
