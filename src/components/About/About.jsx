import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className='container'> 
    <br />
        <img className='Img' src="https://i.pinimg.com/564x/a9/c7/33/a9c7332ef995349aa05e995cb99b647f.jpg" alt="" />
        <br /> <br /> <br /> <br /> <br /> <br /> 
      <div className='Texto'>
        <p>Hello, I'm Maicol García, a passionate programmer at just 16 years old!<br /> Ever since I discovered the fascinating world of technology, I've embarked <br />on an exciting journey towards creation and innovation. My heart beats to <br />the rhythm of code, and my mind lights up with every line I write. <br /> Web design? It's my ultimate passion! I love merging aesthetics with <br />functionality, breathing life into vibrant and captivating web pages.</p>
      </div>
      <br /> <br /> <br /> <br />
      <h5 className='Proj'>PROJECTS</h5>
      <br /> <br /> <br />

      <div className="projects-container">
  <div className="projects-grid">
    <div className="project-card">
      <img src="https://cdn.discordapp.com/attachments/1069604840734457901/1108738116832997397/blueasy.png" alt="Proyecto 1" />
      <div className="project-description">
      </div>
    </div>
    <div className="project-card">
      <img src="https://cdn.discordapp.com/attachments/1069604840734457901/1085953513948975174/Apptastico.png" alt="Proyecto 2" />
      <div className="project-description">
      </div>
    </div>
    <div className="project-card">
      <img src="https://cdn.discordapp.com/attachments/1069604840734457901/1077249845921849424/Plantilla_Bleux.png" alt="Proyecto 3" />
      <div className="project-description">
      </div>
    </div>
  </div>
</div>
      
    </div>
  );
}
