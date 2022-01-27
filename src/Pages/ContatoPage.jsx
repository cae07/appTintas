import React from 'react';
import '../CSS/contatoPage.css';
import {
  Email,
  GitHub,
  GitLab,
  Linkedin,
  Whatsapp
} from '../Helpers';

function ContatoPage() {
  return (
    <section className="contact-container">
      <h1>Contatos</h1>
      <section className="contact">
        <Linkedin />
        <GitHub />
        <GitLab />
        <Whatsapp />
        <Email />
      </section>
    </section>
  );
}

export default ContatoPage;
