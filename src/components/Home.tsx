import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Home: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Front-End Developer',
    'AI Enthusiast',
    'UI/UX Designer',
    'Data Science Enthusiast',
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 100 : 200;
    const text = texts[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(text.substring(0, currentText.length + 1));

        if (currentText === text) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setCurrentText(text.substring(0, currentText.length - 1));

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-44 h-44 mx-auto mb-8 rounded-full">
              <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <img
                  src="\src\components\doc\profile.jpg"
                  alt="Profile"
                  className="w-40 h-40 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Adarsh K Sundaresan
          </h1>

          <div className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-8 min-h-[2rem]">
            <span className="border-r-2 border-blue-600 dark:border-blue-400 pr-1">
              {currentText}
            </span>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            I am a front-end developer with a strong interest in AI and machine learning.
            Passionate about creating user-friendly interfaces and exploring intelligent solutions
          </p>

          <div className="flex justify-center mb-8">
            <a
              href="/src/components/doc/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white dark:text-white hover:bg-blue-700 dark:hover:bg-blue-500 rounded-lg transition-colors"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </section>
  );
};

export default Home;