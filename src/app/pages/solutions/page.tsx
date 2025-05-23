import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/app/components/Navbar";

const SolutionPage = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-[#A1EDF2] via-[#BFB9F5] to-[#9CF3F0] text-black flex items-center justify-center">
      {/* Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-10 py-20 space-y-12 md:space-y-0 animate-fadeIn">
      <Navbar />  {/* Use Navbar Here */}
        {/* Left Side - Text Content */}
        <div className="max-w-xl space-y-6">
          <h3 className="text-lg text-violet-600">FinTech</h3>
          <h1 className="text-5xl md:text-6xl font-bold text-black">
            Mitigate risk and stay compliant.
          </h1>
          <p className="text-black/80 text-lg">
            Leading FinTech and investment firms rely on Repo Mind to visualize and automate their codebases for better compliance.
          </p>
            {/* <Link href="#demo">
              <span className="text-violet-600 hover:underline cursor-pointer">
                Watch the demo &gt;
              </span>
            </Link> */}
        </div>
        
        {/* Right Side - Image */}
        <div className="relative max-w-2xl transition-transform duration-300 hover:scale-105">
          <Image
            src="/images/s2.svg" // Ensure this image is in the 'public' directory
            alt="Code visualization by Repo Mind"
            width={1400}
            height={1200}
            className="rounded-lg shadow-lg"
          />
        </div>

      </div>
      
    </section>
  );
};

export default SolutionPage;