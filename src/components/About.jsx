import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a Software Engineering student at the Federal University of Technology, Owerri (FUTO), 
              with a strong passion for designing and developing innovative digital solutions that 
              solve real-world problems. My primary area of expertise is frontend web development, 
              where I leverage technologies such as React.js, Tailwind CSS, JavaScript, and modern web development
              practices to build responsive, accessible, and user-centered interfaces. I enjoy transforming 
              complex requirements into intuitive digital experiences that combine functionality, performance, and visual appeal.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              In addition to my technical capabilities, I possess practical project management
              experience that enables me to effectively plan, coordinate, and execute projects
                throughout their entire lifecycle. I am skilled in requirements gathering, task 
                prioritization, team collaboration, progress tracking, and stakeholder communication, 
                ensuring that projects are delivered on schedule and aligned with defined objectives.
                My experience working on academic, personal, and collaborative projects has strengthened 
                my ability to balance technical implementation with strategic planning and organizational efficiency.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
As an aspiring software engineer, I apply software engineering principles and best practices to develop scalable, maintainable, and high-quality applications. My expertise extends beyond coding to include system analysis and design, database modeling, software architecture, documentation, testing, and quality assurance. I am particularly interested in building solutions that not only meet user needs but also demonstrate reliability, performance, and long-term sustainability. Through continuous learning and hands-on experience, I strive to bridge the gap between technology, business objectives, and user expectations while contributing meaningful value to every project I undertake.            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-2">2+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-2">5+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-2">3+</h3>
              <p className="text-gray-400">Happy Clients</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
