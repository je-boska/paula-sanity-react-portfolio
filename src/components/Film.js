import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

const Film = ({ film }) => {
  const { image1, image2, image3, title, slug, body, embed } = film

  const thumbnails = [image1, image2, image3]

  return (
    <div id={slug.current} className='project'>
      <div className='thumbnails'>
        {thumbnails.map(thumbnail => (
          <div key={thumbnail.asset._id} className='img-container to-fade'>
            <img
              className='thumbnail'
              src={thumbnail.asset.url}
              alt={thumbnail.alt}
            />
          </div>
        ))}
      </div>
      <div
        className='embed to-fade'
        dangerouslySetInnerHTML={{ __html: embed }}
      ></div>
      <div className='project-text to-fade'>
        <h2>{title}</h2>
        <BlockContent blocks={body} />
      </div>
    </div>
  )
}

export default Film
