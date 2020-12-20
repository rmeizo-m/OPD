import React from 'react';
import {Button} from '../../../components'

const Row = () => {
  return (
    <div className='row-info'>
      <div className="row-info__block">
        <div className="row-info_title">Новые горизонты безопасности</div>
        <h4 style={{marginBottom: "25px"}}>Упрощаем вашу работу</h4>
        <a href="#inform" className='test' style={{textDecoration: 'none'}}>Подробнее</a>
      </div>
    </div>
  )
}

export default Row