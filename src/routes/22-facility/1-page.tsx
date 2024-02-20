import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { SEO } from "../SEO";
import { Testimonial } from "./3-testimonial";
import { useState } from "react";
import grounds from "../../assets/img/grounds-v2.jpg";
import { Squares } from "./2-squares";

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
                    <p>
                        479 characters - We have indoor and outdoor arena to accomodate
                        training in all types of weather. A large pen for reining, cutting
                        and roping. Lots of space for multiple riders. We also have
                        barrels and cones for practicing patterns.
                    </p>
                    <p>
                        We have have 12 stalls for our training clients, we do not offer
                        boarding. We have a large pasture for turn out and a round pen for
                        starting colts. Younger riders are welcome to come and learn the
                        basics of riding and horsemanship.
                    </p>
                    <p>
                        479 characters - We have indoor and outdoor arena to accomodate
                        training in all types of weather. A large pen for reining, cutting
                        and roping. Lots of space for multiple riders. We also have
                        barrels and cones for practicing patterns.
                    </p>
                    <p>
                        We have have 12 stalls for our training clients, we do not offer
                        boarding. We have a large pasture for turn out and a round pen for
                        starting colts. Younger riders are welcome to come and learn the
                        basics of riding and horsemanship.
                    </p>
                </div>
            </section>

            <section className="cta-text-block">
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
            </section>

            <Squares />

            <Testimonial />
        </main>
    </>);
}
