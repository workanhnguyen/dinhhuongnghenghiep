import React, { memo } from 'react'

import './Home.scss'
import { About, Feedback, Footer, Header, Services, University } from '../../container';

function Home() {
  return (
    <div>
        <Header />
        <Services />
        <About />
        <University />
        <Feedback />
        <Footer />
    </div>
  )
}

export default memo(Home)