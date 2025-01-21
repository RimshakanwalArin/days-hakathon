import Hero from './components/Hero/page'
import Promotion from './components/Promotion/page'
import Services from './components/Services/page'
import React from 'react'

import BestSelling from './components/bestSelling/page'


const App = () => {
  return (
    <div>
      
        <Hero/>
        <Services />
        <Promotion/>
        <BestSelling/>

    </div>
  )
}

export default App