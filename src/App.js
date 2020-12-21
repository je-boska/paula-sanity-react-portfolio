import React, { useState, useEffect } from 'react'
import { getFilms } from './queries/postsQuery'
import './App.css'
import Film from './components/Film'

function App() {
  const [films, setFilms] = useState(null)

  useEffect(() => {
    getFilms().then(films => films.length > 0 && setFilms(films))
  }, [])

  return (
    <>
      {!films ? (
        <div>no films</div>
      ) : (
        films.map(film => <Film key={film._id} film={film} />)
      )}
    </>
  )
}

export default App
