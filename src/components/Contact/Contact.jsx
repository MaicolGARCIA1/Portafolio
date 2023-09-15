import React from 'react'
import './Contact.css'

export default function () {
  return (
        
          <div className="contact-wrapper animated bounceInUp">
            <div className="contact-form">
              <p>CONTACTA <span>ME</span></p>
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
                <img className='ImagenContacto' src="https://camo.githubusercontent.com/dbd02eb60eede5c8e12d03bb1531f7df43acf13a3d8a90bccbda7aa220799a1d/68747470733a2f2f74342e667463646e2e6e65742f6a70672f30332f31332f34302f34352f3336305f465f3331333430343534315f6539595a33706874366f45456b4d5875687854626f71584132423253684e6e432e6a7067" alt="" />
              <br />
              <h4>Contáctame</h4>
              <ul>
                <li><i className="fas fa-map-marker-alt"></i>Maicol García</li>
                <li><i className="numeroC"></i> 3184475220</li>
                <li><i className="fas fa-envelope-open-text"></i> maicolstivengarciar@gmail.com</li>
              </ul>
              <p className='texto_contacto'> Estoy aquí para brindarte la ayuda que necesitas. Si tienes alguna pregunta, consulta o simplemente quieres charlar, no dudes en contactarme. Yo estaré ansioso por escucharte y brindarte la mejor atención posible.</p>
            </div>
          </div>  
        )
      }
      
  