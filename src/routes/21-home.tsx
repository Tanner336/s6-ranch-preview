import { HeaderBody } from "./1-header";
import { SEO } from "./SEO";
import horseProfile from "../assets/img/horse-2.jpg";
import community from "../assets/img/community-photo.webp";
import salvador from "../assets/img/salvador-family.webp";
import { Link } from "react-router-dom";
import logoXL from "../assets/img/logo-xl.png";

export function Home() {
  return (
    <main id="home">
      <SEO title="S6 Ranch" description="S6 Horse Ranch" href="/facility" />

      <section className="hero">
        <HeaderBody />
        <div className="hero-text">
          <img src={logoXL} alt="profile view of a young horse" />
          <h1>Ranch</h1>
          {/* <h1 className="lines title-small">
            <span>Performance Horses</span>
          </h1> */}
        </div>
        {/* <a className="main-btn" tabIndex={0} href="https://na4.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=5d2486ea-bbf6-4ecc-9b77-7ccd59a2304e&env=na4&acct=4ca4f66f-951d-4258-9482-4800ab8aff19&v=2">
          <span className="main-btn-text">Release Form</span>
        </a> */}
      </section>

      <section className="quick-words">
        <div className="quick-words-wrapper">
          <div className="quick-words-top">
            <div className="quick-words-title">
              <p className="title-small">Horsemanship</p>
              <h2>With Integrity</h2>
            </div>
            <img src={horseProfile} alt="profile view of a young horse" />
          </div>
          <div className="quick-words-bottom">
            <p className="text-block">
              See what our 10 acre ranch and NRHA Professional trainers can offer you and your horse. With beautiful accomodations, unmatched care, and top knotch experts, S6 Ranch is sure to have something for the budding horse enthusiast to the seasoned equestrian.
            </p>
            <p className="read-more">
              <Link className="line" to="/facility">
                Facility Gallery
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section id="about-us">
        <img
          src={salvador}
          alt="large group of people gathered around a firepit"
        />
        <div className="text-body">
          <div>
            <p className="title-small">Meet the</p>
            <h2>Salvador Six</h2>
          </div>
          <p>The Salvador family purchased the former Wildrose Quarter Horse facility from Bettike Paul in 2022. Bettike, a life-long horsewoman, designed and built the facility centered around breeding and raising high-end cutting horses. Our goal is to carry on the tradition of breeding smart minded and well rounded horses at a family facility where kids and adults alike can develop their love for horses.</p>
        </div>
      </section>

      <section className="cta-text-block">
        <div className="stats">
          <h3 className="title-small">
            EXPLORE WHAT OUR RANCH CAN OFFER YOU
          </h3>
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

              <Link className="main-btn" to="/services">
                <span className="main-btn-text">more info</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="card-wrapper two">
          <div className="card-border">
            <div className="card-text">
              <p className="title-small">Find</p>
              <h2 className="lines">
                <span>Lessons</span>
              </h2>
              <Link className="main-btn" to="/services">
                <span className="main-btn-text">more info</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="card-wrapper three">
          <div className="card-border">
            <div className="card-text">
              <p className="title-small">Equine</p>
              <h2 className="lines">
                <span>Breeding</span>
              </h2>
              <Link className="main-btn" to="/breeding">
                <span className="main-btn-text">more info</span>
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section id="quote">
        <blockquote>There is nothing better for the inside of a man, than the outside of a horse.</blockquote>
        <cite className="title-small">Winston Churchill</cite>
      </section>



      {/* <section className="stats">
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
      </section> */}

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
                  src={community}
                  alt="large group of people gathered around a firepit"
                />
                <div className="news-tile-text">
                  <h3 className="title-small">Community is Everything</h3>
                  <p className="text-block">
                    Watching our students learn and grow is the heart of what we do. S6 Ranch invites people of every learning stage to participate in our coaching. We believe horsemanship is for anyone with the heart to try.
                  </p>
                  <p className="paragraph-large">
                    <a href="https://www.facebook.com/profile.php?id=100087839483211&mibextid=LQQJ4d" target="_blank">
                      Join Us on Facebook
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
