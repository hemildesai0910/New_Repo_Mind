"use client"; // 👈 Add this line at the top

import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="w-full max-w-4xl flex bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Left Panel */}
        <div className="w-1/2 p-8 flex flex-col justify-center items-center bg-gradient-to-tr from-blue-500 to-blue-600 text-white">
          <h3 className="text-3xl font-bold mb-4">One of us?</h3>
          <p className="text-center mb-6 text-lg">
            Ready for more? <strong>Sign In</strong> and let's go!
          </p>
          <Image
            src="/images/log.svg"
            alt="Sign In Illustration"
            width={300}
            height={300}
          />
        </div>

        {/* Right Panel */}
        <div className="w-1/2 p-12">
          <SignIn
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
            signUpUrl="/sign-up"
          />
        </div>
      </div>
    </div>
  );
}
