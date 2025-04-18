function Projects() {
    const projects = [
      {
        id: 1,
        title: "E-Commerce Website",
        description: "Website e-commerce dengan fitur keranjang belanja, pembayaran, dan manajemen produk.",
        image: "/api/placeholder/400/300",
        tags: ["React", "Node.js", "MongoDB"],
        demoLink: "#",
        codeLink: "#",
      },
      {
        id: 2,
        title: "Task Management App",
        description: "Aplikasi manajemen tugas dengan fitur drag-and-drop, kategori, dan reminder.",
        image: "/api/placeholder/400/300",
        tags: ["React", "Firebase", "Tailwind CSS"],
        demoLink: "#",
        codeLink: "#",
      },
      {
        id: 3,
        title: "Portfolio Website",
        description: "Website portfolio responsive untuk menampilkan project dan skill.",
        image: "/api/placeholder/400/300",
        tags: ["HTML", "CSS", "JavaScript"],
        demoLink: "#",
        codeLink: "#",
      },
    ];
  
    return (
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Project Saya</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoLink} 
                      className="text-sm font-medium text-primary hover:text-blue-700"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.codeLink} 
                      className="text-sm font-medium text-gray-700 hover:text-gray-900"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;