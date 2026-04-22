import { 
  HiOutlineCodeBracket, 
  HiOutlineCpuChip, 
  HiOutlineServerStack, 
  HiOutlineGlobeAlt 
} from "react-icons/hi2";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Developing high-performance, responsive web applications using React, Next.js, and modern frontend technologies.",
      icon: <HiOutlineCodeBracket className="w-7 h-7 text-blue-500" />,
      border: "border-blue-500/20"
    },
    {
      title: "AI Integration",
      description: "Implementing intelligent features and autonomous agents using OpenAI and LangChain to automate business workflows.",
      icon: <HiOutlineCpuChip className="w-7 h-7 text-purple-500" />,
      border: "border-purple-500/20"
    },
    {
      title: "Backend Solutions",
      description: "Architecting scalable backend systems and secure APIs using Node.js and modern database architectures.",
      icon: <HiOutlineServerStack className="w-7 h-7 text-green-500" />,
      border: "border-green-500/20"
    },
    {
      title: "Digital Strategy",
      description: "Helping startups and companies scale their digital presence with cutting-edge technology and strategic engineering.",
      icon: <HiOutlineGlobeAlt className="w-7 h-7 text-orange-500" />,
      border: "border-orange-500/20"
    }
  ];

  return (
    <div className="mt-20 mx-auto">
      <div className="flex flex-col items-center mb-12 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-100 mb-3">
          Services
        </h2>
        <div className="w-12 h-1 bg-blue-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`p-6 rounded-2xl border ${service.border} bg-white/30 dark:bg-zinc-900/20 backdrop-blur-sm transition-colors duration-300 h-full`}
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-xl bg-zinc-100/50 dark:bg-zinc-800/50">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 text-zinc-800 dark:text-zinc-100">
                  {service.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
