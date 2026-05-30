function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#070716]/80 backdrop-blur-md backdrop-blur-lg border-b border-white/10 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-purple-400">
          Fadhila
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">

          <a href="#home">
            <li className="hover:text-purple-400 cursor-pointer">
              Home
            </li>
          </a>

          <a href="#about">
            <li className="hover:text-purple-400 cursor-pointer">
              About
            </li>
          </a>

          <a href="#skills">
            <li className="hover:text-purple-400 cursor-pointer">
              Skills
            </li>
          </a>

          <a href="#projects">
            <li className="hover:text-purple-400 cursor-pointer">
              Projects
            </li>
          </a>

          <a href="#contact">
            <li className="hover:text-purple-400 cursor-pointer">
              Contact
            </li>
          </a>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar