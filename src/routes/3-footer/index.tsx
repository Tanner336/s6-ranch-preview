import { IconFacebook, IconInstagram } from "../../ui/icons";

export function Footer() {
    return (<>
        <footer>
            <div className="footer">
                <ContactUsForm />
                <Credencials />
                <Copyright />
            </div>

            <div id="fb-root" />
        </footer>

    </>);
}

function Credencials() {
    return (
        <div className="credentials">
            <div className="logo">
                <img className="logo-img" alt="" src="./src/assets/img/logo-sm.png" />
                <p className="logo-text">
                    <a href="/">S6 Ranch</a>
                </p>
            </div>
        </div>
    );
}

function Copyright() {
    return (
        <div className="contact">
            <div className="social-media-icons">
                <a
                    href="https://www.facebook.com/profile.php?id=100087839483211&mibextid=LQQJ4d"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconFacebook />
                </a>

                <a
                    href="https://www.facebook.com/profile.php?id=100087839483211&mibextid=LQQJ4d"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconInstagram />
                </a>

                {/* Email */}
                {/* <svg width="35" height="35" version="1.1" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <a href="mailto: tcna@tornjakclub.com">
                        <g fill="none" fill-rule="evenodd" id="black" stroke="none" stroke-width="1">
                            <g id="mail">
                                <path
                                    d="M30,60 C46.5685433,60 60,46.5685433 60,30 C60,13.4314567 46.5685433,0 30,0 C13.4314567,0 0,13.4314567 0,30 C0,46.5685433 13.4314567,60 30,60 Z"
                                    fill="#333333" />
                                <path
                                    d="M30,33.4615385 L47.3076923,18.4615385 L12.6923077,18.4615385 L30,33.4615385 Z M25.3251765,31.8010536 L30,35.6382399 L34.6015813,31.8010536 L47.3076923,42.6923077 L12.6923077,42.6923077 L25.3251765,31.8010536 Z M11.5384615,41.5384615 L11.5384615,19.6153846 L24.2307692,30.5769231 L11.5384615,41.5384615 Z M48.4615385,41.5384615 L48.4615385,19.6153846 L35.7692308,30.5769231 L48.4615385,41.5384615 Z"
                                    fill="#d5a269" />
                            </g>
                        </g>
                    </a>
                </svg> */}
            </div>
            
            <p className="small-text">2601 Eden Plains Road</p>
            <p className="small-text">Knightsen, CA 94548</p>
            <p className="small-text">
                <a href="https://sitellama.io/" target="_blank">
                    Site by Sitellama
                </a>
            </p>
        </div>
    );
}

function ContactUsForm() {
    return (
        <section id="contact-us">
            <div className="contact-us-wrapper">
                <div className="form-container">
                    <div className="form-title">
                        <h2>Contact Us</h2>
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
                                defaultValue="a04f96ee-90d4-419a-98a1-81e984f2f3de" />
                            <input
                                type="hidden"
                                name="subject"
                                defaultValue="New Submission from Web3Forms" />
                            <input
                                type="checkbox"
                                name="botcheck"
                                id=""
                                style={{ display: "none" }} />
                            <div className="form-names form-row">
                                <div className="form-names-first">
                                    <label htmlFor="fname">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="first_name"
                                        placeholder="John Doe"
                                        required />
                                    <div className="empty-feedback invalid-feedback">
                                        Please provide your name.
                                    </div>
                                </div>
                                {/* <div class="form-names-last">
                            <label for="lname">Last Name</label>
                            <input type="text" name="last_name" id="lname" placeholder="Doe" required />
                            <div class="empty-feedback invalid-feedback">
                            Please provide your last name.
                            </div>
                            </div> */}
                            </div>
                            <div className="form-email form-row">
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="you@email.com"
                                        required />
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
                                    defaultValue={""} />
                                <div className="empty-feedback invalid-feedback">
                                    Please enter a message.
                                </div>
                            </div>
                            <div className="form-submit form-row">
                                <button type="submit" className="main-btn">
                                    Send Message
                                </button>
                            </div>
                            <p id="result" />
                        </form>
                    </div>
                </div>
                <div className="map-container">
                    <div className="map-wrapper">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.579481420945!2d-121.6641405241076!3d37.963603771938374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fff8d308e2a31%3A0xd62788201a0e2933!2sS6%20Ranch!5e0!3m2!1sen!2sus!4v1705364626387!5m2!1sen!2sus"
                            width={450}
                            height={450}
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </div>
        </section>
    );
}
