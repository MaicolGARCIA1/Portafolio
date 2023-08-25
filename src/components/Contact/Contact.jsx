import React from 'react'
import './Contact.css'

export default function () {
  return (
        
          <div className="contact-wrapper animated bounceInUp">
            <div className="contact-form">
              <p>CONTACT <span>US</span></p>
              <form action="">
                <p>
                  <label>Nombre Completo</label>
                  <input type="text" name="fullname" />
                </p>
                <p>
                  <label>Direccion de Correo Electronico</label>
                  <input type="email" name="email" />
                </p>
                <p>
                  <label>Número de teléfono</label>
                  <input type="tel" name="phone" />
                </p>
                <p>
                  <label>Asunto</label>
                  <input type="text" name="affair" />
                </p>
                <p className="block">
                  <label>Mensage</label>
                  <textarea name="message" rows="3"></textarea>
                </p>
                <p className="block">
                  <button>
                    Enviar
                  </button>
                </p>
              </form>
            </div>
            <div className="contact-info">
                <img src="https://miabogadolegal.es/wp-content/uploads/2022/10/contacto-abogados.jpeg" alt="" />
              <h4>Contáctenos</h4>
              <ul>
                <li><i className="fas fa-map-marker-alt"></i>Maicol García</li>
                <li><i className="fas fa-phone"></i> (111) 111 111 111</li>
                <li><i className="fas fa-envelope-open-text"></i> maicolstivengarciar@gmail.com</li>
              </ul>
              <p className='texto_contacto'> Estoy aquí para brindarte la ayuda que necesitas. Si tienes alguna pregunta, consulta o simplemente quieres charlar, no dudes en contactarme. Mi equipo y yo estamos ansiosos por escucharte y brindarte la mejor atención posible.</p>
            </div>
          </div>  
        )
      }
      
  