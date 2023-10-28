import React from 'react'


function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className='footer'>
      <p>Copyright &copy; Odilo { year}</p>
    </div>
  )
}

export default Footer