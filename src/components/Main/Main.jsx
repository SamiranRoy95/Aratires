import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useEffect } from 'react'
import "./Main.css"


const d = [
  { name: "aaa" },
  { name: "ddddd" }
]
const Main = () => {
  const [post, setPost] = useState()



  const data = [
    {
      "image": "https://ragibnizam.files.wordpress.com/2016/09/80000-pic2.jpg?w=640",
      "name": " Handi",
      "description": "jjljj",
      "owner": " Samiran Roy",
      "location": "Chittagong",
      "price": 50,
      "id": 1
    },
    {
      "image": "https://www.allbanglanewspaper.co/blog/wp-content/uploads/handy.jpg",
      "name": " Dava",
      "description": "jjljj",
      "location": "Chittagong",
      "price": 1000,
      "owner": " Samiran Roy",
      "id": 2
    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_Y12ZY0NDkNSBmfRdFw4g0HauRxYOjSu-g&usqp=CAU",
      "name": "Tava",
      "price": 500,
      "owner": " Samiran Roy",
      "id": 3
    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmbizz2qdtxgtnIdljvEejMdMZWGJi18eWyQ&usqp=CAU",
      "name": "Blood Test",
      "description": "jjljj",
      "price": 500,
      "doctor": " Dr. Hasan Sir",
      "id": 4
    },
    {
      "image": "https://www.allbanglanewspaper.co/blog/wp-content/uploads/Barcode.jpg",
      "name": "Afgan",
      "description": "jjljj",
      "price": 500,
      "owner": " Samiran Roy",
      "id": 5
    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGMEYmUTK31ruwrHvoypLN-Nddk8Yf0z1NyA&usqp=CAU",
      "name": "Samiran Roy",
      "description": "jjljj",
      "price": 500,
      "doctor": "Samian Roy",
      "id": 6
    }
  ]






  useEffect(() => {

    fetch("/data.json")
      .then(res => res.json())
      .then(data => {
        setPost(data)
        console.log(data)
      })
  }, [])
  return (
    <div >
      <div className='restaurent__section'>
        {
          data.map((p) => (
            <div key={p.id} className='restaurent' >
              <div className='resto__image__div'>

                <img className='resto__image' src={p.image} />
              </div>

              <Link to={`/detail/${p.id}`}>
              <div>
                <h2 style={{color:'white'}}>{p.name}</h2>
                <p >{p.description}</p>
                <button>Read More</button>
              </div>
              </Link>
            </div>

          ))
        }
      </div>

    </div>
  )
}

export default Main