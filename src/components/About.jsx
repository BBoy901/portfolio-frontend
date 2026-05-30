function About() {

  return (

    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24"
    >

      <div
        className="
        bg-white/5
        border border-white/10
        rounded-3xl
        p-10
        backdrop-blur-lg
      "
      >

        <p className="text-purple-400 text-lg mb-4">
          About Me
        </p>

        <h2 className="text-5xl font-bold mb-8">
          Data Science Student &
          Aspiring Data Analyst
        </h2>

        <p className="text-gray-300 leading-8 text-lg">
          I am a Data Science student with a
          strong interest in Data Analytics,
          Machine Learning, and Cloud
          Technologies.

          I enjoy transforming raw data into
          meaningful insights that support
          decision-making and solve real-world
          problems.

          Through academic studies and
          personal projects, I have developed
          skills in Python, SQL, Power BI,
          React, Git, GitHub, and cloud
          deployment platforms such as
          Vercel and Render.

          My goal is to become a professional
          Data Analyst capable of building
          impactful data-driven solutions.
        </p>

      </div>

    </section>

  );
}

export default About;