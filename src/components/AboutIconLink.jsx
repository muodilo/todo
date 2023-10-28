import React from 'react'
import {Link} from "react-router-dom"

function AboutIconLink() {
  return (
    <div className='about-icon'>
      <Link to="/about"><h1>?</h1></Link>
      
    </div>
  )
}

export default AboutIconLink