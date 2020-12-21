import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

const Film = ({ film }) => {
  const { image1, image2, image3, title, body, embed } = film

  const thumbnails = [image1, image2, image3]

  return (
    <div>
      <div className='thumbnails'>
        {thumbnails.map(thumbnail => (
          <div
            key={thumbnail.asset._id}
            className='img-container fade-in-element'
          >
            <img
              className='thumbnail'
              src={thumbnail.asset.url}
              alt={thumbnail.alt}
            />
          </div>
        ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: embed }}></div>
      <h1>{title}</h1>
      <BlockContent blocks={body} />
    </div>
  )
}

export default Film
