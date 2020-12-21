import sanityClient from '../client'

export const getPosts = async () => {
  const posts = await sanityClient.fetch(
    `*[_type == "post"]{
              _id,
              title,
              slug,
              mainImage{
                  asset->{
                      _id,
                      url
                  },
                  alt
              },
              body
          }`
  )
  return posts
}
