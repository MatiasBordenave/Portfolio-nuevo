import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com';

const Contacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
      const [status, setStatus] = useState('');
      
      useEffect(() => {
        if (!status) return;
        const timeoutId = setTimeout(() => setStatus(''), 5000);
        return () => clearTimeout(timeoutId);
      }, [status]);
    
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
              <p className="contact-subtitle">¿Tienes una idea o proyecto? Hablemos.</p>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Nombre</label>
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
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                  ></textarea>
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
                </div>
              </form>
              {status && <p className="status-message">{status}</p>}
            </section>
        </div>
      );
}

export default Contacto