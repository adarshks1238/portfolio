import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const timeline = [
    {
      type: 'education',
      title: 'BTech in Computer Science',
      institution: 'APJ Abdul Kalam Technological University',
      period: '2022 - 2026',
      description: 'Pursuing Bachelor of Technology in Computer Science with focus on software development, algorithms, and emerging technologies.',
      status: 'current'
    },
    {
      type: 'experience',
      title: 'Data Science Intern',
      institution: 'Luminar Technohub',
      period: '2025',
      description: 'Worked on data analysis and machine learning projects, enhancing skills in Python, data visualization, and statistical modeling.',
      status: 'completed'
    },
    {
      type: 'certification',
      title: 'Complete Web Development Course',
      institution: 'udemy',
      period: '2025',
      description: 'Comprehensive certification covering modern web technologies, frameworks, and best practices.',
      status: 'completed'
    },
    {
      type: 'achievement',
      title: 'Best Department Project at AJCE Mastermind 2025',
      institution: 'Amal Jyothi College of Engineering',
      period: '2025',
      description: 'My mini project "Smart Traffic Management System (Smart Ways)" was awarded Best Department Project at AJCE Mastermind 2025. place in university hackathon for innovative AI-powered solution.',
      status: 'completed'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-5 h-5" />;
      case 'experience':
        return <GraduationCap className="w-5 h-5" />;
      case 'certification':
        return <Award className="w-5 h-5" />;
      case 'achievement':
        return <Award className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';
      case 'certification':
        return 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400';
      case 'experience':
        return 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400';
      case 'achievement':
        return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400';
      default:
        return 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Achievements
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
            My academic journey and professional certifications
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600"></div>

            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-start mb-8">
                {/* Timeline dot */}
                <div className={`flex items-center justify-center w-16 h-16 rounded-full ${getColor(item.type)} shadow-lg z-10`}>
                  {getIcon(item.type)}
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      {item.status === 'current' && (
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {item.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;