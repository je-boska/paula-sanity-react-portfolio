import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

const Film = ({ writing }) => {
  const { image, title, slug, body } = writing

  return (
    <div id={slug.current} className='writing'>
      <div className='project-text fade-in-element'>
        <h2>{title}</h2>
        <BlockContent blocks={body} />
      </div>
      <div className='img-writing fade-in-element'>
        <img src={image.asset.url} alt={title} />
      </div>
    </div>
  )
}

export default Film