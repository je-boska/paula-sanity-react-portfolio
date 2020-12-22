import React, { useState, useEffect } from 'react'
import { getAndSortProjects } from './queries/combineQueries'
import './css/style.css'
import Film from './components/Film'
import Writing from './components/Writing'
import Menu from './components/Menu'
import Contact from './components/Contact'

function App() {
  const [projects, setProjects] = useState(null)
  const [viewContact, setViewContact] = useState(false)

  useEffect(() => {
    getAndSortProjects().then(
      projects => projects.length > 0 && setProjects(projects)
    )
  }, [])

  useEffect(() => {
    const header = document.querySelector('.header')
    header.addEventListener('mouseover', () => setViewContact(true))
    header.addEventListener('mouseleave', () => setViewContact(false))

    return (
      header.removeEventListener('mouseover', () => setViewContact(true)),
      header.removeEventListener('mouseleave', () => setViewContact(false))
    )
  })

  return (
    <>
      <header className='header'>
        <h1 className='header__title'>PAULA DURINOVA</h1>
        <Contact viewContact={viewContact} />
        <Menu projects={projects} />
      </header>
      {!projects
        ? null
        : projects.map(project =>
            project.image1 ? (
              <Film key={project._id} film={project} />
            ) : (
              <Writing key={project._id} writing={project} />
            )
          )}
    </>
  )
}

export default App
