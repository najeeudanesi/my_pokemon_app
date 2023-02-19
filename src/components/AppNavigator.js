import React from 'react'
import './AppNavigator.css'
import mainImage from '../Assets/pokemon.png'
import { Link } from 'react-router-dom';

export default function AppNavigator() {
  return (
    <div className='mainFrame'>
       <div className='navIcon'>
        <Link to ='/'>  <img src={mainImage} alt="myImage"/></Link>
      
      </div>
      
    </div>
  )
}
