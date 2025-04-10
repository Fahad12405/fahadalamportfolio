import Image from "next/image";
import Link from "next/link";

import Usptotrademarkrevive from "@/public/work/usptotrademarkrevive.png";
import kamui from "@/public/work/kamui.jpg";
import Glamishbeauty from "@/public/work/glamishbeauty.png";
import Trademarkgov from "@/public/work/trademarkgov.png";
import Globaltradingcars from "@/public/work/globaltradingcars.png";

import CRM from "@/public/work/crm.jpg";

const ProjectCard = () => {
  const data = [


    {
      id: 3,
      image: Glamishbeauty,
      title: "E-commerce",
      description: "An e-commerce website is a digital platform that allows users to browse, compare, and purchase a wide range of products or services online. It typically features an intuitive interface with categories and filters to help customersn",
      link: "https://glamish-beauty.vercel.app/",
      target: "_self",
    },
    {
      id: 1,
      image: Usptotrademarkrevive, // Replace 'trademarkImage' with your actual image import
      title: "Trademark Registration",
      description: "A professional trademark registration website that helps businesses protect their brand identity with fast, affordable, and simplified trademark filing services across the U.S.",
      link: "https://usptotrademarkrevive.com/",
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
      id: 4,
      image: Trademarkgov, // Replace with your actual image import
      title: "Trademark USA",
      description: "A smart trademark monitoring platform that alerts you of similar or conflicting trademark filings, helping you protect your brand identity and take timely action against infringement.",
      link: "https://trademark-five.vercel.app/", // update with actual link if needed
      target: "_blank",
    },
    
    {
      id: 5,
      image: Globaltradingcars, // Replace with your actual image import
      title: "Japan Car Export",
      description: "A Japan-based car export website offering a wide range of high-quality used vehicles. Browse top Japanese brands, view detailed specs, and get hassle-free international shipping at competitive rates.",
      link: "https://globaltradingcars.vercel.app/", // Update link if needed
      target: "_self",
    },
    
    {
      id: 6,
      image: CRM, // Replace with your actual image import
      title: "CRM Dashboard",
      description: "A powerful CRM dashboard that streamlines client interactions, lead management, and sales tracking. Designed with real-time analytics and an intuitive UI to help businesses build strong customer relationships.",
      link: "https://vehwarecrm.vercel.app/", // Update if actual CRM demo link is different
      target: "_blank",
    },
    

  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-16">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center  p-4  w-[280px] mx-auto"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : project.title === "Pokedex"
                    ? alert("Ash Ketchum asked you to open in desktop browser.. 🚀")
                    : "";
              }}
            >
              <div className="w-full h-[180px] overflow-hidden rounded-lg">
                <Image
                  loading="lazy"
                  src={project.image}
                  alt={project.title}
                  width={260}
                  height={180}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110 rounded-lg"
                />
              </div>
            </Link>

            <div className="flex flex-col items-center mt-4">
              <h1 className="font-semibold text-[1.5rem] text-gray-700 dark:text-white text-center">
                {project.title}
              </h1>
              <p className="text-gray-400 font-light text-center text-sm max-w-[90%] mt-2">
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
