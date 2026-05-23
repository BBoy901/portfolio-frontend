function Contact() {

  return (

    <section id="contact" className="max-w-4xl mx-auto px-6 py-24">

      <div className="
        bg-white/5
        border border-white/10
        rounded-3xl
        p-10
        backdrop-blur-lg
      ">

        <div className="text-center mb-10">

          <p className="text-purple-400 text-lg mb-4">
            Contact
          </p>

          <h2 className="text-5xl font-bold mb-4">
            Let's Work Together
          </h2>

          <p className="text-gray-400">
            Feel free to reach out for collaborations,
            projects, or opportunities.
          </p>

        </div>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="
              w-full
              p-4
              rounded-xl
              bg-[#111122]
              border border-white/10
              outline-none
              focus:border-purple-500
            "
          />

          <input
            type="email"
            placeholder="Your Email"
            className="
              w-full
              p-4
              rounded-xl
              bg-[#111122]
              border border-white/10
              outline-none
              focus:border-purple-500
            "
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="
              w-full
              p-4
              rounded-xl
              bg-[#111122]
              border border-white/10
              outline-none
              focus:border-purple-500
            "
          ></textarea>

          <button
            className="
              w-full
              bg-purple-600
              hover:bg-purple-700
              py-4
              rounded-xl
              text-lg
              font-semibold
            "
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact