import React, { useState, useEffect } from 'react'
import { getPosts } from './queries/postsQuery'
import './App.css'
import Post from './components/Post'

function App() {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    getPosts().then(queriedPosts => setPosts(queriedPosts))
  }, [])

  return (
    <>
      {!posts ? (
        <div>no posts</div>
      ) : (
        posts.map(post => <Post key={post._id} post={post} />)
      )}
    </>
  )
}

export default App
