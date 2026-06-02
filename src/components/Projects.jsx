import React from 'react'
import omniview from '../assets/omniview.png'

const Projects = () => {
  const projects = [



    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects, skills, and professional experience.',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      image: {omniview},
      link: '#',
      github: '#'
    },
    {
      title: 'Creator Influence and Analytics Platform',
      description: 'A platform for creators to track their influence and analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Next.js', 'Tailwind CSS' ,'python'],
      image: {omniview},
      link: 'https://30-cycle-hackathon-team-b.vercel.app/',
      github: 'https://github.com/vhicthorace2/30-Cycle-Hackathon-Team-B'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 border border-gray-600 hover:border-gray-500 text-white text-center py-2 rounded-lg transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
