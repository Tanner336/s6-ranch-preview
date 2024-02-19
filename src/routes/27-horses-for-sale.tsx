import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { SEO } from "./SEO";
//import 'swiper/css';

export function HoreseForSale() {
  return (
    <>
      <SEO title="S6 Ranch Horses For Sale" description="Horses for sale offered at S6 Ranch" href="/horses-for-sale" />

      <main id="events" className="page-events">
        <Hero />

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          modules={[Navigation, EffectCoverflow]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Slide1 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide2 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide3 />
          </SwiperSlide>

          {/* <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>

        {/* <section>
                <div className="slideshow-container">

                    <Slide1 />
                    <Slide2 />
                    <Slide3 />

                    <a className="prev" onClick={() => "plusSlides(-1)"}  >
                        ❮
                    </a>
                    <a className="next" onClick={() => "plusSlides(1)"}  >
                        ❯
                    </a>

                    <br />
                    <div style={{ textAlign: "center" }}>
                        <span className="dot" onClick={() => "currentSlide(1)"} />
                        <span className="dot" onClick={() => "currentSlide(2)"} />
                        <span className="dot" onClick={() => "currentSlide(3)"} />
                    </div>
                </div>
            </section> */}
      </main>
    </>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="two-col">
        <div className="two-col-wrapper">
          <div className="two-col-text">
            <h3 className="title-small">About Tornjak Club</h3>
            <h2>of North America</h2>
          </div>
          <div className="two-col-text-block">
            <p>
              A small group of passionate Tornjak owners gathered to share their
              love of the breed in September 2023. This small meeting in
              Ontario, Canada became the very beginning of the Tornjak Club of
              North America.
            </p>
            <p>
              TCNA is a community of Tornjak enthusiasts who have come together
              to share stories and knowledge about a rare and wonderful breed.
              Whether you're a seasoned Tornjak owner or just curious about
              these special pups, we're here to welcome you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
"str".split(/!\[\](\(*.jpg\))/i)
----------------------------------------------

![](image-url)

#title
description

#title
description

#title
description

#title
description

#title
description

----------------------------------------------

![](image-url)

#title
description

#title
description

#title
description

#title
description

#title
description

----------------------------------------------
*/

function Slide1() {
  return (
    <div className="mySlides fade">
      <div className="event-card-top">
        <img
          className="event-card-img"
          src="./src/assets/img/meetup-vote.jpg"
        />
        {/*<div class="event-card-date">
            <p>ongoing</p>
        </div> */}
      </div>
      <div className="event-card-bottom">
        <p className="title-small">Name</p>
        <h2 className="lowercase">Seabiscuit</h2>
        <p className="title-small">Breed</p>
        <h2 className="lowercase">Male</h2>
        <p className="title-small">Price</p>
        <h2 className="lowercase">10K</h2>
        <p>Buy Horse now yada yada yada</p>
        <p className="read-more">
          <a className="line" href="./voting.html">
            Inquire about this horse
          </a>
        </p>
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div className="mySlides fade">
      <div className="event-card-top">
        <img
          className="event-card-img"
          src="./src/assets/img/group-photo1.jpg"
        />
        {/*<div class="event-card-date">
            <p>ongoing</p>
        </div> */}
      </div>
      <div className="event-card-bottom">
        <p className="title-small">Name</p>
        <h2 className="lowercase">Oceanwafer</h2>
        <p className="title-small">Breed</p>
        <h2 className="lowercase">Male</h2>
        <p className="title-small">Price</p>
        <h2 className="lowercase">20K</h2>
        <p>Buy Horse now yada yada yada</p>
      </div>
    </div>
  );
}

function Slide3() {
  return (
    <div className="mySlides fade">
      <div className="event-card-top">
        <img
          className="event-card-img"
          src="./src/assets/img/meet-scylla-dagon.jpg"
        />
        {/*<div class="event-card-date">
                <p>ongoing</p>
            </div> */}
      </div>
      <div className="event-card-bottom">
        <p className="title-small">Vote on the</p>
        <h2 className="lowercase">Next Meetup</h2>
        <p>
          Interested in coming to our next Tornjak Club meetup? It's a very
          special sight to see all of the lovely Tornjaks all in one location,
          but it take a lot of planning to coordinate people and dogs from all
          over North America. If we have enough interest, we will hold a 2024
          meetup. We would love to hear your thoughts on the date and location.
        </p>
        <p className="read-more">
          <a className="line" href="./voting.html">
            Vote Now
          </a>
        </p>
      </div>
    </div>
  );
}
