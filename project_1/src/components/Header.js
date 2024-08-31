import React from 'react'
import {
  Link
} from "react-router-dom";

export default function Header(props) {
  return (
    <div className='Header'>
      <div className='container'>
        <div className='Logo'>
          <img src='https://htmldemo.net/james/james/img/logo.png' alt=''/>
        </div>
        <div className='d-flex justify-content-end'>
          <div className='links'>
            <li type='none'><Link to="/" className='link'> Home </Link></li>
            <li type='none'><Link to="/about" className='link'>About</Link></li>
            <li type='none'><Link to="/blog" className='link'>Blog</Link></li>
          </div>
        </div>
      </div>
    </div>
  )
}
