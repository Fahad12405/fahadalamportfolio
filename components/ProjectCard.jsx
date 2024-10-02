import Image from "next/image";
import Link from "next/link";

import aizen from "@/public/work/aizen.jpg";
import kamui from "@/public/work/kamui.jpg";
import pokedex from "@/public/work/pokedex.jpg";
import portfolio from "@/public/work/portfolio.jpg";
import cryptohunter from "@/public/work/crypto-hunter.jpg";
import redeye from "@/public/work/red-eye.jpg";
import evo from "@/public/work/evo.jpg";
import notion from "@/public/work/notion.jpg";
import nike from "@/public/work/nike.jpg";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: aizen,
      title: "Tourism Website",
      description: "A tourism website that inspires and guides travelers with destination highlights, attractions, and easy booking options for unforgettable journeys.",
      link: "https://moroccotour.vercel.app/",
      target: "_self",
    },
    {
      id: 2,
      image: kamui,

      title: "RealState",
      description: "A real estate website offering comprehensive property listings, detailed information, and easy search options to help users find their perfect home ",
      link: "https://fahad12405.github.io/Real-State-website/",
      target: "_self",
    },
    {
      id: 3,
      image: pokedex,
      title: "E-commerce",
      description: "An e-commerce website is a digital platform that allows users to browse, compare, and purchase a wide range of products or services online. It typically features an intuitive interface with categories and filters to help customersn",
      link: "https://el-clasico.vercel.app/",
      target: "_self",
    },
    {
      id: 4,
      image: evo,
      title: "Foodpanda Clone",
      description: "A Foodpanda clone is an online food delivery platform that allows users to browse local restaurants, view menus, and place orders for home delivery or pickup. The clone provides a user-friendly interface",
      link: "https://fahad12405.github.io/Foodpanda-Clone/",
      target: "_blank",
    },
    {
      id: 5,
      image: nike,
      title: "Github Finder",
      description: "A GitHub Finder Profile is a web application that allows users to search for GitHub profiles by username, displaying detailed information about repositories, followers, following, and contributions.",
      link: "https://fahad12405.github.io/Git-Finder/",
      target: "_blank",
    },
    {
      id: 6,
      image: notion,
      title: "Certification Portal",
      description: "A certification portal is an online platform where users can browse, enroll in, and manage various professional certification programs. It provides detailed course descriptions, eligibility criteria, and certification pathways across different fields.",
      link: "https://smitcertificate.vercel.app/",
      target: "_blank",
    },
    
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : project.title === "Pokedex"
                  ? alert(
                      "Ash Ketchum asked you to open in desktop browser.. 🚀"
                    )
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-lg drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center text-sm">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
