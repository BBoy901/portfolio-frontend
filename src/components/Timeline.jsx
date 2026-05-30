import { motion } from "framer-motion"

function Timeline() {

  const items = [
    {
      year: "2024",
      title: "Started Data Science",
      text: "Began learning analytics, Python, and machine learning."
    },

    {
      year: "2025",
      title: "Built AI Projects",
      text: "Worked on intelligent systems and data applications."
    },

    {
      year: "2026",
      title: "Cloud Deployment",
      text: "Deployed full-stack applications using Vercel and Render."
    }
  ]

  return (

    <section className="max-w-5xl mx-auto px-6 py-24">

      <div className="text-center mb-20">

        <p className="text-purple-400 text-lg mb-4">
          Journey
        </p>

        <h2 className="text-5xl font-bold">
          Experience Timeline
        </h2>

      </div>

      <div className="relative border-l border-purple-500/30 ml-6">

        {items.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 ml-10 relative"
          >

            <div className="
              absolute
              -left-[52px]
              top-2
              w-6
              h-6
              rounded-full
              bg-purple-500
              shadow-[0_0_20px_rgba(168,85,247,0.7)]
            "></div>

            <span className="text-purple-400 text-lg">
              {item.year}
            </span>

            <h3 className="text-2xl font-bold mt-2 mb-3">
              {item.title}
            </h3>

            <p className="text-gray-400">
              {item.text}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  )
}

export default Timeline