import React, { Fragment } from 'react'
import Info from './components/Info'
import Partners from './components/Partners'
import Agenda from './components/Agenda'
import Speakers from './components/Speakers'
import Tickets from './components/Tickets'
import About from './components/About'
import Footer from './components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {
  return (
    <Fragment>
      {/* <Header /> */}
      <Info />
      <Partners />
      <Agenda />
      <Speakers />
      <Fragment>
        <section id='tickets'>
          <div className='container'>
            <h1 className='text-center'>Tickets</h1>
            <div className='card-deck mb-3 text-center'>
              {[1, 2, 4].map(i => (
                <Tickets key={i} />
              ))}
            </div>
          </div>
        </section>
      </Fragment>
      <About />
      <Footer />
    </Fragment>
  )
}

export default App
