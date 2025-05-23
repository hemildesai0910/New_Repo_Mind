import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import Navbar from "./components/Navbar";// Import Navbar

export default function Home() {
  const features = [
    {
      icon: "🔍",
      title: "Codebase Visibility",
      description:
        "Devs spend 60% of their time reading and understanding code because they don't have a smart way to consume mental models of their code, services and dependencies.",
      link: "#codebase-visibility",
    },
    {
      icon: "🚀",
      title: "Codebase Onboarding",
      description:
        "Codebase onboarding doesn't just happen when hiring. It happens when you need to understand how your code works, devs left, up/down stream dependencies, outages, reorgs and more.",
      link: "#codebase-onboarding",
    },
    {
      icon: "📉",
      title: "Codebase Offboarding",
      description:
        "Whether because of a restructure or a RIF, we're all feeling the effects of needing to work in the codebase without the devs who wrote it. Let RepoMind make it easier on the team.",
      link: "#codebase-offboarding",
    },
    {
      icon: "🔧",
      title: "Refactoring",
      description:
        "Knowing how all the pieces in a system fit together influences the ability to move quickly when breaking down modules, breaking up monoliths into services or changing legacy code. CodeSee shows all the file dependencies in your codebase.",
      link: "#refactoring",
    },
    {
      icon: "📄",
      title: "Auto Documentation",
      description:
        "Developers hate writing documentation so get real-time understanding and observability that you can rely on.",
    },
    {
      icon: "🐛",
      title: "Debugging",
      description:
        "When trying to debug a challenging problem, F12 isn't enough. Understanding your code flow and function impact is.",
      link: "#debugging",
    },
    {
      icon: "✅",
      title: "Make QA Test Plans",
      description:
        "Help your QA teams know what to test and the impact a code change has.",
      link: "#qa-test-plans",
    },
    {
      icon: "🔒",
      title: "Secure Dev Processes",
      description:
        "Create standards for security and compliance with less complexity.",
      link: "#dev-processes",
    },
  ];

  const featureCards = [
    {
      color: "bg-[#00A8FF]",
      title: "Follow function level logic in your editor",
      description:
        "AI Code Search lets you tease out the impact of a function and figure out how something convoluted works.",
      imagePath: "/images/1.webp",
    },
    {
      color: "bg-[#FF326E]",
      title: "Understand repo level code dependencies",
      description:
        "Create views on top of your code to articulate features, tech debt, ownership, etc. to avoid pitfalls or gotchas that persist.",
      imagePath: "/images/2.webp",
    },
    {
      color: "bg-[#17CCC1]",
      title: "Searching specific pieces of code.",
      description:
        "This includes searching by function names, classes, or even keywords across the repository, making it faster to find relevant code snippets.",
      imagePath: "/images/3.webp",
    },
    {
      color: "bg-[#FFA605]",
      title: "Map your code",
      description:
        "Get instant mental models of your code for rapid understanding so your team can get back to shipping code.",
      imagePath: "/images/4.webp",
    },
    {
      color: "bg-[#E07862]",
      title: "Create code knowledge views with Code Functionality Q&A",
      description:
        "The AI analyzes the code and provides explanations in natural language, helping developers understand code behavior without diving deep into the files manually.",
      imagePath: "/images/5.webp",
    },
    {
      color: "bg-[#3A7CFF]",
      title: "Collaborate in real time or async",
      description: "Integrate Zoom meetings with Repo Mind to generate insightful content automatically. Capture key discussions, decisions, and action items in real-time or review them later at your convenience.",
      imagePath: "/images/66.webp",
    },
  ];
  
  const featureCardsAi = [
    {
      color: "bg-[#00A3FF]",
      title: "Follow function level logic in your editor",
      description:
        "AI Code Search lets you tease out the impact of a function and figure out how something convoluted works.",
        imagePath: "/images/1.webp",
    },
    {
      color: "bg-[#FF326E]",
      title: "Understand repo level code dependencies",
      description:
        "Create views on top of your code to articulate features, tech debt, ownership, etc. to avoid pitfalls or gotchas that persist.",
        imagePath: "/images/1.webp",
    },
    {
      color: "bg-[#17CCC1]",
      title: "Auto generated and auto updated",
      description:
        "Auto generate and auto update your map as your code changes. No additional work required.",
        imagePath: "/images/1.webp",
    },
    {
      color: "bg-[#FFA605]",
      title: "Map your code",
      description:
        "Get instant mental models of your code for rapid understanding so your team can get back to shipping code.",
        imagePath: "/images/1.webp",
    },
  ];

  const codebaseFeatures = [
    {
      color: "bg-[#FF326E]",
      title: "AI Generated Code Summaries",
      description:
        "Get concise summaries of functions, files, and modules to quickly grasp complex codeLeverage AI to create concise and clear summaries for functions, files, and entire modules. Skip the deep dives and get to the core of what each part of your code does, saving valuable time..",
      imagePath: "/images/66.webp",
    },
    {
      color: "bg-[#00A8FF]",
      title: "Automated README Summaries ",
      description:
        "Repo Mind analyzes your project structure and key files to generate comprehensive README files, including installation steps, usage instructions, and contribution guidelines, making onboarding smoother for new developers.",
        imagePath: "/images/7.webp",
    },
    {
      color: "bg-[#17CCC1]",
      title: " Intelligent File Structure Analysis ",
      description:
        "Get a visual and hierarchical analysis of your project’s file structure. AI highlights core components, dependencies, and key scripts, helping you understand and manage your repository efficiently.",
        imagePath: "/images/8.webp",
    },
    {
      color: "bg-[#FFA605]",
      title: "Self-Documenting Services",
      description: "Repo Mind’s AI generates detailed comments and documentation for your services and functions, ensuring that every part of your code is easy to understand and maintain—without interrupting your workflow.",
      imagePath: "/images/9.webp",
    },
  ];

  const projectShowcases = [
    {
      name: "Passkey Service",
      description: "Authentication service using modern passkey technology",
      tags: ["Auth", "Security"],
    },
    {
      name: "Origin Server",
      description: "Core backend infrastructure for application",
      tags: ["Backend", "Infrastructure"],
    },
    {
      name: "Lambda Worker",
      description: "Serverless compute for background tasks",
      tags: ["Serverless", "Compute"],
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-white">
      <Navbar />  {/* Use Navbar Component Here */}

      {/* Hero Section */}
      <main className="relative z-10 flex flex-1 items-center justify-center bg-white py-24 md:py-32">
        {/* Background Images for Hero Section */}
        <img
          src="/images/Hero Logos Left.webp"
          alt="Hero Logos Left"
          className="absolute left-0 top-1/4 hidden w-[25vw] max-w-[500px] md:block"
          loading="eager"
        />
        <img
          src="/images/Hero Logos Right.webp"
          alt="Hero Logos Right"
          className="absolute right-0 top-1/4 hidden w-[25vw] max-w-[500px] md:block"
          loading="eager"
        />

        <section className="container relative mx-auto max-w-3xl px-4 pb-20 pt-12 text-center md:max-w-4xl">
          <div className="flex flex-col items-center px-2 text-center md:px-4">
            <h1 className="mx-auto mb-6 max-w-xl text-4xl font-bold leading-tight md:text-5xl">
              Navigate codebases effortlessly with{" "}
              <span className="text-violet-600">complete</span> codebase
              understanding.
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
              RepoMind gives your team full application visibility at every
              layer, enabling them to{" "}
              <span className="text-violet-600">explore</span>,{" "}
              <span className="text-violet-600">refactor</span>, and{" "}
              <span className="text-violet-600">ship</span> quality code
              faster—even with legacy or existing applications.
            </p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <Link href="/sign-up">
                <Button
                  size="lg"
                  className="bg-violet-600 px-8 py-3 text-base hover:bg-violet-700 md:text-lg"
                >
                  Get Started
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-violet-600 px-8 py-3 text-base text-violet-600 hover:bg-violet-50 md:text-lg"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Add more space */}
      <div className="py-16"></div>

      {/* Scrolling Technology Icons (Middle Area Only) */}
      <div className="relative flex justify-center overflow-hidden bg-white py-4">
        <div className="relative w-full max-w-4xl overflow-hidden">
          <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
            <Image src="/icons/icons8-ai.svg" alt="AI" width={48} height={48} />
            <Image
              src="/icons/icons8-aws.svg"
              alt="AWS"
              width={48}
              height={48}
            />
            <Image
              src="/icons/icons8-firebase.svg"
              alt="Firebase"
              width={48}
              height={48}
            />
            <Image
              src="/icons/icons8-github-logo.svg"
              alt="GitHub"
              width={48}
              height={48}
            />
            <Image
              src="/icons/icons8-google-cloud.svg"
              alt="Google Cloud"
              width={48}
              height={48}
            />
            <Image
              src="/icons/icons8-nextjs.svg"
              alt="Next.js"
              width={48}
              height={48}
            />
            <Image
              src="/icons/icons8-python.svg"
              alt="Python"
              width={48}
              height={48}
            />
            <Image
              src="/icons/icons8-redis.svg"
              alt="Redis"
              width={48}
              height={48}
            />
            <Image
              src="/icons/icons8-stripe.svg"
              alt="Stripe"
              width={48}
              height={48}
            />
            <Image
              src="/icons/icons8-typescript.svg"
              alt="TypeScript"
              width={48}
              height={48}
            />
          </div>
        </div>
      </div>

      <h2 className="my-12 text-center text-3xl font-bold md:text-4xl">
        Having code visibility{" "}
        <span className="text-violet-600">simplifies</span>
        <br />
        the toughest dev challenges.
      </h2>

      {/* Feature Cards Section */}
      <section className="container mx-auto bg-white px-6 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="mb-4 text-gray-600">{feature.description}</p>
              <Link
                href={feature.link ?? "#"}
                className="text-violet-600 hover:underline"
              >
                Learn more &gt;
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-[1280px] bg-white px-8 py-32 text-center">
  <div className="mb-16">
    <span className="inline-block rounded-full bg-violet-100 px-7 py-3 text-base font-medium text-violet-700">
      CODEBASE UNDERSTANDING
    </span>
  </div>

  <h2 className="mb-10 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
    Understand <span className="text-violet-600">every</span> service,
    <br />
    dependency, database, api, repo,
    <br /> function, and <span className="text-violet-600">their impact</span>.
  </h2>

  <p className="mx-auto mb-16 max-w-3xl text-xl leading-relaxed text-gray-600">
    Be confident with your code decisions. Code maps give devs confidence 
    by minimizing lack of insight into dependencies and maintaining 
    control as your code base grows.
  </p>

  <div className="mb-16 flex flex-col justify-center gap-8 md:flex-row">
    <div className="flex items-center gap-4">
      <span className="text-2xl text-violet-600">✔️</span>
      <span className="text-base text-gray-700">
        Deliver secure software faster
      </span>
    </div>
    <div className="flex items-center gap-4">
      <span className="text-2xl text-violet-600">✔️</span>
      <span className="text-base text-gray-700">
        Understand application complexities
      </span>
    </div>
    <div className="flex items-center gap-4">
      <span className="text-2xl text-violet-600">✔️</span>
      <span className="text-base text-gray-700">
        Uncover unknown unknowns in mins
      </span>
    </div>
  </div>

  <Link href="#learn-more">
    <Button
      size="lg"
      variant="outline"
      className="rounded-full border-dashed border-violet-600 px-8 py-3 text-base text-violet-600 hover:bg-violet-50"
    >
      Learn more &gt;
    </Button>
  </Link>
</section>

      {/* Image Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex justify-center">
          <Image
            src="/images/fun_map.webp"
            alt="Descriptive Alt Text"
            width={1200}   // Increased width
            height={500}   // Increased height
            className="rounded-2xl shadow-lg"  // More rounded corners
            // className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="container relative mx-auto bg-white px-10 py-28">
  <div className="grid gap-12 md:grid-cols-3 mb-16">
    {featureCards.map((feature, index) => (
      <div
        key={index}
        className={`${feature.color} border border-opacity-10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-md hover:border-opacity-20 relative flex h-[580px] transform flex-col justify-between overflow-hidden rounded-3xl p-8 text-white shadow-2xl transition-transform hover:scale-105`}
      >
        <div>
          <h3 className="mb-6 text-3xl font-bold">{feature.title}</h3>
          <p className="mb-10 text-xl leading-relaxed text-white/90">{feature.description}</p>
        </div>
        <div className="absolute bottom-0 right-0 w-80 h-60 bg-white/10 rounded-tl-2xl">
          {feature.imagePath && (
            <div className="w-full h-full flex items-center justify-center p-6">
              <img
                src={feature.imagePath}
                alt={feature.title}
                className="max-w-full max-h-full object-contain transform scale-125"
              />
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Add more space */}
      <div className="py-16"></div>

      {/* New Divider Section with Black Curved Shape */}
      <div className="relative w-full">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 -mb-1 h-20 w-full"
        >
          <path
            d="M0,0 C576,86.4 960,86.4 1440,0 L1440,120 L0,120 Z"
            fill="#000000"
          ></path>
        </svg>
      </div>

      <div className="bg-black text-white">
        {" "}
        {/* Main container with black background */}
        {/* Black Background Section with Heading and Subheading */}
        <section className="relative bg-black py-36 text-white">
  <div className="container mx-auto px-12 text-center">
    {/* Badge */}
    <div className="mb-10 inline-block rounded-full bg-gray-800 px-8 py-3 text-base text-white">
      REPOMIND AI
    </div>

    {/* Main Heading */}
    <h2 className="mb-4 text-5xl font-bold md:text-6xl">
      Introducing <span className="text-[#A78BFA]">RepoMind AI</span>:
    </h2>
    <h3 className="mb-10 text-4xl font-bold md:text-5xl">
      AI Powered Code Understanding
    </h3>

    {/* Subheading */}
    <p className="mx-auto mb-16 max-w-4xl text-xl text-gray-400">
      AI-powered answers for even the largest and most dynamic codebase questions. 
      Ask your codebase questions and it will answer you back.
    </p>

    {/* Feature Tags */}
    <div className="mb-16 flex flex-wrap justify-center gap-6">
      {[
        "Resolve questions faster",
        "Maximize team performance",
        "Effortlessly comprehend legacy codebases",
      ].map((text, idx) => (
        <div
          key={idx}
          className="flex items-center gap-3 rounded-full bg-gray-800 px-6 py-3 text-base text-white"
        >
          <span>▾</span> {text}
        </div>
      ))}
    </div>

    {/* Learn More Button */}
    <button className="rounded-full border border-dashed border-violet-500 px-8 py-3 text-base text-white transition-all hover:bg-violet-500 hover:text-black">
      Learn more &gt;
    </button>
  </div>
{/* Image Section */}
<section className="container mx-auto px-6 py-16">
  <div className="flex justify-center">
    <Image
      src="/images/image.png"
      alt="Descriptive Alt Text"
      width={1200}   // Increased width
      height={500}   // Increased height
      className="rounded-2xl shadow-lg"  // More rounded corners
      // className="rounded-lg shadow-lg"
    />
  </div>
</section>


</section>
<section className="container relative mx-auto bg-black px-10 py-28">
  <div className="mb-16 grid gap-12 md:grid-cols-3">
    {codebaseFeatures.map((feature, index) => (
      <div
        key={index}
        className={`${feature.color} border border-opacity-10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-md hover:border-opacity-20 relative flex ${
          index === 3 ? "md:col-span-3 h-[320px]" : "h-[580px]"
        } transform flex-col justify-between overflow-hidden rounded-3xl p-8 text-white shadow-2xl transition-transform hover:scale-105`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className={`${index === 3 ? "w-full md:w-1/2" : ""}`}>
            <h3 className="mb-4 text-3xl font-bold">{feature.title}</h3>
            <p className="mb-6 text-xl leading-relaxed text-white/90">{feature.description}</p>
          </div>
          {feature.imagePath && (
            <div
              className={`${
                index === 3 ? "w-full md:w-1/2" : "absolute bottom-0 right-0 w-80 h-60"
              } bg-white/10 rounded-tl-2xl p-6 flex items-center justify-center`}
            >
              <img
                src={feature.imagePath}
                alt={feature.title}
                className={`max-w-full max-h-full object-contain ${
                  index === 3 ? "scale-100" : "transform scale-125"
                }`}
              />
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</section>

        {/* Project Showcase Section */}
        {/* <section className="container mx-auto bg-black px-6 py-16">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Explore Our Project Ecosystem
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {projectShowcases.map((project, index) => (
              <div
                key={index}
                className="transform rounded-xl bg-gray-900 p-6 shadow-md transition-all hover:scale-105 hover:shadow-xl"
              >
                <h3 className="mb-4 text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mb-4 text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-gray-800 px-2 py-1 text-xs text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section> */}
        {/* Call to Action Section */}
        <section className="container mx-auto bg-black px-6 py-16 text-center">
        <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
    Start your <span className="text-violet-400">code visibility</span> journey with <br className="hidden md:block" />
    <span className="text-white">Repo Mind today.</span>
  </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-400">
            Unlock deeper insights, improve collaboration, and streamline your
            development process with our AI-powered code understanding tools.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="#">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-dashed border-violet-500 text-sm text-black transition-all hover:bg-violet-500 md:text-base"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </section>
      </div>

      {/* How It Works Section */}
      <div className="bg-white text-black">
        {" "}
        {/* Main container with black background */}
        <section className="container mx-auto bg-white px-6 py-16 text-center">
          <h2 className="mb-8 text-3xl font-bold text-violet-700 md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-gray-600">
            Understand the workflow of our AI-powered code tools. From code
            mapping to generating documentation and extracting insights, we
            streamline your development process effortlessly.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Analyze Code",
                description:
                  "Upload your repositories and let AI map the codebase, identify dependencies, and suggest improvements.",
              },
              {
                title: "Generate Insights",
                description:
                  "Get analytics on code quality, bottlenecks, and areas that need refactoring.",
              },
              {
                title: "Documentation & QA",
                description:
                  "Automatically generate documentation and extract key points from meetings.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="transform rounded-2xl bg-violet-100 p-6 text-left shadow-md transition-transform hover:scale-105"
              >
                <h3 className="mb-2 text-xl font-bold text-violet-700">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* <section className="bg-white py-12">
  <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-6 md:flex-row">
    <div>
      <h2 className="text-4xl font-bold text-black md:text-5xl">
        Repo Mind sets new standards in  <span className="text-violet-600">code understanding.</span>
      </h2>
    </div>
    <div className="max-w-xl text-gray-600">
      <p>
      Repo Mind is on a mission to help developers effortlessly understand, build, and optimize codebases without any guesswork. 
        By instantly mapping and automating your project’s services, directories, file dependencies, and code changes, Repo Mind empowers developers 
        to ship stable code more frequently and focus on features that deliver the most impact.
      </p>
    </div>
  </div>
</section> */}

<section className="bg-black text-white py-16">
  <div className="container mx-auto px-6 grid gap-12 md:grid-cols-5">
    {/* Brand and Mission */}
    <div className="md:col-span-2">
      <h2 className="text-3xl font-bold mb-4">
        Repo Mind <span className="text-violet-500">simplifies</span> code understanding.
      </h2>
      <p className="text-gray-400">
      Repo Mind is on a mission to help developers effortlessly understand, build, and optimize codebases without any guesswork. 
        By instantly mapping and automating your project’s services, directories, file dependencies, and code changes, Repo Mind empowers developers 
        to ship stable code more frequently and focus on features that deliver the most impact.
      </p>
    </div>

    {/* Footer Links */}
    <div>
      <h3 className="font-semibold mb-4">Product</h3>
      <ul className="text-gray-400 space-y-2">
        <li><a href="#">Code Mapping</a></li>
        <li><a href="#">Code Search</a></li>
        <li><a href="#">AI-Powered Insights</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-4">Resources</h3>
      <ul className="text-gray-400 space-y-2">
        <li><a href="#">Documentation</a></li>
        <li><a href="#">API Reference</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Support</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-4">Company</h3>
      <ul className="text-gray-400 space-y-2">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>

  {/* Social Icons */}
  <div className="container mx-auto px-6 mt-12 flex justify-center space-x-6">
    <a href="#" className="text-gray-400 hover:text-violet-500">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="#" className="text-gray-400 hover:text-violet-500">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="#" className="text-gray-400 hover:text-violet-500">
      <i className="fab fa-github"></i>
    </a>
    <a href="#" className="text-gray-400 hover:text-violet-500">
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>

  {/* Copyright */}
  <div className="container mx-auto px-6 mt-8 text-center text-gray-500">
    © {new Date().getFullYear()} Repo Mind.
  </div>
</section>



    </div>
  );
}