import React from 'react'
import { Link } from 'react-router-dom'

const Card2 = () => {
  return (
    <>
      <Link to="/vegetables" className="about" style={{
            textDecoration:'none',
            backgroundImage:`url('https://media.istockphoto.com/id/173861368/photo/fresh-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=yE-0nahW3U9IrgXumO646_jEVenaRBIwc4TXIiAk9Bs=')`
          }}>
            <h3>Vegetable prices</h3>
            
          </Link>
    </>
  )
}

export default Card2
