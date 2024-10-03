import { useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

import { BsArrowUpRight } from "react-icons/bs";

import Avatar_Black from "@/public/Avatar-black.svg";
import Avatar_White from "@/public/Avatar-white.svg";
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
        <title>Fahad ✦ developer</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
          <div className="flex flex-row justify-start items-center mt-20">
            <Image
              src={currentTheme === "dark" ? Avatar_White : Avatar_Black}
              alt="Fahad Alam"
              width="80"
              height="80"
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
                {/* Add Resume Button Here */}
                <a
                  href="/fahadalamresume.pdf" // Replace with your actual resume file path
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

          <div className="mt-2 text-base md:text-xl lg:text-xl xl:text-xl 2xl:text-xl p-2 border border-gray-200 rounded-lg shadow-md">
            <p className="sm:leading-6 md:leading-6 lg:leading-8 mb-4">
              A motivated web and app development student at SMIT with a strong foundation in front-end development. Experienced in crafting stunning and responsive designs using HTML, CSS, and JavaScript. Seeking an internship opportunity to gain practical experience and apply my skills in real-world projects.
            </p>

            <h2 className="font-semibold text-lg md:text-xl mb-2">Technical Skills:</h2>

            <h3 className="font-medium text-lg md:text-xl mb-1">Front-End Development:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Core Technologies: HTML/HTML5, CSS/CSS3, JavaScript (including DOM manipulation and ES6)</li>
              <li>Frameworks & Libraries: React.js, Next.js, Tailwind CSS, Twitter Bootstrap, Material UI</li>
              <li>React Ecosystem: Proficient in using React Router, Redux Toolkit, and other popular libraries</li>
            </ul>

            <h3 className="font-medium text-lg md:text-xl mb-1">Version Control:</h3>
            <p className="mb-4">
              Experienced in using Git, GitHub, Bitbucket, and GitLab for efficient collaboration and code management.
            </p>

            <h3 className="font-medium text-lg md:text-xl mb-1">Additional Tools:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Proficient in using Postman for API testing and development</li>
              <li>Familiar with package managers such as NPM and YARN</li>
            </ul>
          </div>
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
