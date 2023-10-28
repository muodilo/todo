import React from 'react'
import {Navigate,useNavigate,Routes, Route} from 'react-router-dom'

function Post() {
  const status = 200;
  const navigate = useNavigate()

  const handleClick = () => {
    console.log('hello');
    navigate('/about')
  }

  if (status === 404) {
    return <Navigate to='/notfound' />
  }

  return (
    <div>
      <h1>POST</h1>
      <button className='btn btn-primary' onClick={handleClick}>Click Me</button>
      <Routes>
        <Route path='/show' element={ <h1>Hello world</h1>} />
      </Routes>
    </div>
  )
}

export default Post