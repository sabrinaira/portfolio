import React from 'react';
import contactData from '../data/contact.json';

export const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <h2 className='title'>Connect with me!</h2>
      <nav>
        {contactData.map((contact, index) => (
          <a
            href={contact.link}
            target='_blank'
            className='contact-link'
            key={index}
          >
            {contact.platform}
          </a>
        ))}
      </nav>
    </section>
  );
};
