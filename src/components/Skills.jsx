import { useState, useEffect } from 'react';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedTechnicalSkills, setDisplayedTechnicalSkills] = useState([]);
  const [displayedSoftSkills, setDisplayedSoftSkills] = useState([]);

  const technicalSkills = [
    { name: "HTML", percentage: 90, icon: "🌐" },
    { name: "CSS", percentage: 85, icon: "🎨" },
    { name: "JavaScript", percentage: 80, icon: "📜" },
    { name: "React", percentage: 75, icon: "⚛️" },
    { name: "Tailwind CSS", percentage: 85, icon: "💨" },
    { name: "Node.js", percentage: 70, icon: "🟢" },
  ];
  
  const softSkills = [
    { name: "Komunikasi", percentage: 85, icon: "💬" },
    { name: "Teamwork", percentage: 90, icon: "👥" },
    { name: "Problem Solving", percentage: 80, icon: "🧩" },
    { name: "Time Management", percentage: 75, icon: "⏰" },
  ];

  // Animation for skills on section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  // Animated skill display
  useEffect(() => {
    if (isVisible) {
      const technicalTimer = setTimeout(() => {
        technicalSkills.forEach((skill, index) => {
          setTimeout(() => {
            setDisplayedTechnicalSkills(prev => [...prev, skill]);
          }, index * 200);
        });
      }, 300);

      const softTimer = setTimeout(() => {
        softSkills.forEach((skill, index) => {
          setTimeout(() => {
            setDisplayedSoftSkills(prev => [...prev, skill]);
          }, index * 200);
        });
      }, 500);

      return () => {
        clearTimeout(technicalTimer);
        clearTimeout(softTimer);
      };
    }
  }, [isVisible]);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Keahlian Saya</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kombinasi keahlian teknis dan soft skills yang saya kembangkan selama perjalanan karir saya
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Technical Skills
              </h3>
              
              <div className="space-y-6">
                {displayedTechnicalSkills.map((skill, index) => (
                  <div key={index} className="animate-fadeIn">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium flex items-center">
                        <span className="mr-2 text-xl">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-gray-700 font-medium">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Tools and Technologies */}
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4 text-gray-800">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {["VSCode", "Git", "GitHub", "Figma", "Postman", "Webpack", "npm", "Firebase"].map((tool, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Soft Skills
              </h3>
              
              <div className="space-y-6">
                {displayedSoftSkills.map((skill, index) => (
                  <div key={index} className="animate-fadeIn">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium flex items-center">
                        <span className="mr-2 text-xl">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-gray-700 font-medium">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-indigo-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Languages */}
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4 text-gray-800">Bahasa</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-gray-700 mr-4 w-24">Bahasa Indonesia</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-700 mr-4 w-24">English</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Section: Learning */}
        <div className={`mt-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Sedang Dipelajari
            </h3>
            <div className="flex flex-wrap gap-4 mt-4">
              {["TypeScript", "Next.js", "GraphQL", "Docker", "AWS", "Machine Learning"].map((skill, index) => (
                <div key={index} className="flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-lg">
                  <div className="h-3 w-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;