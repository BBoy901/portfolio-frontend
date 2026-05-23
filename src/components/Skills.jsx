function Skills() {

  const skills = [
    "Python",
    "React",
    "JavaScript",
    "SQL",
    "Machine Learning",
    "Cloud Hosting",
    "Node.js",
    "Data Analysis"
  ]

  return (

    <section id="skills" className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center mb-16">

        <p className="text-purple-400 text-lg mb-4">
          My Expertise
        </p>

        <h2 className="text-5xl font-bold">
          Skills & Technologies
        </h2>

      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="
              bg-white/5
              border border-white/10
              backdrop-blur-lg
              rounded-2xl
              p-6
              hover:border-purple-500
              hover:-translate-y-2
              transition-all
              duration-300
              group
            "
          >

            <div className="
              w-14
              h-14
              rounded-xl
              bg-purple-500/20
              flex
              items-center
              justify-center
              mb-6
              group-hover:bg-purple-500/30
            ">

              <span className="text-2xl">
                ⚡
              </span>

            </div>

            <h3 className="text-xl font-semibold mb-2">
              {skill}
            </h3>

            <p className="text-gray-400 text-sm">
              Modern development and practical project experience.
            </p>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Skills