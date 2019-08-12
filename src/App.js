import React, { Fragment } from 'react'
import Info from './components/Info'
import Partners from './components/Partners'
import Speakers from './components/Speakers'
import Tickets from './components/Tickets'
import About from './components/About'
import Team from './components/Team'
import Venue from './components/Venue'
import Footer from './components/Footer'
import Devcon18pre from './components/Devcon18pre'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {
  return (
    <Fragment>
      {/* <Header /> */}
      <Info />
      <About />
      <Venue /> 
      <Partners />
      <Tickets />
      <Team />
      {/* <Speakers /> */}
      <Devcon18pre />
      
      <Footer />
    </Fragment>
  )
}

export default App
