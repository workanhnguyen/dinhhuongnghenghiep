import React from 'react';

import { About, Blog, Feedback, Footer, Header, Services, University } from './container';
import './responsive.scss';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Services />
      <About />
      <University />
      <Blog />
      <Feedback />
      <Footer />
    </div>
  )
}

export default App