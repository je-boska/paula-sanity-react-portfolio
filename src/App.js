import React, { useState, useEffect } from 'react'
import { getAndSortProjects } from './queries/combineQueries'
import './css/style.css'
import Film from './components/Film'
import Writing from './components/Writing'
import Menu from './components/Menu'
import Contact from './components/Contact'
import { fadeIn } from './effects/fadeIn'
import { smoothScroll } from './effects/smoothScroll'

function App() {
  const [projects, setProjects] = useState(null)
  const [viewContact, setViewContact] = useState(false)
  const [viewFullImg, setViewFullImg] = useState(false)
  const [fullImgSrc, setFullImgSrc] = useState('')
  const [fullImgAlt, setFullImgAlt] = useState('')

  useEffect(() => {
    getAndSortProjects()
      .then(projects => projects.length > 0 && setProjects(projects))
      .then(fadeIn)
      .then(smoothScroll)
  }, [])

  useEffect(() => {
    const header = document.querySelector('.header-hover-zone')
    header.addEventListener('mouseover', () => setViewContact(true))
    header.addEventListener('mouseleave', () => setViewContact(false))

    return (
      header.removeEventListener('mouseover', () => setViewContact(true)),
      header.removeEventListener('mouseleave', () => setViewContact(false))
    )
  })

  return (
    <>
      <header className='header-hover-zone'>
        <header className='header'>
          <h1 className='header__title'>PAULA DURINOVA</h1>
          <Contact viewContact={viewContact} />
        </header>
      </header>
      <Menu projects={projects} />
      <main>
        {!projects
          ? null
          : projects.map(project =>
              project.image1 ? (
                <Film
                  key={project._id}
                  film={project}
                  setViewFullImg={setViewFullImg}
                  setFullImgSrc={setFullImgSrc}
                  setFullImgAlt={setFullImgAlt}
                />
              ) : (
                <Writing key={project._id} writing={project} />
              )
            )}
        <div
          onClick={() => setViewFullImg(false)}
          className={`modal ${viewFullImg && 'open'}`}
        >
          <img className='full-img' src={fullImgSrc} alt={fullImgAlt}></img>
        </div>
      </main>
    </>
  )
}

export default App
