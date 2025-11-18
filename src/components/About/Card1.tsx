import React from 'react'
import { Link } from 'react-router-dom'

const Card1 = () => {
  return (
    <>
      <Link to="/marketplace" style={{
        textDecoration:'none',
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1686529896385-8a8d581d0225?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')`
    }} className='about'>
            <h3>MarketPlace</h3>
            
    </Link>
    </>
  )
}

export default Card1
