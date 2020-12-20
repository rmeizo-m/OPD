import React from 'react'
import { useLocation } from 'react-router-dom';

const NoPages = () => {
  const location = useLocation();
    return (
      <div className='main '>
      <div className="signin row-block">
        <div className="col">
          <h1 style={{color:'#fff'}}>Oops!</h1>
          <h2 style={{color:'#fff'}}>404 Not Found</h2>
          <div class="error-details" style={{color:'#fff'}}>
            Sorry, an error has occured, Requested page {location.pathname} not found!
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default NoPages