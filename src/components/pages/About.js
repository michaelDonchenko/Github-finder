import React from 'react'
import Navbar from '../layout/Navbar'


const About = () => {

  return (
    <div>
      <Navbar title='Github Finder'/>
      <div className="ml-3"> 
        <h3 className="mt-2">This is the about page for the App</h3>
        <div className="mt-5 mb-5"> 
            <h5>You can search for Github users and watch thier info by clicking on
              more info button.
            </h5>
            <h5>Version 1.0.0 <br></br> Copyright michaelDonchenko.</h5>
        </div>
      </div> 
    </div>
  )
}

export default About
