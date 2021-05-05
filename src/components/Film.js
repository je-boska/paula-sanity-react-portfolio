import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

const Film = ({ film, setViewFullImg, setFullImgSrc, setFullImgAlt }) => {
  const { image1, image2, image3, title, slug, body, embed } = film

  const thumbnails = [image1, image2, image3]

  if (!slug) {
    return <div></div>
  }

  return (
    <section id={slug.current} className='project'>
      <div className='thumbnails'>
        {thumbnails.map(image => (
          <div
            onClick={() => {
              setViewFullImg(true)
              setFullImgSrc(image.asset.url)
              setFullImgAlt(title)
            }}
            key={image.asset._id}
            className='img-container to-fade'
          >
            <img className='thumbnail' src={image.asset.url} alt={image.alt} />
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
    </section>
  )
}

export default Film
