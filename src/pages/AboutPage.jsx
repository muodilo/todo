import React from 'react'
import {Link} from "react-router-dom"


function AboutPage() {
  return (
    <div className='aboutPage'>
      <h1>About This App</h1>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minima cupiditate dicta animi, explicabo recusandae autem porro sint amet harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur porro odio deleniti ea itaque unde enim nulla ducimus quod a nobis dicta, sint labore? Blanditiis consequatur totam facilis facere corrupti.</p>
      <p>Version 1.0.0</p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  )
}

export default AboutPage