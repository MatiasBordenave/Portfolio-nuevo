import React, { useState } from 'react'
import emailjs from 'emailjs-com';

const Contacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
      const [status, setStatus] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
    
        // Configuración de EmailJS
        emailjs.sendForm('service_4xe8l6f', 'template_ik4cbhv', e.target, 'KMHcNTr4q0XHdmeir',
          )
          .then((result) => {
            setStatus('¡Mensaje enviado con éxito!');
            setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
          }, (error) => {
            setStatus('Hubo un error al enviar el mensaje. Intenta nuevamente.');
          });
      };
    
      return (
        <div>
            <div className='contacto-separator-wrapper'>
                <div className='contacto-separator'></div>
            </div>
            <section id="contact" className="contact-section">
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className="form-group">
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className="form-group">
                <label htmlFor="message">Mensaje:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                </div>
                <button type="submit">Enviar Mensaje</button>
            </form>
            {status && <p className="status-message">{status}</p>}
            </section>
        </div>
      );
}

export default Contacto