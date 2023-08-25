import React from 'react'
import './About.css'

export default function () {
  return (
    <div className='container'>
      <br />
      <h3>ABO<span>UT</span></h3>
      <div className='programador'>
      <img src="https://i.pinimg.com/736x/1a/ad/26/1aad26e24060499974d848369d1b946c.jpg" alt="" />
      </div>
      <div className='Texto'>
        <p>Hello, I'm Maicol García, a passionate programmer at just 16 years old!<br /> Ever since I discovered the fascinating world of technology, I've embarked <br />on an exciting journey towards creation and innovation. My heart beats to <br />the rhythm of code, and my mind lights up with every line I write. <br /> Web design? It's my ultimate passion! I love merging aesthetics with <br />functionality, breathing life into vibrant and captivating web pages.</p>
      </div>
      <div className='Card'>
        <br />
        <br />
        <div className='Face Front'>
            <img src="https://www.ceupe.com/images/easyblog_articles/2459/b2ap3_large_la-programacin.jpg" alt="" />
            <h3>Programador</h3>
        </div>
        <div className='Face Back'>
            <h3>Programador</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo perspiciatis inventore?</p>
            <div className='Link'>
                <a href="#">Details</a>
            </div>
        </div>
    </div>
    </div>
  )
}
