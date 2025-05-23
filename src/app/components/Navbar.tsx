"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-20 flex items-center justify-between border-b bg-white/70 px-8 py-6 shadow-md backdrop-blur-md transition-all duration-300">
      <div className="flex items-center">
        <Link href="/" className="flex items-center text-2xl font-bold">
          <span className="mr-2 text-3xl">&#60;&#47;&#62;</span> RepoMind
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="relative hidden space-x-10 text-lg md:flex">
        {/* Other Links */}
        <Link
          href="/"
          className="text-gray-700 transition-all duration-200 hover:text-gray-900"
        >
          Home
        </Link>
{/* Product Link with Dropdown */}
<div className="group relative">
  <Link
    href="#product"
    className="text-gray-700 text-base transition-all duration-200 hover:text-gray-900"
  >
    Product
  </Link>
  {/* Dropdown Menu */}
  <div className="absolute left-0 top-full mt-4 hidden w-[500px] rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-300 group-hover:block">
    <div className="flex w-full">
      {/* Platform Column */}
      <div className="w-1/2 border-r border-gray-200 p-4">
        <h3 className="mb-2 text-base font-semibold text-purple-600">
          <span className="mr-1 text-xl">&#60;&#47;&#62;</span> Platform
        </h3>
        <ul className="space-y-2 text-base text-gray-700">
          <li><Link href="#">AI-Powered Code Mapping</Link></li>
          <li><Link href="#">Intelligent Code Search</Link></li>
          <li><Link href="#">Code Understanding Assistant</Link></li>
          <li><Link href="#">Code Review Automation</Link></li>
          <li><Link href="#">Function Maps (New)</Link></li>
          <li><Link href="#">Interactive Code Tours</Link></li>
          <li><Link href="#">Project Documentation AI</Link></li>
          <li><Link href="#">Changelog & Updates</Link></li>
          <li><Link href="#">API Integrations</Link></li>
        </ul>
      </div>
      {/* Use Cases Column */}
      <div className="w-1/2 p-4">
        <h3 className="mb-2 text-base font-semibold text-purple-600">
          <span className="mr-1 text-xl">&#128100;</span> Use Cases
        </h3>
        <ul className="space-y-2 text-base text-gray-700">
          <li><Link href="#">Codebase Onboarding</Link></li>
          <li><Link href="#">Automated Code Documentation</Link></li>
          <li><Link href="#">SaaS Credit Management</Link></li>
          <li><Link href="#">Large Codebase Navigation</Link></li>
          <li><Link href="#">AI-Powered Refactoring</Link></li>
          <li><Link href="#">Security & Compliance</Link></li>
          <li><Link href="#">Technical Debt Analysis</Link></li>
          <li><Link href="#">Performance Optimization</Link></li>
          <li><Link href="#">Team Collaboration Tools</Link></li>
        </ul>
      </div>
    </div>
  </div>
</div>

{/* Resources Link with Dropdown */}
<div className="group relative">
  <Link
    href="#resources"
    className="text-gray-700 text-base transition-all duration-200 hover:text-gray-900"
  >
    Resources
  </Link>
  {/* Dropdown Menu */}
  <div className="absolute left-0 top-full mt-4 hidden w-[500px] rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-300 group-hover:block">
    <div className="flex w-full">
      {/* Using CodeSee Column */}
      <div className="w-1/2 border-r border-gray-200 p-4">
        <h3 className="mb-2 flex items-center text-base font-semibold text-purple-600">
          <span className="mr-2 text-xl">&#9881;</span> Using the Platform
        </h3>
        <ul className="space-y-2 text-base text-gray-700">
          <li><Link href="#">Documentation</Link></li>
          <li><Link href="#">API Reference</Link></li>
          <li><Link href="#">CLI Tools</Link></li>
          <li><Link href="#">Best Practices</Link></li>
          <li><Link href="#">Security Guidelines</Link></li>
          <li><Link href="#">Billing & Credits</Link></li>
          <li><Link href="#">Privacy Policy</Link></li>
          <li><Link href="#">Terms of Service</Link></li>
          <li><Link href="#">Release Notes</Link></li>
        </ul>
      </div>
      {/* Learning Center Column */}
      <div className="w-1/2 p-4">
        <h3 className="mb-2 flex items-center text-base font-semibold text-purple-600">
          <span className="mr-2 text-xl">&#128218;</span> Learning Center
        </h3>
        <ul className="space-y-2 text-base text-gray-700">
          <li><Link href="#">AI in Code Analysis</Link></li>
          <li><Link href="#">Handling Large Repos</Link></li>
          <li><Link href="#">Optimizing Code Performance</Link></li>
          <li><Link href="#">Effective Code Reviews</Link></li>
          <li><Link href="#">Version Control Tips</Link></li>
          <li><Link href="#">Refactoring Strategies</Link></li>
          <li><Link href="#">Managing Technical Debt</Link></li>
          <li><Link href="#">Continuous Integration</Link></li>
          <li><Link href="#">Scaling Applications</Link></li>
        </ul>
      </div>
    </div>
  </div>
</div>

        <Link
          href="/pages/pricing"
          className="text-gray-700 transition-all duration-200 hover:text-gray-900"
        >
          Pricing
        </Link>
        <Link
          href="/pages/solutions"
          className="text-gray-700 transition-all duration-200 hover:text-gray-900"
        >
          Solutions
        </Link>
      </nav>

      {/* Login Button */}
      <div>
        <Link href="/sign-in">
          <Button variant="ghost" className="mr-3 text-lg">
            Login
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
