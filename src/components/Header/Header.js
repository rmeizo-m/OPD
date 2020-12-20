import React, { useEffect, useState } from 'react'

let lastScrollY = 0;
let styleHeader = {
  backgroundColor: '#fff',
  borderBottom: '1px solid #e7e7e7',
  color: '#000',
  zIndex: '999'
}

const Header = ({type}) => {
  const [whit, setWhit] = useState({})
  const [text, setText] = useState({color: "#fff",paddingLeft: '10px', paddingRight: '10px', fontSize: '18px', fontWeight: 'bold'})
  const [color, setColor] = useState({color: '#fff', textDecoration: 'none'})
  const [brendColor, setBrendColor] = useState({color: '#fff', fontSize: '30px', fontWeight: 'bold'})
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      lastScrollY = window.scrollY;

      if (lastScrollY > 150) {
        setWhit(styleHeader)
        setText({...text, color: '#000'})
        setColor({...color, color:"#000"})
        setBrendColor({...brendColor, color: '#000'})
      } else if (lastScrollY < 150) {
        setWhit({zIndex: '999'})
        setText({...text,color: "#fff"})
        setColor({...color, color: "#fff"})
        setBrendColor({...brendColor, color: '#fff'})
      }  
  })
  console.log("tt")
},[])


  switch(type) {
    case 'public': {
      return (
        <header className='header' style={whit}>
          <div className="container">
            <nav className="navbar navbar-dark">
              <a className="navbar-brand" style={brendColor} href='/'>RimSolSecurity</a>
              <div className="navbar-nav flex-row">
                <a className="link" style={color} href="/sigin">Вход</a>
                <span style={text}>/</span>
                <a className="link" style={color} href="/siginup">Регистрация</a>
              </div>
            </nav>
          </div> 
        </header>
      )
    }
    case 'pribate': {
      return (
        <header className='header' style={{backgroundColor: '#fff', color:'#000'}}>

        </header>
      )
    }
    default:{
      return (
        <header className='header' style={{backgroundColor: '#fff', zIndex: '999'}}>
          <div className="container">
            <nav className="navbar navbar-dark">
              <a className="navbar-brand" style={{color: '#000', fontSize: '30px', fontWeight: 'bold'}} href='/'>RimSolSecurity</a>
              <div className="navbar-nav flex-row">
                <a className="link" style={{color:'#000'}} href="/sigin">Вход</a>
                <span style={{color: "#000",paddingLeft: '10px', paddingRight: '10px', fontSize: '18px', fontWeight: 'bold'}}>/</span>
                <a className="link" style={{color:'#000'}} href="/siginup">Регистрация</a>
              </div>
            </nav>
          </div> 
        </header>
      )
    }
  }
}

export default Header