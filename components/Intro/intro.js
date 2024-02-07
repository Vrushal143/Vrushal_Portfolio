import React from 'react'
import './intro.css';
import bg from '../../assets/IMG_7573-removebg-preview.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';
const intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
        <span className='hello'>Hello,</span >
         <span className='introText'>I'm <span className='introName'>Vrushal</span><br/>Website Designer</span>
         <p className='introPara'> I am a skilled web designer with exprience in creating<br/> visually appealing and user friendly website.</p>
             <Link > <button className='btn'><img src={btnImg} alt='hire me' className='btnImg' />Hire Me</button></Link>
        </div>
        <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default intro;
