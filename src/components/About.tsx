import React from 'react';
import { Code, Coffee, BookOpen, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid items-center">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              I'm a passionate Front-End Developer and AI enthusiast currently pursuing my BTech in Computer Science 
              at APJ Abdul Kalam Technological University. I specialize in crafting responsive, user-centric web interfaces
              using React and modern JavaScript. With a keen eye for design and usability, I enjoy transforming concepts 
              into clean, interactive digital experiences. My interests also extend to data visualization and exploring 
              the possibilities of machine learning in enhancing user interfaces.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Beyond coding, I'm an active participant in hackathons, and tech community 
              enthusiast. I believe in continuous learning and staying updated with emerging technologies. 
              My goal is to leverage technology to create meaningful impact and contribute to innovative solutions 
              that shape the future of digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
