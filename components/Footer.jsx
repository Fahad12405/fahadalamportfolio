import { useEffect, useState } from "react";
import Link from "next/link";
import { FiGitBranch } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import LinkedIn from "../public/icons/linkedin@2x.png";
import GitHub from "../public/icons/github@2x.png";
import Upwork from "../public/icons/upwork.png";
import Instagram from "../public/icons/instagram@2x.png";
import Gmail from "../public/icons/google@2x.png";
import Image from "next/image";
import Star from "@/public/Star.svg";

const Footer = () => {
  const [metaData, setMetaData] = useState({ star: 0, forks: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/Fahad12405/Fahadalamportfolio"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub data");
        }
        const data = await response.json();
        setMetaData({
          star: data.stargazers_count,
          forks: data.forks_count,
        });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="flex select-none text-sm py-16 mt-16 flex-col h-max items-center mx-auto justify-center">
      <div className="flex justify-center space-x-4 md:space-x-6 dark:text-white/70 text-gray-500 text-[0.6rem] sm:text-xs md:text-sm lg:text-md mt-2">
        <Link
          href="https://www.linkedin.com/in/fahad-alam-3b683a2a2/"
          target="blank"
          className="dark:hover:text-purple-400 hover:text-purple-600 font-semibold"
        >
          <Image src={LinkedIn} alt="linkedin" width="30" />
        </Link>
        <Link
          href="https://github.com/Fahad12405/"
          target="blank"
          className="dark:hover:text-purple-400 hover:text-purple-600 font-semibold"
        >
          <Image src={GitHub} alt="github" width="30" />
        </Link>
        <Link
          href="https://www.upwork.com/freelancers/~01fc512d7283d66d8d"
          target="blank"
          className="dark:hover:text-purple-400 hover:text-purple-600 font-semibold"
        >
          <Image src={Upwork} alt="upwork" width="30" />
        </Link>
        <a
          href="https://www.instagram.com/fahadalam12405/"
          target="blank"
          className="dark:hover:text-purple-400 hover:text-purple-600 font-semibold"
        >
          <Image src={Instagram} alt="instagram" width="30" />
        </a>
        <Link
          href="mailto:fahadalam12405@gmail.com"
          target="blank"
          rel="noreferrer"
          className="dark:hover:text-purple-400 hover:text-purple-600 font-semibold"
        >
          <Image src={Gmail} alt="gmail" width="30" />
        </Link>
      </div>
      <a
        href="https://github.com/Fahad12405/Fahadalamportfolio"
        target="blank"
        rel="noreferrer"
        className="flex flex-col text-center group hover:text-purple-800 w-max hover:font-black items-center text-gray-600 text-[0.6rem] sm:text-xs md:text-sm lg:text-md mt-8 md:mt-12 font-syne"
      >
        <div
          onMouseOut={handleMouseOut}
          onMouseOver={handleMouseOver}
          className="relative transition-all ease-in-out duration-1000"
        >
          <p
            className={`${
              isHovering && "scale-150 blur-[6px]"
            } group font-bold animate-text duration-700 transition-all linear  group-hover:bg-white lg:text-gray-700 lg:dark:text-white/40 lg:group-hover:text-transparent bg-gradient-to-r mb-2 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-sm sm:text-base md:text-lg`}
          >
            Fahad Alam
          </p>
          {isHovering && (
            <p
              className={`opacity-0 bg-purple-100 px-1 md:px-2 py-1 rounded-2xl bg-opacity-30 backdrop-blur-xl hover:opacity-100 transition-all duration-1000 linear absolute top-[35%] left-[50%] -translate-x-[50%]  -translate-y-[50%] w-max text-gray-800 font-bold text-base z-10 flex text-center`}
            >
              <span>Amazing ?</span>
              <span className="px-1">
                <Image src={Star} alt="star" className="h-5 w-5" />
              </span>
              <span>Github Repo</span>
            </p>
          )}
        </div>
        <div className="flex space-x-4">
          <div className="flex dark:group-hover:text-purple-400 group-hover:text-purple-600 space-x-1 items-center">
            <FaRegStar className="h-4 w-4 group-hover:stroke-[2.2px] dark:group-hover:fill-purple-400 group-hover:fill-purple-800" />
            <p className="font-semibold text-sm group-hover:font-extrabold">
              {metaData.star}
            </p>
          </div>
          <div className="flex dark:group-hover:text-purple-400 group-hover:text-purple-600 space-x-1 items-center">
            <FiGitBranch className="h-4 w-4 group-hover:stroke-[2.2px] dark:group-hover:stroke-purple-400 group-hover:stroke-purple-800" />
            <p className="font-semibold text-sm group-hover:font-extrabold">
              {metaData.forks}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Footer;
