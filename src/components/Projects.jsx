function Projects() {

  const projects = [
    {
      title: "Skin Disease Detection",
      description:
        "AI-powered system for detecting skin diseases using deep learning.",
      tech: ["Python", "TensorFlow", "Flask"]
    },

    {
      title: "Portfolio Website",
      description:
        "Modern full-stack portfolio deployed using Vercel and Render.",
      tech: ["React", "Node.js", "Cloud"]
    },

    {
      title: "Data Analytics Dashboard",
      description:
        "Interactive dashboard for analytics and visualization.",
      tech: ["React", "SQL", "Charts"]
    }
  ]

  return (

    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center mb-16">

        <p className="text-purple-400 text-lg mb-4">
          My Work
        </p>

        <h2 className="text-5xl font-bold">
          Featured Projects
        </h2>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (

          <div
            key={index}
            className="
              bg-white/5
              border border-white/10
              backdrop-blur-lg
              rounded-3xl
              overflow-hidden
              hover:-translate-y-3
              hover:border-purple-500
              transition-all
              duration-300
              group
            "
          >

            <div className="
              h-52
              bg-gradient-to-br
              from-purple-600
              to-blue-600
              flex
              items-center
              justify-center
            ">

              <h3 className="text-2xl font-bold">
                Project
              </h3>

            </div>

            <div className="p-6">

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">

                {project.tech.map((item, i) => (

                  <span
                    key={i}
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-purple-500/20
                      text-purple-300
                      text-sm
                    "
                  >
                    {item}
                  </span>

                ))}

              </div>

              <div className="flex gap-4">

                <button className="
                  bg-purple-600
                  hover:bg-purple-700
                  px-5
                  py-2
                  rounded-xl
                ">
                  Live Demo
                </button>

                <button className="
                  border
                  border-white/20
                  px-5
                  py-2
                  rounded-xl
                  hover:border-purple-500
                ">
                  GitHub
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Projects