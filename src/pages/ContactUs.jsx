import React from "react";

export default function ContactUs() {
  return (
    <main className="site-main contact-page">
      <section className="section">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="text-muted">Questions or Feedback? Contact us Here!</p>
          <form action="https://api.web3forms.com/submit" className="form card" method="POST">
            <input name="access_key" type="hidden" value="86becab1-b62c-408c-b1f2-04fcalf70601" />
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Your Name <span aria-hidden="true">:</span></label>
                <input id="name" name="name" placeholder="John Doe" required type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email <span aria-hidden="true">:</span></label>
                <input id="email" name="email" placeholder="you@example.com" required type="email" />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="message">Message <span aria-hidden="true">:</span></label>
              <textarea id="message" name="message" placeholder="How can we help?" required></textarea>
            </div>
            <input name="redirect" type="hidden" value="https://web3forms.com/success" />
            <div className="form-actions">
              <button className="btn btn-primary" type="submit">Submit Form</button>
            </div>
          </form>
          <h1>Find our location Here!</h1>
        </div>

        <iframe
          id="map"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26471.19476582874!2d-81.00729801365654!3d33.969426504724126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8baef1321f791%3A0x83f44871f4a3c265!2sWilliams-Brice%20Stadium!5e0!3m2!1sen!2sus!4v1760672580637!5m2!1sen!2sus"
        />
      </section>
    </main>
  );
}