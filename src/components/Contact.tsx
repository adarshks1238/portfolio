import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative projects, or just having a
                conversation about technology and innovation.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="border border-gray-300 dark:border-gray-700 rounded-xl bg-white/80 dark:bg-gray-900/80 p-8 shadow-lg backdrop-blur-md w-full max-w-md">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300">adarshkonnackal1083@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h4>
                      <p className="text-gray-600 dark:text-gray-300">Kerala, India</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-pink-100 dark:bg-pink-900 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17" cy="7" r="1" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Instagram</h4>
                      <span className="text-gray-600 dark:text-gray-300">@ad.ar_sh</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4 pt-6">
              <a
                href="https://github.com/adarshks1238"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
              >
                <Github className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/adarshksundaresan/"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
