import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

const Film = ({ film }) => {
  return (
    <div>
      <img src={film.image1.asset.url} alt={film.image1.alt} />
      <img src={film.image2.asset.url} alt={film.image2.alt} />
      <img src={film.image3.asset.url} alt={film.image3.alt} />
      <h1>{film.title}</h1>
      <BlockContent blocks={film.body} />
      <div dangerouslySetInnerHTML={{ __html: film.embed }}></div>
    </div>
  )
}

export default Film
