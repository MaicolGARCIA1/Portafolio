import React from 'react'
import './Cards.css'

export const Cards = () => {
  return (
    <div className='Card'>
        <br />
        <br />
        <div className='Face Front'>
            <img src="https://www.ceupe.com/images/easyblog_articles/2459/b2ap3_large_la-programacin.jpg" alt="" />
            <h3>Programador</h3>
        </div>
        <div className='Face Back'>
            <h5>Programador</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo perspiciatis inventore?</p>
            <div className='Link'>
                <a href="#">Details</a>
            </div>
        </div>
    </div>
  )
}
