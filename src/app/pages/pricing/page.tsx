"use client";
import Navbar from "@/app/components/Navbar";
import { useState } from "react";

const PricingPage = () => {
  const [selectedCredits, setSelectedCredits] = useState<string>("10");

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-[#E4F9F5] via-[#FCECDD] to-[#FFE2E2] text-black flex flex-col items-center justify-between">
      <div className="container mx-auto px-6 py-16 space-y-10 animate-fadeIn">
        <Navbar /> {/* Use Navbar Here */}
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Simple pay-as-you-use pricing
          </h1>
          <p className="text-black/80 mt-4">
            No contracts. No commitments. <br />
          </p>
        </div>

        {/* Pricing Section */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10">
          {/* Plan Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <h2 className="text-sm font-semibold text-gray-500 mb-2">PLAN</h2>
            <p className="text-4xl font-bold text-black mb-4">
              USD 0.10<span className="text-lg font-medium">/word</span>
            </p>
            <p className="text-gray-600 mb-6">
              A blog post of 1,000 words will cost you USD 100.
            </p>
            <button className="bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-200">
              Get started
            </button>
          </div>

          {/* What's Included Card */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4 text-black">
              What’s included?
            </h2>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✅ Research</li>
              <li>✅ Royalty-free images</li>
              <li>✅ Unlimited free revisions</li>
              <li>✅ Live-chat support</li>
            </ul>
            <p className="text-gray-600">
              Looking for managed services or high volume discounts? <br />
              Contact us on live-chat
            </p>
          </div>
        </div>

        {/* On-Demand Credits Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-auto mt-12">
          <h2 className="text-2xl font-semibold text-center mb-4 text-[#4A4A4A]">
            On Demand Credits: $0.02/Credit
          </h2>
          <div className="space-y-4">
            {[
              { credits: "10", price: "$0.20", popular: true },
              { credits: "50", price: "$1.00" },
              { credits: "100", price: "$2.00" },
              { credits: "250", price: "$5.00" },
              { credits: "500", price: "$10.00" },
            ].map(({ credits, price, popular }) => (
              <label
                key={credits}
                className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedCredits === credits
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="credits"
                  value={credits}
                  checked={selectedCredits === credits}
                  onChange={() => setSelectedCredits(credits)}
                  className="form-radio text-blue-600 h-5 w-5 mr-4"
                />
                <span className="flex-1 text-lg font-medium">
                  {credits} Credits
                </span>
                <span className="text-lg font-bold text-[#4A4A4A]">{price}</span>
                {popular && (
                  <span className="ml-3 px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded">
                    Most Popular
                  </span>
                )}
              </label>
            ))}
          </div>

          <button className="mt-6 w-full bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition-all duration-200">
            Buy Now
          </button>

          <p className="text-gray-500 text-sm mt-4 text-center">
            Credits are valid for use anytime within a year of purchase.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="container mx-auto px-6 mt-8 mb-4 text-center text-gray-500">
        © {new Date().getFullYear()} Repo Mind.
      </div>
    </section>
  );
};

export default PricingPage;