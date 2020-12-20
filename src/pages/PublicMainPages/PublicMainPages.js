import React from 'react';
import Row from './components/Row'
import { Footer } from '../../components';
import Services from './components/Services';

const PublicMainPages = () => {
  return(
    <div className='main'>
      <section className="row-block">
        <div className="container">
          <Row />
        </div>
      </section>
     <Services />
     <section className="inform" style={{backgroundColor: '#fff'}}>
        <div className="container">
        <h1 style={{textAlign: 'center'}}>О НАС</h1>
        <p class="text-justify">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default PublicMainPages