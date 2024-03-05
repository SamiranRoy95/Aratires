import React, { useState } from 'react'
import { useEffect } from 'react'


const d=[
  { name:"aaa"},
  {name:"ddddd"}
]
const Main = () => {
  const [post, setPost] = useState()


  useEffect(() => {

    fetch("./data.json")
      .then(res => res.json())
      .then(data => {
        setPost(data)
        console.log(data)
      })
  }, [])
  return (
    <div >
      <div>
        {
          post.map((p) => (
            <div >

              <img src={p.image} />
              <h2>{p.name}</h2>
            </div>

          ))
        }
      </div>

    </div>
  )
}

export default Main