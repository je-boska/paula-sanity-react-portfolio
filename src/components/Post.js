import React from 'react'

const Post = ({ post }) => {
  return (
    <div>
      <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
      <h1>{post.title}</h1>
    </div>
  )
}

export default Post
