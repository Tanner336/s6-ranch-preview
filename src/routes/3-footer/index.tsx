import { IconFacebook, IconInstagram } from "../../ui/icons";

export function Footer() {
    return (<>
        <footer>
            <div className="footer">
                <ContactUsForm />
                <div className="footer-socials">
                    <Credencials />
                    <Copyright />
                </div>
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
                {/* icon family: https://www.iconfinder.com/iconsets/free-social-media-5 */}
                {/* facebook SVG */}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/profile.php?id=100087839483211&mibextid=LQQJ4d"
                >
                    <svg viewBox="0 0 32 32" width={35} height={35} fill="#30B4A9">
                        <path d="M13.9 24.12h3.35V16h2.24l.3-2.8h-2.54v-1.4c0-.73.07-1.12 1.12-1.12h1.4v-2.8h-2.24c-2.7 0-3.64 1.36-3.64 3.64v1.68h-1.68V16h1.68v8.12z" />
                        <path d="M16 1c8.27 0 15 6.73 15 15s-6.73 15-15 15S1 24.27 1 16 7.73 1 16 1m0-1a16 16 0 1 0 0 32 16 16 0 0 0 0-32z" />
                    </svg>
                </a>
                {/* istagram SVG */}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/s6horses/"
                >
                    <svg viewBox="0 0 32 32" width={35} height={35} fill="#30B4A9">
                        <path d="M21.87 8.17H10.13c-1.11 0-1.96.85-1.96 1.96v11.74c0 1.11.85 1.96 1.96 1.96h11.74c1.11 0 1.96-.85 1.96-1.95V10.13c0-1.11-.85-1.96-1.96-1.96zm-5.86 4.75a3.1 3.1 0 0 1 3.15 3.05A3.1 3.1 0 0 1 16 19.02a3.1 3.1 0 0 1-3.14-3.05A3.1 3.1 0 0 1 16 12.92zm5.86 8.47c0 .34-.14.49-.49.49H10.61c-.34 0-.49-.15-.49-.5v-6.85l1.22.27c-.13.42-.2.87-.2 1.34a4.8 4.8 0 0 0 4.87 4.72 4.8 4.8 0 0 0 4.87-4.72c0-.47-.07-.92-.2-1.34l1.2-.27v6.86zm0-8.82c0 .27-.22.5-.49.5h-1.95a.49.49 0 0 1-.5-.5v-1.96c0-.27.22-.48.5-.48h1.95c.28 0 .5.21.5.48v1.96z" />
                        <path d="M16 1c8.27 0 15 6.73 15 15s-6.73 15-15 15S1 24.27 1 16 7.73 1 16 1m0-1a16 16 0 1 0 0 32 16 16 0 0 0 0-32z" />
                    </svg>
                </a>
            </div>
            <div className="">
                <p className="small-text">2601 Eden Plains Road</p>
                <p className="small-text">Knightsen, CA 94548</p>
                <p className="small-text">
                    <a href="https://sitellama.com/" target="_blank">
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
                                defaultValue="a04f96ee-90d4-419a-98a1-81e984f2f3de"
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
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.579481420945!2d-121.6641405241076!3d37.963603771938374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fff8d308e2a31%3A0xd62788201a0e2933!2sS6%20Ranch!5e0!3m2!1sen!2sus!4v1705364626387!5m2!1sen!2sus"
                            width={450}
                            height={450}
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
