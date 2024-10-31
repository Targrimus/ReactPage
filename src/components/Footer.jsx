import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid p-0 bg-dark Footer text-center'>
      Copyright &copy; {new Date().getFullYear()}
    </div>
  )
}

export default Footer