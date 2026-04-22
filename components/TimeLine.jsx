import React from "react";

const TimeLine = () => {
  const data = [
   
    {
      id: 4,
      title: "Co-founder & Software Engineer",
      duration: "September 2025 - Present",
      org: "Codexilo",
      skills: [
        "Software Development",
        "IT Solutions",
        "Business Strategy",
        "Team Leadership",
        "Full-Stack Architecture",
        "Project Management",
      ],
      class:
        "bg-blue-100 text-blue-800 text-sm font-medium me-2 px-3 py-1 rounded dark:bg-blue-900 dark:text-blue-300",
    },
    {
      id: 2,
      title: "Software Developer",
      duration: "September 2025 - Present",
      org: "Sysartx Pvt Ltd",
      skills: [
        "React.js",
        "Next.js",
        "Python",
        "FastAPI",
        "AI Automation",
        "OpenAI API",
        "LangChain",
        "Firebase",
        "TypeScript",
        "PostgreSQL",
      ],
      class:
        "bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-3 py-1 rounded dark:bg-yellow-900 dark:text-yellow-300",
    },
    {
      id: 5,
      title: "Freelance Software Developer",
      duration: "January 2024 - Present",
      org: "Remote / Startups",
      skills: [
        "Python Automation",
        "Custom AI Agents",
        "Web Scraping",
        "Full-Stack Web Apps",
        "API Integration",
        "Selenium/Playwright",
        "Cloud Deployment",
      ],
      class:
        "bg-green-100 text-green-800 text-sm font-medium me-2 px-3 py-1 rounded dark:bg-green-900 dark:text-green-300",
    },
    {
      id: 0,
      title: "Frontend Developer",
      duration: "April 2024 - August 2025",
      org: "Vehware Software",
      skills: [
        "JavaScript",
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "SCSS/SASS",
        "Framer Motion",
        "Redux Toolkit",
        "Material UI",
        "Responsive Design",
      ],
      class:
        "bg-red-100 text-red-800 text-sm font-medium me-2 px-3 py-1 rounded dark:bg-red-900 dark:text-red-300",
    },
    {
      id: 3,
      title: "Diploma in MERN Stack Development",
      duration: "March 2023 - January 2024",
      org: "Saylani Mass IT Training (SMIT)",
      skills: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "HTML5/CSS3",
        "JavaScript ES6+",
        "Firebase Auth",
        "REST APIs",
      ],
      class:
        "bg-pink-100 text-pink-800 text-sm font-medium me-2 px-3 py-1 rounded dark:bg-pink-900 dark:text-pink-300",
    },
  ];

  return (
    <div className="p-6 md:p-10 lg:p-16">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white">
        My Experience Timeline
      </h2>
      <ol className="relative border-s border-gray-300 dark:border-gray-700">
        {data.map((item) => (
          <li className="mb-12 ms-6" key={item.id}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              {item.title}
              {item.duration.includes("Present") && (
                <span className="bg-blue-600 text-white text-sm font-medium px-3 py-0.5 rounded ms-3">
                  Latest
                </span>
              )}
            </h3>
            <time className="block mb-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              {item.duration}
            </time>
            <p className="mb-4 text-base text-gray-600 dark:text-gray-300 font-medium">
              {item.org}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, idx) => (
                <span key={idx} className={item.class}>
                  {skill}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TimeLine;
