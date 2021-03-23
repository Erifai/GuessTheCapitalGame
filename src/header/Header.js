import React from 'react'
import './Header.css'
import fblogo from './icons/fb.png'
import linkedinlogo from './icons/linkedin.png'
const Header = () => 
<div  className='title'>
    <h1 className='t'>WELCOME TO PENDU GAME</h1>
    <a href="https://www.facebook.com/eriifai/">
        <img src={fblogo} alt="fb logo" className="imagefb" />
    </a>
    <a href="https://www.linkedin.com/in/mohammed-erifai-maamir-566316176/">
        <img src={linkedinlogo} alt="linked in logo" className="imagein"/>
    </a>
</div>

export default Header