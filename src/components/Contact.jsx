import { useState } from "react";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "https://portfolio-backend-c2y7.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            message
          })
        }
      );

      const data = await response.json();

      alert(data.message);

      setName("");
      setEmail("");
      setMessage("");

    } catch (error) {

      alert("Failed to send message");

    }

  };

  return (

    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-24"
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

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
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
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
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
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
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
            type="submit"
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

  );
}

export default Contact;