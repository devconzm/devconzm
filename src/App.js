import React, { Fragment } from 'react'
import Info from './components/Info'
import Partners from './components/Partners'
import Speakers from './components/Speakers'
import Tickets from './components/Tickets'
import About from './components/About'
import Venue from './components/Venue'
import Footer from './components/Footer'
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
      {/* <Speakers />
      <Tickets />
      */}
      <Footer />
    </Fragment>
  )
}

export default App
