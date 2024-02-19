import { Helmet } from 'react-helmet-async';
import { SEO } from './SEO';

export function Facility() {
    return (
        <main id="facility">
            <SEO title="S6 Ranch Facility" description="Horse stables and accomodations for indoor and outdoor horse training" href="/facility" />
            {/* <Helmet>
                <link rel='canonical' href='https://www.tornjak.org/facility' />
                <title>Learning React Helmet!</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
                <meta name="title" content="Default Title" data-react-helmet="true"></meta>
            </Helmet> */}

            <main id="facility">
                <section className="hero">
                    <div className="page-title">
                        <h3 className="title-small">Explore</h3>
                        <h2>Our Facility</h2>
                    </div>
                </section>
                <section className="overlap">
                    <div className="overlap-quote">
                        <div className="offset-card">
                            <img
                                src="../assets/img/grounds.jpg"
                                alt="black and white photo of a tornjak standing in tall grass"
                            />
                        </div>
                        {/* <div class="quote">
              <h3 class="title-small">10 Acres</h3>
              <p class="title-large">Your Story</p>
              <p class="read-more"><a href="/pages/services.html">Begins Here</a></p>
          </div> */}
                    </div>
                    <div className="two-col-text-block">
                        <p>
                            We have indoor and outdoor arena to accomodate training in all types of
                            weather. A large pen for reining, cutting and roping. Lots of space for
                            multiple riders. We also have barrels and cones for practicing patterns.
                            231 characters
                        </p>
                        <p>
                            {" "}
                            We have have 12 stalls for our training clients, we do not offer
                            boarding. We have a large pasture for turn out and a round pen for
                            starting colts. Younger riders are welcome to come and learn the basics
                            of riding and horsemanship. 246 characters
                        </p>
                        <p>
                            We have indoor and outdoor arena to accomodate training in all types of
                            weather. A large pen for reining, cutting and roping. Lots of space for
                            multiple riders. We also have barrels and cones for practicing patterns.
                            231 characters
                        </p>
                        <p>
                            We have have 12 stalls for our training clients, we do not offer
                            boarding. We have a large pasture for turn out and a round pen for
                            starting colts. Younger riders are welcome to come and learn the basics
                            of riding and horsemanship. 246 characters
                        </p>
                    </div>
                </section>
                {/* <section class="overlap">
      <div class="overlap-quote">
          <div class="offset-card">
              <h3 class="title-small">Tornjak</h3>
              <h2 class="line">Temperment</h2>
              <p>
                  Tornjaks are livestock guardian dogs, or LGDs, and possess temperaments uniquely suited to their
                  vital role as protectors of herds and flocks. These dogs display unwavering loyalty,
                  intelligence, and calm disposition. In the presence of livestock, they display a natural
                  instinct to protect, forming strong bonds with the animals they guard. Tornjaks are known for
                  their independence, self-confidence, and exceptional problem-solving abilities, making them
                  adept at assessing threats and taking appropriate action. Despite their imposing presence, they
                  are typically gentle and patient, particularly with those they deem under their care. However,
                  they can be wary of strangers, making them effective guardians against potential threats. The
                  Tornjak's temperament, with its combination of vigilance, courage, and an underlying gentleness,
                  is a testament to their remarkable suitability for the essential role of safeguarding their
                  domain.</p>
              <p class="read-more"><a class="line" href="/pages/services.html">View Trainers</a></p>
          </div>

          <div class="quote">
              <img src="../assets/img/horse-2.jpg"
                  alt="black and white photo of a tornjak standing in tall grass">
              <p class="title-small">
                  unwavering loyalty
              </p>
          </div>
      </div>
  </section> */}
                <section className="cta-text-block">
                    <div className="stats">
                        {/* <h2>Stay in the Loop with us on facebook</h2> */}
                        <h3 className="title-small">Stay in the Loop with us on facebook</h3>
                        <hr />
                        <p className="read-more">
                            <a href="/pages/about-breed.html">Connect Now</a>
                        </p>
                    </div>
                </section>
                <section className="squares">
                    {/* no image */}
                    <div className="square bg one border hide-on-mobile">
                        <div className="content">
                            <div className="table">
                                <div className="table-cell">
                                    <div className="card-text">
                                        <p className="title-small">Tour our</p>
                                        <h2 className="lines">
                                            <span>Gallery</span>
                                        </h2>
                                        {/* <p>Our ranch offered all the amenities needed for a full training experience. Our large
                              open area is always well maintained. We have a round pen and 25 stalls for training
                              participants.</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* history */}
                    <div className="square bg two">
                        <div className="content">
                            <div className="table">
                                {/* <div class="table-cell">
                      <a class="main-btn" tabindex="0" href="./articles/history.html">
                          <span class="main-btn-text">History</span>
                      </a>
                  </div> */}
                            </div>
                        </div>
                    </div>
                    {/* health */}
                    <div className="square bg three">
                        <div className="content">
                            <div className="table">
                                {/* <div class="table-cell">
                      <a class="main-btn" tabindex="0" href="./articles/health.html">
                          <span class="main-btn-text">Health</span>
                      </a>
                  </div> */}
                            </div>
                        </div>
                    </div>
                    {/* appearance */}
                    <div className="square bg four">
                        <div className="content">
                            <div className="table">
                                {/* <div class="table-cell">
                      <a class="main-btn" tabindex="0" href="./articles/appearance.html">
                          <span class="main-btn-text">Appearance</span>
                      </a>
                  </div> */}
                            </div>
                        </div>
                    </div>
                    {/* grooming */}
                    <div className="square bg five">
                        <div className="content">
                            <div className="table">
                                {/* <div class="table-cell">
                      <a class="main-btn" tabindex="0" href="./articles/grooming.html">
                          <span class="main-btn-text">Grooming</span>
                      </a>
                  </div> */}
                            </div>
                        </div>
                    </div>
                    {/* exercise */}
                    <div className="square bg six">
                        <div className="content">
                            <div className="table">
                                {/* <div class="table-cell">
                      <a class="main-btn" tabindex="0" href="./articles/exercise.html">
                          <span class="main-btn-text">Exercise</span>
                      </a>
                  </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="square bg seven">
                        <div className="content">
                            <div className="table"></div>
                        </div>
                    </div>
                    <div className="square bg eight">
                        <div className="content">
                            <div className="table"></div>
                        </div>
                    </div>
                    <div className="square bg nine">
                        <div className="content">
                            <div className="table"></div>
                        </div>
                    </div>
                </section>
                <section id="testimonial" className="testimonial">
                    <div className="section-title">
                        <h3 className="title-small">Kind Words</h3>
                        <h2 className="title-large">From Our Community</h2>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-copy">
                            <div className="arrow-prev" tabIndex={0} />
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
                                sapiente necessitatibus sequi ad minima! Similique rem libero commodi,
                                earum impedit et eaque voluptatem nobis eveniet nihil veritatis modi a
                                laborum!
                            </p>
                            <div className="arrow-next" tabIndex={0} />
                            <p className="testimonial-name">- John Doe</p>
                        </div>
                    </div>
                </section>
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
            </main>


            <Squares />

        </>
    );
}

function Squares() {
    return (
        <section className="squares">
            {/* no image */}
            <div className="square bg one border hide-on-mobile">
                <div className="content">
                    <div className="table">
                        <div className="table-cell">
                            <div className="card-text">
                                <p className="title-small">About</p>
                                <h2 className="lines">
                                    <span>Tornjaks</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* history */}
            <div className="square bg two">
                <div className="content">
                    <div className="table">
                        <div className="table-cell">
                            <a className="main-btn" tabIndex={0} href="./articles/history">
                                <span className="main-btn-text">History</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* health */}
            <div className="square bg three">
                <div className="content">
                    <div className="table">
                        <div className="table-cell">
                            <a className="main-btn" tabIndex={0} href="./articles/health">
                                <span className="main-btn-text">Health</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* appearance */}
            <div className="square bg four">
                <div className="content">
                    <div className="table">
                        <div className="table-cell">
                            <a className="main-btn" tabIndex={0} href="./articles/appearance">
                                <span className="main-btn-text">Appearance</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* grooming */}
            <div className="square bg five">
                <div className="content">
                    <div className="table">
                        <div className="table-cell">
                            <a className="main-btn" tabIndex={0} href="./articles/grooming">
                                <span className="main-btn-text">Grooming</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* exercise */}
            <div className="square bg six">
                <div className="content">
                    <div className="table">
                        <div className="table-cell">
                            <a className="main-btn" tabIndex={0} href="./articles/exercise">
                                <span className="main-btn-text">Exercise</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
