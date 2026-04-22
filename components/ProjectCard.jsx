import Image from "next/image";
import Link from "next/link";

import Uspto from "@/public/fahad alam portfolio/uspto.png";
import kamui from "@/public/work/kamui.jpg";
import Axavive from "@/public/fahad alam portfolio/axavive.png";
import Dealsbuilder from "@/public/fahad alam portfolio/dealsbuilder.png";
import Picasso from "@/public/fahad alam portfolio/picasso.png";
import Glamishbeauty from "@/public/work/glamishbeauty.png";
import Trademarkgov from "@/public/work/trademarkgov.jpg";
import Jamesriston from "@/public/fahad alam portfolio/jamesriston.png";
import Board from "@/public/fahad alam portfolio/boardmangement.png";
import Pothos from "@/public/fahad alam portfolio/pothos.png";
import Hustlemob from "@/public/fahad alam portfolio/hustlemob.png";
import Buildora from "@/public/fahad alam portfolio/buildora2.png";
import Tellztech from "@/public/fahad alam portfolio/tellztech.png";
import Octolade from "@/public/fahad alam portfolio/octolade.png";
import Redcupmedia from "@/public/fahad alam portfolio/redcupmedia.png";
import Globaltradingjapan from "@/public/fahad alam portfolio/globaltradingjapan.png";
const ProjectCard = ({ limit }) => {
  const data = [

 {
      id: 7,
      image: Pothos,
      title: "Pothos Industry",
      description: "Modern industrial solutions and digital services platform for businesses.",
      link: "https://pothos-industry.vercel.app/",
      target: "_blank",
    },
   
    {
      id: 1,
      image: Uspto,
      title: "Trademark Registration",
      description: "Professional services helping businesses protect their brand identity with simplified filing.",
      link: "https://usptotrademarkrevive.vercel.app/",
      target: "_self",
    },
 {
      id: 12,
      image: Axavive,
      title: "Axavive",
      description: "Digital agency specializing in creative design and technology growth.",
      link: "https://axavive.vercel.app/",
      target: "_blank",
    },

    {
      id: 10,
      image: Hustlemob  ,
      title: "HustleMob Lifestyle",
      description: "Modern lifestyle brand and clothing platform for the urban community.",
      link: "https://hustlemob-lifestyle.vercel.app/",
      target: "_blank",
    },

 {
      id: 5,
      image: Globaltradingjapan,
      title: "Japan Car Export ",
      description: "A wide range of high-quality Japanese used vehicles with international shipping.",
      link: "https://www.globaltradingjapan.com/",
      target: "_self",
    },
{
      id: 14,
      image: Dealsbuilder,
      title: "Deals Builder",
      description: "Smart e-commerce platform offering the best deals and shopping experience.",
      link: "https://dealsbuilder.com/",
      target: "_blank",
    },
    {
      id: 9,
      image: Jamesriston,
      title: "James Riston",
      description: "Professional portfolio and consulting services for creative solutions.",
      link: "https://jamesriston.com/",
      target: "_blank",
    },

 {
      id: 15,
      image: Octolade,
      title: "Octolade",
      description: "Global consulting and digital solutions for enterprise-level projects.",
      link: "https://octolade.com/",
      target: "_blank",
    },

    {
      id: 16,
      image: Redcupmedia,
      title: "Red Cup Media",
      description: "Full-service creative media agency specializing in digital marketing.",
      link: "https://www.redcupmedia.sg/",
      target: "_blank",
    },
    {
      id: 2,
      image: kamui,
      title: "RealState",
      description: "A real estate website offering property listings and easy search options for home buyers.",
      link: "https://fahad12405.github.io/Real-State-website/",
      target: "_self",
    },

    {
      id: 4,
      image: Trademarkgov,
      title: "Trademark USA",
      description: "Smart trademark monitoring platform to protect your brand identity and track filings.",
      link: "https://trademark-five.vercel.app/",
      target: "_blank",
    },
    
   
    {
      id: 6,
      image: Board,
      title: "Board - Sales Management System",
      description: "Powerful dashboard for client interactions, lead management, and real-time analytics.",
      link: "https://sysartx-elliot-frontend.vercel.app/",
      target: "_blank",
    },
   
    {
      id: 8,
      image: Tellztech,
      title: "Tellz Tech",
      description: "Innovative technology services and digital solutions provider.",
      link: "https://tellz-tech.vercel.app/",
      target: "_blank",
    },
    
    
    {
      id: 11,
      image: Picasso,
      title: "Picasso Paint",
      description: "Premium interior design and professional painting services for homes.",
      link: "https://picassopaint.vercel.app/",
      target: "_blank",
    },
   
    {
      id: 13,
      image: Buildora,
      title: "Buildora Real Estate",
      description: "Comprehensive real estate platform for property search and management.",
      link: "https://buildora-real-estate.vercel.app/",
      target: "_blank",
    },
    
   
    
     {
      id: 3,
      image: Glamishbeauty,
      title: "E-commerce",
      description: "A comprehensive digital platform for browsing and purchasing a wide range of products.",
      link: "https://glamish-beauty.vercel.app/",
      target: "_self",
    },
  ];

  const displayData = limit ? data.slice(0, limit) : data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
      {displayData.map((project) => {
        return (
          <div
            className="group relative flex flex-col bg-white/40 dark:bg-white/[0.02] backdrop-blur-md border border-white/20 dark:border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:bg-white/50 dark:hover:bg-white/[0.05] h-full"
            key={project.id}
          >
            {/* Image Wrapper */}
            <div className="relative h-[200px] w-full overflow-hidden">
              <Link
                href={project.link}
                target={project.target}
                className="block w-full h-full relative"
              >
                <Image
                  loading="lazy"
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </Link>
            </div>
 
            {/* Content Wrapper */}
            <div className="flex flex-col p-6 flex-grow">
              <h1 className="font-bold text-xl text-zinc-800 dark:text-zinc-100 mb-2">
                {project.title}
              </h1>
              
              <p className="text-zinc-500 dark:text-zinc-400 font-normal text-sm leading-relaxed line-clamp-3 mb-6">
                {project.description}
              </p>

              <div className="mt-auto">
                <Link 
                  href={project.link} 
                  target={project.target}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 group/link"
                >
                  View Live Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/link:translate-x-1">
                    <path d="M5 12h14m-7-7 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

};

export default ProjectCard;
