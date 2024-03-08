import { Link } from "react-router-dom";
import { SEO } from "./SEO";
import { Testimonial } from "./22-facility/3-testimonial";

export function Services() {
    return (
        <main id="service">
            <SEO
                title="S6 Ranch Services"
                description="Services offered"
                href="/services"
            />

            <section className="hero">
                <div className="page-title">
                    <h3 className="title-small">More On</h3>
                    <h2 className="title-large">What We Offer</h2>
                </div>
            </section>

            <section id="trainers">
                <div className="service-wrapper">
                    <ul className="service-bar">
                        <li>
                            <a href="#riding-lessons">Riding Lessons</a>
                        </li>
                        <li>
                            <a href="#training">Training</a>
                        </li>
                        <li>
                            <a href="#boarding">Boarding</a>
                        </li>
                        <li>
                            <a href="#consignment">Consignment</a>
                        </li>
                    </ul>
                </div>

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
                                Kristen Marrow is a professional NRHA money earning trainer, specializing in Reining and Ranch riding. She has been working with professional trainers for the last 29 years.
                            </p>
                            <p>
                                Kristen started apprenticing in horse training and horse husbandry 24 years ago. She worked as an assistant trainer, moving on to eventually start her own horse training business, M6 Performance Horses. Kristen holds a certification in Equine Assisted Reproductive Technology from UC Davis and has worked in the breeding programs for Perine Performances Horses and Double N Ranch.
                            </p>
                        </div>
                        <div className="col-image" />
                    </div>

                    {/* <div className="img-text-box trainer-two">
                        <div className="col-image reverse" />
                        <div className="col-text">
                            <h3 className="title-small">Trainer Two</h3>
                            <h2>Josh Johnson</h2>
                            <p>
                                415 characters - Ut wisi enim ad minim veniam, quis nostrud
                                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                                ea commodo consequat. Duis autem vel eum iriure dolor in
                                hendrerit in vulputate velit esse molestie consequat, vel
                                illum dolore eu feugiat nulla facilisis at vero eros et
                                accumsan et iusto odio dignissim qui blandit praesent luptatum
                                zzril delenit augue duis dolore te feugait nulla facilisi.
                            </p>
                        </div>
                    </div> */}

                    <div className="secondary-details">
                        <p>
                            1752 Characters - Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Atque illo optio suscipit dicta deleniti eaque
                            a, consequatur incidunt porro laboriosam provident libero
                            doloremque ratione vitae quo sunt nam, tempora adipisci.
                            Veritatis, aut sed, impedit deleniti officia rem dicta quo
                            ducimus ullam totam ut beatae quas? Natus nulla odio aperiam
                            rerum, magni deleniti blanditiis in eveniet facilis. Adipisci,
                            illo fugit? Aspernatur. Animi quam corrupti sunt enim labore
                            suscipit voluptatibus soluta porro eveniet sed temporibus harum
                            laudantium quisquam sapiente perspiciatis quae, aut libero
                            tenetur!Nam liber tempor cum soluta nobis eleifend option congue
                            nihil imperdiet doming id quod mazim placerat facer possim
                            assum. Typi non habent claritatem insitam; est usus legentis in
                            iis qui facit eorum claritatem. Investigationes demonstraverunt
                            lectores legere me lius quod ii legunt saepius acilisis at vero
                            eros et accumsan et iusto odio dignissim qui blandit praesent
                            luptatum. Nam liber tempor cum soluta nobis eleifend option
                            congue nihil imperdiet doming id quod mazim placerat facer
                            possim assum. Typi non habent claritatem insitam; est usus
                            legentis in iis qui facit eorum claritatem. Investigationes
                            demonstraverunt lectores legere me lius quod ii legunt saepius
                            acilisis at vero eros et accumsan et iusto odio dignissim qui
                            blandit praesent luptatum. Nam liber tempor cum soluta nobis
                            eleifend option congue nihil imperdiet doming id quod mazim
                            placerat facer possim assum. Typi non habent claritatem insitam;
                            est usus legentis in iis qui facit eorum claritatem.
                            Investigationes demonstraverunt lectores legere me lius quod ii
                            legunt saepius acilisis at vero eros et accumsan et iusto odio
                            dignissim qui blandit praesent luptatum.
                        </p>
                        <hr />
                    </div>
                </div>
            </section>

            <section className="overlap riding-lessons">
                <div className="overlap-quote">
                    <div className="offset-card" id="riding-lessons">
                        <h3 className="title-small">About Our</h3>
                        <h2 className="line">Riding Lessons</h2>
                        <p>
                            S6 Ranch provides lessons for all ages and levels. Whether you are new to horses or seasoned and stepping into the show ring, there is a spot for you to grow. Our trainer, Kristen Marrow, has extensive experience in multiple disciplines. Kristen is a credited NRHA trainer, and has a passion for teaching and maintaining the fundamentals of horsemanship as well as equine body mechanics for all levels.
                        </p>
                    </div>
                </div>
            </section>

            <section className="overlap reverse training">
                <div className="overlap-quote">
                    <div className="offset-card" id="training">
                        <h3 className="title-small">About Our</h3>
                        <h2 className="line">Training</h2>
                        <p>
                            The 10 acre ranch is fully fenced and surrounded by mature trees complete with a walking track bordering the property. There are three client tack rooms, as well as a separate grain room. We have 2 wash racks, multiple turn-out pastures for day use, as well as cross-tie spots in breezeways. An automatic fly-spray stystem runs in horse stalls and breezeways year-round. Stalls are cleaned 6 days a week and horses are fed 7 days a week. Graining is available at additional cost. A full-time caretaker lives on the property as well as our trainer for any urgent horse needs. We have  12ft x 12ft stalls with 24 ft paddocks.
                        </p>
                    </div>
                </div>
            </section>

            <section className="overlap boarding">
                <div className="overlap-quote">
                    <div className="offset-card" id="boarding">
                        <h3 className="title-small">About Our</h3>
                        <h2 className="line">Boarding</h2>
                        <p>
                            S6 Ranch offers full-care training for show and non-show horses. Inquire below for further details and pricing.
                        </p>
                    </div>
                </div>
            </section>

            <section className="overlap reverse consignment">
                <div className="overlap-quote">
                    <div className="offset-card" id="consignment">
                        <h3 className="title-small">About Our</h3>
                        <h2 className="line">Consignment</h2>
                        <p>
                            S6 Ranch offers professional consignment assistance to help clients sell their horses. Resources include: advertising placement, fielding calls, marketing, facilitating showing schedules and price negotiation. Inquire below for further details and pricing.
                        </p>
                    </div>
                </div>
            </section>

            <Testimonial />
        </main>

    );
}
