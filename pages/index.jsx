import { useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import ProjectCard from "@/components/ProjectCard";

import { BsArrowUpRight } from "react-icons/bs";

import Hero from "@/public/hero.jpg";

import BooBlack from "@/public/boo-black.svg";
import BooWhite from "@/public/boo-white.svg";
import Link from "next/link";

export default function Home() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c Designed and Developed by Fahad Alam %c %c🚀 %c\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
      "color: #fff; background: #242424; padding:5px 0 5px 5px;",
      "background: #242424; padding:5px 0",
      "background: #242424; padding:5px 5px 5px 0",
    ]);
    console.log.apply(console, [
      "%c Thanks for stopping by, I’m currently looking to a new team of creative designers and developers.\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  return (
    <>
    <Head>
  <title>Fahad Alam | Software Developer & AI Automation Expert</title>
  <meta
    name="description"
    content="Portfolio of Fahad Alam, a Software Developer and AI Automation Expert skilled in Python, React, Next.js, and Backend technologies. specializing in building intelligent automated systems."
  />
  <meta
    name="keywords"
    content="Fahad Alam, Software Developer, AI Automation, Python Developer, Full Stack Developer, React Developer, Next.js, AI Agents"
  />
  <meta name="author" content="Fahad Alam" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Open Graph (OG) Tags */}
  <meta property="og:title" content="Fahad Alam | Software Developer & AI Automation Expert" />
  <meta
    property="og:description"
    content="Explore the projects and skills of Fahad Alam, a Software Developer specializing in AI Automation and Full-stack development."
  />
  <meta property="og:image" content="/hero.jpg" />
  <meta property="og:url" content="https://fahadalam.vercel.app" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Fahad Alam | Software Developer & AI Automation Expert" />
  <meta
    name="twitter:description"
    content="Check out Fahad Alam's portfolio showcasing AI automation, Python, and Full-stack web development projects."
  />
  <meta name="twitter:image" content="/hero.jpg" />

  {/* Favicon */}
  <link rel="icon" href="/hero.jpg" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://fahadalam.vercel.app" />
</Head>

<div className="lg:min-h-screen px-6 sm:px-12 md:px-20 lg:px-32 mx-auto max-w-[80rem]">
  <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
    <div className="flex flex-col sm:flex-row justify-center items-center mt-20 gap-6">
      <Image
        src={currentTheme === "dark" ? Hero : Hero}
        alt="Fahad Alam"
        width="100"
        height="100"
        className="rounded-full border-2 border-gray-300 shadow-md" 
      />

            <div className="flex flex-col ml-4">
              <h2 className="flex sm:text-2xl md:text-2xl lg:text-2xl items-center">
                <span className="font-semibold">Fahad Alam</span>
                <span className="ml-2">
                  <Image
                    src={currentTheme === "dark" ? BooWhite : BooBlack}
                    alt="boo"
                    width="25"
                    height="25"
                  />
                </span>
                <a
                  href="/Fahadalamresume.pdf" 
                  download
                  className="ml-4 px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition-all duration-300 text-sm sm:text-base"
                >
                  Resume
                </a>
              </h2>
              <h3>
                <Link
                  href={"https://www.linkedin.com/in/fahad-alam-3b683a2a2/"}
                  target="_blank"
                  className="text-[#717171bb] flex items-center"
                >
                  <p>@Fahad</p>
                  <BsArrowUpRight className="stroke-1 h-3" />
                </Link>
              </h3>
            </div>
          </div>

          <div className="mt-6 text-base md:text-xl lg:text-xl xl:text-xl 2xl:text-xl p-6 md:p-8 border border-gray-200 rounded-xl shadow-md">
            <p className="sm:leading-6 md:leading-6 lg:leading-8 mb-4">
              I am a Software Developer and AI Expert with a strong foundation in both frontend and backend development. I specialize in building intelligent, responsive applications using React, Next.js, and advanced AI technologies to solve complex problems.
            </p>

            <h2 className="font-semibold text-lg md:text-xl mb-2">Technical Skills:</h2>

            <h3 className="font-medium text-lg md:text-xl mb-1">Development:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Core Technologies: React.js, Next.js, Node.js, JavaScript, TypeScript</li>
              <li>Styling: Tailwind CSS, Material UI, Framer Motion</li>
              <li>AI & Automation: LangChain, OpenAI API, Intelligent Agents, Workflow Automation</li>
            </ul>

            <h3 className="font-medium text-lg md:text-xl mb-1">Version Control & Tools:</h3>
            <p className="mb-4">
              Experienced in using Git, GitHub, and modern dev tools like Postman for efficient collaboration and software management.
            </p>
          </div>
        </div>
        <div className="mt-28 mx-auto">
          <Services />
        </div>

        <div className="mt-28 mx-auto">
          <div className="flex justify-between items-center mb-10 px-2">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-100">
              Featured Projects
            </h2>
            <Link 
              href="/work" 
              className="group flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline underline-offset-4 transition-all"
            >
              View All 
              <BsArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
          <ProjectCard limit={6} />
        </div>

        <div className="mt-28 mx-auto">
          <Experience />
        </div>
        <div className="mt-28 mx-auto ">
          <Contact />
        </div>
      </div>
    </>
  );
}
