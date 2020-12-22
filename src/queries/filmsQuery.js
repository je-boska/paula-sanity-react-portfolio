import sanityClient from '../client'
import groq from 'groq'

export const getFilms = async () => {
  const films = await sanityClient.fetch(
    groq`*[_type == "film"]{
              _id,
              title,
              slug,
              image1{
                  asset->{
                      _id,
                      url
                  },
                  alt
              },
              image2{
                  asset->{
                      _id,
                      url
                  },
                  alt
              },
              image3{
                  asset->{
                      _id,
                      url
                  },
                  alt
              },
              embed,
              body,
              order
          }`
  )
  return films
}
