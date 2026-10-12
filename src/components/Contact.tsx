import { useState } from 'react';
import type { FormEvent } from 'react';
import './Contact.css';

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('_subject', String(formData.get('subject')));
    formData.append('_replyto', String(formData.get('email')));
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');
    setSending(true);
    setSent(false);
    setError(false);

    try {
      const response = await fetch('https://formsubmit.co/ajax/abdulbaset1878@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (!response.ok) throw new Error('Message delivery failed');
      setSent(true);
      form.reset();
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-copy">
          <span className="contact-kicker">Contact / Let&apos;s Work Together</span>
          <h2>Have a project<br />in mind?</h2>
          <p>
            Contact me to discuss your next project, collaboration, or idea. I am always open to thoughtful work and new creative challenges.
          </p>
          <div className="contact-rule" aria-hidden />
          <span className="contact-edition">The Daily Portfolio · Open for correspondence</span>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your name
            <input name="name" type="text" placeholder="Jane Doe" required />
          </label>
          <label>
            Your email
            <input name="email" type="email" placeholder="jane@example.com" autoComplete="email" required />
          </label>
          <label>
            Subject
            <input name="subject" type="text" placeholder="A new assignment" required />
          </label>
          <label>
            Your message
            <textarea name="message" rows={6} placeholder="Write your message here..." required />
          </label>
          <button type="submit" className="contact-submit" disabled={sending}>
            {sending ? 'Sending...' : 'Send dispatch'} <span aria-hidden>↗</span>
          </button>
          {sent && <p className="contact-status" role="status">Your dispatch has been filed. Thank you.</p>}
          {error && <p className="contact-status contact-error" role="alert">The dispatch could not be sent. Please try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
