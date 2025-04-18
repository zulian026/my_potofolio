function Education() {
    const education = [
      {
        id: 1,
        degree: "S1 Teknik Informatika",
        institution: "Universitas Anda",
        duration: "2020 - Sekarang",
        description: "Fokus pada pengembangan web dan mobile, dengan IPK 3.8/4.0",
      },
      {
        id: 2,
        degree: "SMA/SMK",
        institution: "Nama SMA/SMK Anda",
        duration: "2017 - 2020",
        description: "Jurusan IPA/TKJ/RPL dengan prestasi dalam kompetisi pemrograman",
      },
    ];
    
    const certifications = [
      {
        id: 1,
        title: "Web Development Bootcamp",
        issuer: "Dicoding Indonesia",
        date: "Oktober 2022",
      },
      {
        id: 2,
        title: "React Fundamentals",
        issuer: "freeCodeCamp",
        date: "Mei 2023",
      },
    ];
  
    return (
      <section id="education" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Pendidikan</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Riwayat Pendidikan</h3>
              
              <div className="space-y-6">
                {education.map((item) => (
                  <div key={item.id} className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-lg font-semibold text-primary mb-1">{item.degree}</h4>
                    <p className="text-gray-700 font-medium">{item.institution}</p>
                    <p className="text-gray-500 text-sm mb-2">{item.duration}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Sertifikasi</h3>
              
              <div className="space-y-5">
                {certifications.map((cert) => (
                  <div key={cert.id} className="bg-white p-5 rounded-lg shadow flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-md font-semibold text-gray-800">{cert.title}</h4>
                      <p className="text-gray-600 text-sm">{cert.issuer} - {cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Education;