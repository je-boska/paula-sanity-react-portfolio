import React, { useState, useEffect } from 'react'
import { getFilms } from './queries/filmsQuery'
import './css/style.css'
import Film from './components/Film'

function App() {
  const [films, setFilms] = useState(null)

  useEffect(() => {
    getFilms().then(films => films.length > 0 && setFilms(films))
  }, [])

  const openMenu = () => {
    let menu = document.querySelector('.dropdown-menu')
    if (menu.style.display === 'block') {
      menu.style.display = 'none'
    } else {
      menu.style.display = 'block'
    }
  }

  return (
    <>
      <header className='header'>
        <h1 className='header__title' id='top'>
          PAULA DURINOVA
        </h1>
        <div className='menu' onClick={openMenu}>
          <div className='menu-line menu-line1'></div>
          <div className='menu-line menu-line2'></div>
          <div className='menu-line menu-line3'></div>
        </div>
        <div className='dropdown-menu'>
          {films &&
            films.map(film => (
              <a key={film._id} href={'#' + film.slug.current}>
                <h2 className='project-title'>{film.title}</h2>
              </a>
            ))}
        </div>
      </header>
      {!films ? (
        <div>no films</div>
      ) : (
        films.map(film => <Film key={film._id} film={film} />)
      )}
    </>
  )
}

export default App
