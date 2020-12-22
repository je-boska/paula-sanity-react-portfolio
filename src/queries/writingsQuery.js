import sanityClient from '../client'
import groq from 'groq'

export const getWritings = async () => {
  const writings = await sanityClient.fetch(
    groq`*[_type == "writing"]{
              _id,
              title,
              slug,
              image{
                  asset->{
                      _id,
                      url
                  },
                  alt
              },
              body,
              order
          }`
  )
  return writings
}
