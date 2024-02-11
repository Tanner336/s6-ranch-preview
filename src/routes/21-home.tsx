import { HeaderBody } from "./1-header";

export function Home() {
    return (
        <main id="home">
            <section className="hero">
                <HeaderBody />
                <div className="hero-text">
                    <h1>S6 Ranch</h1>
                    <h1 className="lines title-small">
                        <span>Reining &amp; Performance Horses</span>
                    </h1>
                </div>
                <a className="main-btn" tabIndex={0} href="/pages/events.html">
                    <span className="main-btn-text">Our Services</span>
                </a>
            </section>
            
            <section className="quick-words">
                <div className="quick-words-wrapper">
                    <div className="quick-words-top">
                        <div className="quick-words-title">
                            <p className="title-small">Horsemenship</p>
                            <h2>With Integrity</h2>
                        </div>
                        <img
                            src="assets/img/horse-2.jpg"
                            alt="black and white colored tornjak"
                        />
                    </div>
                    <div className="quick-words-bottom">
                        <p className="text-block">
                            250 characters - See what our 10 acre ranch and NRHA Professional
                            trainers can offer you an your horse. See what our 10acre ranch and
                            NRHA Professional trainers can offer you and your horse. See what our
                            10 acre ranch and NRHA Professional trainers.
                        </p>
                        <p className="read-more">
                            <a className="line" href="/pages/about-breed.html">
                                read more
                            </a>
                        </p>
                    </div>
                </div>
            </section>
            <section className="card">
                <div className="card-wrapper one">
                    <div className="card-border">
                        <div className="card-text">
                            <p className="title-small">Meet Our</p>
                            <h2 className="lines">
                                <span>Trainers</span>
                            </h2>
                            <a className="main-btn" tabIndex={0} href="/pages/about-breed.html">
                                <span className="main-btn-text">more info</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper two">
                    <div className="card-border">
                        <div className="card-text">
                            <p className="title-small">Find</p>
                            <h2 className="lines">
                                <span>Lessions</span>
                            </h2>
                            <a className="main-btn" tabIndex={0} href="/pages/facilities.html">
                                <span className="main-btn-text">more info</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper three">
                    <div className="card-border">
                        <div className="card-text">
                            <p className="title-small">Equine</p>
                            <h2 className="lines">
                                <span>Breedeing</span>
                            </h2>
                            <a className="main-btn" tabIndex={0} href="/pages/breeders.html">
                                <span className="main-btn-text">more info</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="stats">
                <div className="stats-wrapper">
                    <div className="stats-inner-wrapper">
                        <div className="stats-set">
                            <div className="stats-text">
                                <p className="stats-number">5</p>
                                <p className="title-small">NRHA</p>
                                <p className="title-large">Members</p>
                            </div>
                        </div>
                        <div className="stats-set">
                            <div className="stats-text">
                                <p className="stats-number">6</p>
                                <p className="title-small">Ranch</p>
                                <p className="title-large">Horses</p>
                            </div>
                        </div>
                    </div>
                    <div className="stats-inner-wrapper">
                        <div className="stats-set">
                            <div className="stats-text">
                                <p className="stats-number">10</p>
                                <p className="title-small">Total</p>
                                <p className="title-large">Acres</p>
                            </div>
                        </div>
                        <div className="stats-set">
                            <div className="stats-text">
                                <p className="stats-number">25</p>
                                <p className="title-small">Barn</p>
                                <p className="title-large">Stalls</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="news">
                <div className="news-wrapper">
                    <div className="news-text">
                        <p className="title-small">Our Wonderful</p>
                        <h2>Ranch Family</h2>
                    </div>
                    <div className="news-tile-wrapper">
                        <div className="news-tile">
                            <div className="tile-stories">
                                <img
                                    src="assets/img/group-photo3.jpg"
                                    alt="large group of people gathered around a firepit"
                                />
                                <div className="news-tile-text">
                                    <h3 className="paragraph-large">Community is Everything</h3>
                                    <p className="text-block">
                                        Watching our students learn and grow is the heart of what we do.
                                        S6 Ranch invites people of every learning stage to participate
                                        in our coaching. We believe horshmenship is for all those who
                                        have the heart to try.
                                    </p>
                                    <p className="read-more">
                                        <a href="https://www.facebook.com/profile.php?id=100087839483211&mibextid=LQQJ4d">
                                            Join Us on Facebook
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                    id=""
                                    style={{ display: "none" }}
                                />
                                <div className="form-names form-row">
                                    <div className="form-names-first">
                                        <label htmlFor="fname">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="first_name"
                                            placeholder="John Doe"
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
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
