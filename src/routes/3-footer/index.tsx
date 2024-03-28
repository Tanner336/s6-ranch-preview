import { Suspense } from "react";
import { IconFacebook, IconInstagram } from "../../ui/icons";
import logoImg from "@/assets/img/logo-med.png";

export function Footer() {
  return (
    <>
      <ContactUsForm />
      <footer>
        <div className="footer">
          <Credentials />
          <Copyright />
        </div>
      </footer>
    </>
  );
}

function Credentials() {
  return (
    <div className="credentials">
      <div className="logo">
        <img className="logo-img" alt="" src={logoImg} />
        <p className="logo-text">
          <a href="/">Ranch</a>
        </p>
      </div>
    </div>
  );
}

function Copyright() {
  return (
    <div className="contact">
      <div className="social-media-icons">
        {/* icon family: https://www.iconfinder.com/iconsets/free-social-media-5 */}

        <a
          href="https://www.facebook.com/profile.php?id=100087839483211&mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="S6 Ranch Facebook page"
        >
          <IconFacebook />
        </a>

        <a
          href="https://www.instagram.com/s6horses/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="S6 Ranch Instagram page"
        >
          <IconInstagram />
        </a>
      </div>

      <div className="">
        <p className="small-text">2601 Eden Plains Road</p>
        <p className="small-text">Knightsen, CA 94548</p>
        <p className="small-text">
          <a
            href="https://sitellama.com/"
            target="_blank"
          >
            Site by Sitellama
          </a>
        </p>
      </div>
    </div>
  );
}

function ContactUsForm() {
  return (
    <section id="contact-us">
      <div className="contact-us-wrapper">
        <div className="form-container">
          <div className="form-title">
            <h2>Contact Us!</h2>
          </div>

          <div className="form-fields">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              id="form"
              className="needs-validation"
              noValidate
            >
              <input
                type="hidden"
                name="access_key"
                defaultValue="ab14b2b0-1595-418f-bf11-e24fd575dcf2"
              />
              <input
                type="hidden"
                name="subject"
                defaultValue="New Submission from Web3Forms"
              />
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: "none" }}
              />
              <div className="form-names form-row">
                <div className="form-names-first">
                  <label htmlFor="fname">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="first_name"
                    placeholder="First and Last Name"
                    required
                  />
                  <div className="empty-feedback invalid-feedback">
                    Please provide your name.
                  </div>
                </div>
              </div>
              <div className="form-email form-row">
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@email.com"
                    required
                  />
                  <div className="empty-feedback">
                    Please provide your email address.
                  </div>
                  <div className="invalid-feedback">
                    Please provide a valid email address.
                  </div>
                </div>
              </div>
              <div className="form-message form-row">
                <label htmlFor="message">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  required
                  defaultValue={""}
                />
                <div className="empty-feedback invalid-feedback">
                  Please enter a message.
                </div>
              </div>
              <div className="form-submit form-row">
                <button className="lines" type="submit">
                  Send
                </button>
              </div>
              <p id="result" />
            </form>
          </div>
        </div>

        <div className="map-container">
          <div className="map-wrapper">
            <Suspense fallback={<div>Loading...</div>}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.579481420945!2d-121.6641405241076!3d37.963603771938374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fff8d308e2a31%3A0xd62788201a0e2933!2sS6%20Ranch!5e0!3m2!1sen!2sus!4v1705364626387!5m2!1sen!2sus"
                title="map of S6 Ranch location"
                width={450}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
