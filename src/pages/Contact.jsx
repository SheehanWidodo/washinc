// src/pages/Contact.jsx
import React from 'react';

function Contact() {
    const whatsappUrl = "bla bla bla"
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p>If you have any questions, feel free to reach out via WhatsApp.</p>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Chat with us on WhatsApp
      </a>
    </div>
  );
}

export default Contact;
