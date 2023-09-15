import React from 'react'
import './Section.css'

export const Section = () => {
  return (
    <section className='Primera_parte'>
        <br />
        <h2>Hello, It´s Me</h2>
        <h1>Maicol García</h1>
        <h4>And I'm a <span>Frontend I</span></h4>
        <br />
        <p className='ParrafoP'>"Hello! I'm Maicol, a 16-year-old enthusiast of frontend web design. <br />While I lack professional experience, my passion and creativity drive <br /> me to learn and grow in the world of digital design."</p>
        <div className='imagen'>
            <img className='imagen1' src="https://media.discordapp.net/attachments/1101500368397029496/1146085622138810549/57e12a7c44671aef184cd66f1504230b.png?width=732&height=549" alt="" />
            <img className='imagen2' src="https://media.discordapp.net/attachments/1101500368397029496/1146088328328912927/saturno.png?width=549&height=549" alt="" />
        </div>
        <div className='logoo'>
        <a href="https://web.facebook.com/maicolstiven.palaciogarcia.3/" target="_blank" rel="noopener noreferrer">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGIJv4143r98mksyd2PoYhnKqRY1xtRBjtvu_0xU&s" alt="Facebook" />    
        </a>
        <a href="https://www.instagram.com/_maicol_garcia__/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png" alt="Instagram" />
    </a>
        </div>

        <br />
<section className='Habilidades'>
    <h3 className='text-center'>Skills</h3>
    <ul>
        <li>Programming Languages: HTML, CSS, JavaScript</li> <br />
        <img src="https://cdn-icons-png.flaticon.com/128/174/174854.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="" />
        <br /><br />
        <li>Technologies: React</li>
        <br />
        <img src="https://cdn-icons-png.flaticon.com/128/753/753244.png" alt="" />
        <br /> <br />
        <li>Tools: Visual Studio Code, GitHub </li> <br />
        <img className='Visual' src="https://cdn-icons-png.flaticon.com/128/9692/9692757.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/128/11104/11104255.png" alt="" />
        <br /> <br />
    </ul>
</section>
    <div className='Slider'>
        <img src="https://i.pinimg.com/originals/61/8f/08/618f083c61a7460ce0a6064319af41bd.gif" alt="" />
        <img src="https://i.pinimg.com/originals/9b/fe/d5/9bfed5ee383b7b9f11ee3caea308d8a0.gif" alt="" />
        <img src="https://i.pinimg.com/originals/db/ab/2f/dbab2f3be06e768e77a85f175e577955.gif" alt="" />
    </div>

    </section>  
    
  )
}
