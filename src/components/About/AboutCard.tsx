import React from 'react'
import { Link } from 'react-router-dom'

const AboutCard = () => {
  return (
    <div className="about-box1"> 
    <Link to="/marketplace" style={{
        textDecoration:'none',
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1686529896385-8a8d581d0225?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')`
    }} className='about'>
            <h3>MarketPlace</h3>
            
    </Link>
          <Link to="/vegetables" className="about" style={{
            textDecoration:'none',
            backgroundImage:`url('https://media.istockphoto.com/id/173861368/photo/fresh-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=yE-0nahW3U9IrgXumO646_jEVenaRBIwc4TXIiAk9Bs=')`
          }}>
            <h3>Vegetable prices</h3>
            
          </Link>

        </div>
  )
}

export default AboutCard
