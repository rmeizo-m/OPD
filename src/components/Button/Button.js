import React from 'react';

const Button = ({children, onClick, style, type }) => {
  switch(type){
    case 'test': {
      console.log("test")
      return (<button 
        className={style} 
        onClick={onClick}>
          {children}
        </button>
        )
    }
    default: {
     return (<button 
      className={style} 
      onClick={onClick}>
        default
      </button>
      )
    }
  }
}

export default Button