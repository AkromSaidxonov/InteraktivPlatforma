import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css'

function Ichki() {
  return (
    <div>
        <div className="container">
      <p className='headerParagraf'>Мавжуд дори воситаларининг рўйхати</p>
      <div className='sections'>
        <Link to="/Dorixona" className='sectionItem '>Бюджет</Link>
        <Link to='/Markazlashgan' className='sectionItem '>Марказлашган</Link>
        <Link to='/Ichki' className='sectionItem active'>Ички дорихона</Link>
        <Link to='/Muruvvat' className='sectionItem'>Мурувват</Link>
      </div>
    </div>
    </div>
  );
}

export default Ichki;
