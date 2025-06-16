import React from 'react'
import Navbar from './Navbar'
// import Subnavbar from './Subnavbar'
import Works from './Works'
import Testimonial from './Testimonial'
import About from './About'
import ContactFooter from './ContactFooter'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Subnavbar/> */}
      <About/>
      <Works/>
      <Testimonial/>
      <ContactFooter/>
    </div>
  )
}

export default App