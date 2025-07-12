import React from 'react';

export default function Skills() {
  const skills = [
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
   /*  { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" }, */
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Express.js", icon: "https://cdn.simpleicons.org/express/000000" }, 
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
    
  ];

  const repeatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="relative py-20 px-4 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Skills & Technologies
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Technologies I use to build and innovate
        </p>
      </div>

      {/* Horizontal scroll animation */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll gap-6 px-6">
          {repeatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex flex-col items-center justify-center min-w-[100px] h-[100px] rounded-xl 
                         bg-gray-100 dark:bg-white/5 
                         border border-gray-200 dark:border-white/10 
                         p-3 hover:bg-gray-200 dark:hover:bg-white/10 
                         transition-all duration-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 object-contain mb-2 hover:scale-110 transition-transform duration-300"
              />
              <span className="text-sm text-gray-800 dark:text-gray-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>

      {/* Background blur effects */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
}
