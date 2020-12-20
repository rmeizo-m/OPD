import React from 'react';
import sertification from '../../../assets/award.svg'
import eye from '../../../assets/eye-fill.svg'
import file from '../../../assets/file-earmark-richtext.svg'

const Services = () => {
  return(
    <section className="inform" id="inform">
    <div className="container">
      <h1 style={{textAlign: 'center'}}>УСЛУГИ</h1>
      <p style={{textAlign: 'center', fontSize: '1.4rem', fontWeight: '400'}}>Помогаем трансформировать безопасность при помощи инновационных подходов</p>
      <div className="row" style={{paddingTop: '2em'}}>
        <div className="col">
          <div className="card" style={{padding: '10px', background: 'none', border:'none', textAlign: 'center'}}>
            <img src={sertification} className="card-img-top" style={{width: '87px', height:'87px', margin: '0 auto'}} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Сертификация</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{padding: '10px', background: 'none', border:'none', textAlign: 'center'}}>
            <img src={eye} className="card-img-top" style={{width: '87px', height:'87px', margin: '0 auto'}} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Проверка конфигураций</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col">
         <div className="card" style={{padding: '10px', border:'none', background: 'none', textAlign: 'center'}}>
          <img src={file} className="card-img-top" style={{width: '87px', height:'87px', margin: '0 auto'}} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Составление отчетов</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Services