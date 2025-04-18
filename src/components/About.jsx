import { useState, useEffect } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);

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

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Tentang Saya</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Membangun solusi digital yang user-friendly dan estetik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`flex justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative">
              <div className="w-full h-full bg-blue-200 rounded-lg absolute -left-4 -top-4 z-0"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-600 rounded-lg absolute -right-4 -bottom-4"></div>
              <img
                src="/api/placeholder/300/300"
                alt="About Me"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg relative z-10 shadow-lg"
              />
              <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-lg p-4 z-20">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-blue-600">2+</span>
                  <span className="text-gray-600 text-sm">Tahun Pengalaman</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              Halo! Saya <span className="text-blue-600">Nama Anda</span>
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Saya adalah mahasiswa jurusan <span className="font-medium">Jurusan Anda</span> di <span className="font-medium">Universitas Anda</span>. 
              Saya memiliki passion di bidang pengembangan web dan desain UI/UX dengan fokus pada pengalaman pengguna yang intuitif.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Dengan pengalaman dalam mengerjakan berbagai proyek web development, saya telah mengembangkan kemampuan problem-solving 
              dan kerja sama tim yang baik. Saya selalu bersemangat untuk belajar teknologi baru dan meningkatkan skill yang saya miliki.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-gray-700">
                  <strong className="text-gray-900">Nama:</strong> Zulian Alhisyam
                </p>
                <p className="text-gray-700">
                  <strong className="text-gray-900">Email:</strong> Zulianalhisyam@gmail.com
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-gray-700">
                  <strong className="text-gray-900">Lokasi:</strong> Padang, Indonesia
                </p>
                <p className="text-gray-700">
                  <strong className="text-gray-900">Ketersediaan:</strong> Freelance/Full-time
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
