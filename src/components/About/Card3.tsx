import React from 'react'
import { Link } from 'react-router-dom'

const Card3 = () => {
  return (
    <>
      <Link to="/vegetables" className="about" style={{
            textDecoration:'none',
            backgroundImage:`url('https://media.licdn.com/dms/image/v2/D4E12AQEkwSExq0u-1A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1730113856721?e=2147483647&v=beta&t=gtqf67AHZvBeo8BMjTV6CGRiTnL9NZguc9owsAHjPxU')`
          }}>
            <h3>Detect Pest</h3>
            
          </Link>
    </>
  )
}

export default Card3
