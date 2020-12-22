import React, { useState, useEffect } from 'react'
import { getAndSortProjects } from './queries/combineQueries'
import './css/style.css'
import Film from './components/Film'
import Writing from './components/Writing'

function App() {
  const [projects, setProjects] = useState(null)
  const [displayMenu, setDisplayMenu] = useState(false)

  useEffect(() => {
    getAndSortProjects().then(
      projects => projects.length > 0 && setProjects(projects)
    )
  }, [])

  const openMenu = () => {
    setDisplayMenu(!displayMenu)
  }

  return (
    <>
      <header className='header'>
        <h1 className='header__title'>PAULA DURINOVA</h1>
        <div className='menu' onClick={openMenu}>
          <div className='menu-line menu-line1'></div>
          <div className='menu-line menu-line2'></div>
          <div className='menu-line menu-line3'></div>
        </div>
        <div
          className='dropdown-menu'
          style={{ display: `${displayMenu ? 'block' : 'none'}` }}
        >
          {projects &&
            projects.map(film => (
              <a key={film._id} href={'#' + film.slug.current}>
                <h2 className='project-title'>{film.title}</h2>
              </a>
            ))}
        </div>
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
