import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { SEO } from "../SEO";
import { Testimonial } from "./3-testimonial";
import { useState } from "react";
import grounds from "../../assets/img/grounds-v2.webp";
import { Squares } from "./2-squares";
import { IconFacebook, IconInstagram } from "../../ui/icons";

export function Facility() {
    const [d1, setD1] = useState("1");
    return (<>
        <main id="facility">
            <SEO
                title="S6 Ranch Facility"
                description="Horse stables and accomodations for indoor and outdoor horse training"
                href="/facility"
            />

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
                            src={grounds}
                            alt="Top down view of S6 Ranch"
                        />
                    </div>
                </div>

                <div className="two-col-text-block">
                    <h3 className="title-small">Our facility boasts:</h3>
                    <hr></hr>
                    <p>150ft x 75ft covered arena with lighting and performance footing</p>
                    <p>250 ft x 125ft outdoor arena with sand footing</p>
                    <p>120ft round cutting arena with sand footing</p>
                    <p>60 ft round pen with sand footing</p>
                </div>
            </section>

            {/* <section className="cta-text-block">
                <div className="stats">
                    <h3 className="title-small">
                        Stay in the Loop with us on facebook
                    </h3>
                    <hr />
                    <p className="read-more">
                        <a
                            href="https://www.facebook.com/people/S6-Ranch/100087839483211/"
                            target="_blank"
                        >
                            Connect Now
                        </a>
                    </p>
                </div>
            </section> */}

            <section className="cta-text-block">
                <div>
                    <h3 className="title-small">
                        Let's get social
                    </h3>
                    <div className="social-media-icons">
                        {/* icon family: https://www.iconfinder.com/iconsets/free-social-media-5 */}

                        <a
                            href="https://www.facebook.com/profile.php?id=100087839483211&mibextid=LQQJ4d"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconFacebook />
                        </a>

                        <a
                            href="https://www.instagram.com/s6horses/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconInstagram />
                        </a>
                    </div>
                </div>
            </section>

            <Squares />

            <Testimonial />
        </main >
    </>);
}
