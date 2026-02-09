import { useState } from 'react';
import emailjs from 'emailjs-com';


export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: `Sender Email: ${form.email}\n\n${form.message}`,
      to_email: 'jamesdillon_@outlook.com',
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setAlert({ show: true, type: 'success', message: 'Thank you for contacting!' });
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setAlert({ show: false, type: '', message: '' }), 4000);
      })
      .catch((error) => {
        setAlert({ show: true, type: 'danger', message: 'Failed to send message. Please try again later.' });
        setTimeout(() => setAlert({ show: false, type: '', message: '' }), 4000);
        console.error('EmailJS error:', error);
      });
  };

  return (
    <div style={{ padding: '0 2rem 2rem 2rem', width: '90vw', maxWidth: 'none', margin: '0 auto', fontFamily: 'Roboto Mono, monospace' }}>
      <h2>Contact</h2>
      {alert.show && (
        <div className={`alert alert-${alert.type} mt-3`} role="alert">
          {alert.message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <label htmlFor="name" className="form-label mb-0" style={{ minWidth: 70 }}>Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ flex: 1, minWidth: 0, width: '100%' }}
            placeholder='John Smith'
          />
        </div>
        <div className="mb-3" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <label htmlFor="email" className="form-label mb-0" style={{ minWidth: 70 }}>Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder='example@outlook.com'
            style={{ flex: 1, minWidth: 0, width: '100%' }}
          />
        </div>
        <div className="mb-3" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
          <label htmlFor="message" className="form-label mb-0" style={{ minWidth: 70, marginTop: '0.5rem' }}>Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            style={{ flex: 1, minWidth: 0, width: '100%' }}
          />
        </div>
        <button type="submit" className="btn btn-secondary" style={{ width: 140 }}>Contact</button>
      </form>
    </div>
  );
}
