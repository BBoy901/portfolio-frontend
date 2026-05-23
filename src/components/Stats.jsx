import { motion } from "framer-motion"

function Stats() {

  const stats = [
    {
      number: "10+",
      label: "Projects"
    },

    {
      number: "5+",
      label: "Technologies"
    },

    {
      number: "100%",
      label: "Passion"
    },

    {
      number: "24/7",
      label: "Learning"
    }
  ]

  return (

    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
      ">

        {stats.map((stat, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              bg-white/5
              border border-white/10
              backdrop-blur-lg
              rounded-3xl
              p-8
              text-center
            "
          >

            <h2 className="
              text-5xl
              font-bold
              text-purple-400
              mb-4
            ">
              {stat.number}
            </h2>

            <p className="text-gray-400 text-lg">
              {stat.label}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  )
}

export default Stats