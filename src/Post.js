import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
  const {id} =useParams()
  return (
    <div>
      
<h1>post {id}</h1>

    </div>
    
  )
}

export default Post