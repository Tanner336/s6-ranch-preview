import { Link } from "react-router-dom";
import { SEO } from "./SEO";

export function Services() {
    return (
        <>
            <SEO title="S6 Ranch Services" description="Services offered" href="/services" />

            <main id="service">
                <section className="hero">
                    <div className="two-col">
                        <div className="" style={{ maxWidth: 900, backgroundColor: "#1f1f1f" }}>
                            <div
                                className=""
                                style={{
                                    display: "flex",
                                    textAlign: "left",
                                    justifyContent: "space-between",
                                    padding: "3rem"
                                }}
                            >
                                <div className="">
                                    <h3 className="title-small">Riding</h3>
                                    <h2>Price List</h2>
                                </div>

                                <p style={{ width: "60%" }}>
                                    In terms of appearance, these large and sturdy dogs boast a
                                    well-muscled frame, a thick double coat that offers protection from
                                    harsh weather, and a striking presence that exudes strength and
                                    resilience. Tornjaks are not only a testament to their rich history
                                    but also cherished companions for those who appreciate their unique
                                    blend of heritage and temperament.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="trainers">
                    <div className="trainers">
                        <div className="section-title">
                            <h3 className="title-small">Meet</h3>
                            <h2 className="title-large">Our Trainers</h2>
                        </div>

                        <div className="img-text-box trainer-one">
                            <div className="col-text">
                                <h3 className="title-small">Expert Reiner</h3>
                                <h2>Kristen Marrow</h2>
                                <p>
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                    suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
                                    autem vel eum iriure dolor in hendrerit in vulputate velit esse
                                    molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                                    vero eros et accumsan et iusto odio dignissim qui blandit praesent
                                    luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                                </p>
                                <p>
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                    suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
                                    autem vel eum iriure dolor in hendrerit in vulputate velit esse
                                    molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                                    vero eros et accumsan et iusto odio dignissim qui blandit praesent
                                    luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                                </p>
                            </div>
                            <div className="col-image" />
                        </div>

                        <div className="img-text-box trainer-two">
                            <div className="col-image reverse" />
                            <div className="col-text">
                                <h3 className="title-small">Trainer Two</h3>
                                <h2>Josh Johnson</h2>
                                <p>
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                    suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
                                    autem vel eum iriure dolor in hendrerit in vulputate velit esse
                                    molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                                    vero eros et accumsan et iusto odio dignissim qui blandit praesent
                                    luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                                </p>
                            </div>
                        </div>

                        <div className="secondary-details">
                            <p>
                                1752 Characters - Lorem ipsum dolor sit amet consectetur, adipisicing
                                elit. Atque illo optio suscipit dicta deleniti eaque a, consequatur
                                incidunt porro laboriosam provident libero doloremque ratione vitae
                                quo sunt nam, tempora adipisci. Veritatis, aut sed, impedit deleniti
                                officia rem dicta quo ducimus ullam totam ut beatae quas? Natus nulla
                                odio aperiam rerum, magni deleniti blanditiis in eveniet facilis.
                                Adipisci, illo fugit? Aspernatur. Animi quam corrupti sunt enim labore
                                suscipit voluptatibus soluta porro eveniet sed temporibus harum
                                laudantium quisquam sapiente perspiciatis quae, aut libero tenetur!Nam
                                liber tempor cum soluta nobis eleifend option congue nihil imperdiet
                                doming id quod mazim placerat facer possim assum. Typi non habent
                                claritatem insitam; est usus legentis in iis qui facit eorum
                                claritatem. Investigationes demonstraverunt lectores legere me lius
                                quod ii legunt saepius acilisis at vero eros et accumsan et iusto odio
                                dignissim qui blandit praesent luptatum. Nam liber tempor cum soluta
                                nobis eleifend option congue nihil imperdiet doming id quod mazim
                                placerat facer possim assum. Typi non habent claritatem insitam; est
                                usus legentis in iis qui facit eorum claritatem. Investigationes
                                demonstraverunt lectores legere me lius quod ii legunt saepius
                                acilisis at vero eros et accumsan et iusto odio dignissim qui blandit
                                praesent luptatum. Nam liber tempor cum soluta nobis eleifend option
                                congue nihil imperdiet doming id quod mazim placerat facer possim
                                assum. Typi non habent claritatem insitam; est usus legentis in iis
                                qui facit eorum claritatem. Investigationes demonstraverunt lectores
                                legere me lius quod ii legunt saepius acilisis at vero eros et
                                accumsan et iusto odio dignissim qui blandit praesent luptatum.
                            </p>
                            <hr />
                        </div>
                    </div>
                </section>
                <section className="overlap">
                    <div className="overlap-quote">
                        <div className="offset-card">
                            <h3 className="title-small">Service</h3>
                            <h2 className="line">Horses for Sale</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque illo
                                optio suscipit dicta deleniti eaque a, consequatur incidunt porro
                                laboriosam provident libero doloremque ratione vitae quo sunt nam,
                                tempora adipisci. Veritatis, aut sed, impedit deleniti officia rem
                                dicta quo ducimus ullam totam ut beatae quas? Natus nulla odio aperiam
                                rerum, magni deleniti blanditiis in eveniet facilis. Adipisci, illo
                                fugit? Aspernatur. Animi quam corrupti sunt enim labore suscipit
                                voluptatibus soluta porro eveniet sed temporibus harum laudantium
                                quisquam sapiente perspiciatis quae, aut libero tenetur!
                            </p>
                        </div>
                    </div>
                </section>
                <section className="overlap reverse">
                    <div className="overlap-quote">
                        <div className="offset-card">
                            <h3 className="title-small">Service</h3>
                            <h2 className="line">Reining</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque illo
                                optio suscipit dicta deleniti eaque a, consequatur incidunt porro
                                laboriosam provident libero doloremque ratione vitae quo sunt nam,
                                tempora adipisci. Veritatis, aut sed, impedit deleniti officia rem
                                dicta quo ducimus ullam totam ut beatae quas? Natus nulla odio aperiam
                                rerum, magni deleniti blanditiis in eveniet facilis. Adipisci, illo
                                fugit? Aspernatur. Animi quam corrupti sunt enim labore suscipit
                                voluptatibus soluta porro eveniet sed temporibus harum laudantium
                                quisquam sapiente perspiciatis quae, aut libero tenetur!
                            </p>
                        </div>
                    </div>
                </section>
                <section className="overlap">
                    <div className="overlap-quote">
                        <div className="offset-card">
                            <h3 className="title-small">Service</h3>
                            <h2 className="line">Training</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque illo
                                optio suscipit dicta deleniti eaque a, consequatur incidunt porro
                                laboriosam provident libero doloremque ratione vitae quo sunt nam,
                                tempora adipisci. Veritatis, aut sed, impedit deleniti officia rem
                                dicta quo ducimus ullam totam ut beatae quas? Natus nulla odio aperiam
                                rerum, magni deleniti blanditiis in eveniet facilis. Adipisci, illo
                                fugit? Aspernatur. Animi quam corrupti sunt enim labore suscipit
                                voluptatibus soluta porro eveniet sed temporibus harum laudantium
                                quisquam sapiente perspiciatis quae, aut libero tenetur!
                            </p>
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

        </>
    );
}

