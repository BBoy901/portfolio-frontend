import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [profile, setProfile] = useState(null)

  useEffect(() => {

    fetch('https://portfolio-backend-c2y7.onrender.com')
      .then((response) => response.json())
      .then((data) => setProfile(data))

  }, [])

  if (!profile) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="container">

      <h1>{profile.name}</h1>

      <section>
        <h2>Role</h2>

        <p>{profile.role}</p>
      </section>

      <section>
        <h2>Skills</h2>

        <ul>
          {profile.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Projects</h2>

        <ul>
          {profile.projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </section>

    </div>
  )
}

export default App