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
          <img src={logoXL} alt="S6 Ranch logo" />
          <h1><span className="visually-hidden">S6 </span>Ranch</h1>
        </div>
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
              Welcome to S6 Ranch. Our sprawling 10-acre property offers beautiful accommodations, unmatched care, and top-notch experts. Our NRHA Professional trainers and spacious arenas are great for riders of all levels. Whether you're a seasoned equestrian or budding horse enthusiast, our 10-acre haven welcomes you with open arms.
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
          alt="The Salvador family along with thier horse and dog"
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
                <span className="main-btn-text">more info</span><span className="visually-hidden"> about our trainers</span>
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
                <span className="main-btn-text">more info</span><span className="visually-hidden"> about our lessons</span>
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
                <span className="main-btn-text">more info</span><span className="visually-hidden"> about our breeding program</span>
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section id="quote">
        <blockquote>There is nothing better for the inside of a man, than the outside of a horse.</blockquote>
        <cite className="title-small">Winston Churchill</cite>
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
                  src={community}
                  alt="large group of formally dressed people gathered for a horse show"
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
