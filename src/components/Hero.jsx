import { motion } from "framer-motion"

function Hero() {

  return (

    <section
      id="home"
      className="max-w-7xl mx-auto px-6 pt-32 pb-20"
    >

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-purple-400 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">

            Fadhila
            <br />

            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Data Scientist
            </span>

          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-xl">
            Passionate about Data Science,
            AI systems, Cloud Development,
            and modern web applications.
          </p>

          <div className="flex flex-wrap gap-4">

            <a href="#projects">

              <button className="
                bg-purple-600
                hover:bg-purple-700
                px-6
                py-3
                rounded-xl
                transition-all
              ">
                View Projects
              </button>

            </a>

            <a href="#contact">

              <button className="
                border
                border-purple-500
                px-6
                py-3
                rounded-xl
                hover:bg-purple-500/10
                transition-all
              ">
                Contact Me
              </button>

            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="
            relative
            w-[350px]
            h-[350px]
            rounded-full
            bg-gradient-to-br
            from-purple-500
            to-blue-500
            p-1
            shadow-[0_0_60px_rgba(168,85,247,0.5)]
          ">

            <div className="
              w-full
              h-full
              rounded-full
              bg-[#111122]
              flex
              items-center
              justify-center
              text-center
              p-10
            ">

              <div>

                <h2 className="text-3xl font-bold text-purple-400 mb-3">
                  AI • Cloud • Data
                </h2>

                <p className="text-gray-400">
                  Building modern intelligent systems.
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero