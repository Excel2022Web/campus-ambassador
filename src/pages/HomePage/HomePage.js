import React from 'react'
import { Main, Contact, Footer, About } from '../../components'
import './HomePage.css'
// import SimpleSlider from '../../components/ImageSlider/SimpleSlider'
import SimpleAccordion from '../../components/FAQ/SimpleAccordion'
import {Rewards} from '../../components'
function HomePage() {
  return (
    <div className='homePage'>
        <Main />
        <About />
        <Rewards />
        <SimpleAccordion/>
        <Contact />
        <Footer />  
    </div>
  )
}

export default HomePage
