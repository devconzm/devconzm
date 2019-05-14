import React, { Fragment } from 'react'
import Info from './components/Info'
import Partners from './components/Partners'
import Agenda from './components/Agenda'
import Speakers from './components/Speakers'
import Tickets from './components/Tickets'
import About from './components/About'
import ContactUs from './components/ContactUs'

function App () {
  return (
    <Fragment>
      {/* <Header /> */}
      <Info />
      <Partners />
      <Agenda />
      <Speakers />
      <Fragment>
        <div className='container'>
          <h1 className='text-center'>Tickets</h1>
          <div className='card-deck mb-3 text-center'>
            {[1, 2, 4].map(i => (
              <Tickets key={i} />
            ))}
          </div>
        </div>
      </Fragment>
      <About />
      <ContactUs />
    </Fragment>
  )
}

export default App
