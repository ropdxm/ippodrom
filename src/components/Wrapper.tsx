import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Wrapper: React.FC<any> = ({Component}) => {
  return (
    <>
        <div className='main-content'>
            <Navbar />
            <Component />
        </div>
        <Footer />
    </>
  )
}

export default Wrapper