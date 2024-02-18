import { Fragment, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';

import img1 from "../assets/img/maggie-horse.jpg";
import img2 from "../assets/img/maggie-horse.jpg";
import img3 from "../assets/img/maggie-horse.jpg";

type CardDataItem = {
    title: string;
    description: string;
};

type CardInfo = {
    img: string;
    cardDataItems: CardDataItem[];
    last: string;
    lastUrl: string;

};

const cardDataItems: CardDataItem[] = [
    {
        title: "Name",
        description: "Seabiscuit",
    },
    {
        title: "Breed",
        description: "Male",
    },
    {
        title: "Price",
        description: "10K",
    },
];

const cardInfos: CardInfo[] = [
    {
        img: img1,
        cardDataItems: cardDataItems,
        last: 'Buy Horse now yada yada yada',
        lastUrl: './voting.html'
    },
    {
        img: img2,
        cardDataItems: cardDataItems,
        last: 'Buy Horse now yada yada yada',
        lastUrl: './voting.html'
    },
    {
        img: img3,
        cardDataItems: cardDataItems,
        last: 'Buy Horse now yada yada yada',
        lastUrl: './voting.html'
    },
];

function SS() {
    const swiper22 = useSwiper();
    console.log('swiper22', swiper22);
    return (
        <>
            {[1, 2, 3].map((i, el) => {
                return (
                    <SwiperSlide key={el} style={{ color: 'red' }}>
                        Slide {el}
                    </SwiperSlide>
                );
            })}
        </>
    );
}

function SwiperBody() {
    const swiper2 = useSwiper();
    console.log('swiper2', swiper2);
    return (
    <div className="slideshow-container">
        <SwiperSlide><SlideItem cardInfo={cardInfos[0]} /></SwiperSlide>
        <SwiperSlide><SlideItem cardInfo={cardInfos[1]} /></SwiperSlide>
        <SwiperSlide><SlideItem cardInfo={cardInfos[2]} /></SwiperSlide>

        <button onClick={() => swiper2.slidePrev()}>Prev</button>
        <button onClick={() => swiper2.slideNext()}>Next</button>
    </div>
    );
}


export function HoreseForSale() {
    // const swiper2 = useSwiper();
    // const swiper3 = useRef<SwiperRef>(null);

    // console.log('swiper', swiper2, swiper3.current);

    return (
        <main id="events" className="page-events">
            <Hero />

            {/* <Swiper ref={swiper3} modules={[Navigation, EffectCoverflow]} effect="fade">
                <SS />
            </Swiper> */}

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                modules={[Navigation, EffectCoverflow]}
                // onSlideChange={() => console.log('onSlideChange: slide change')}
                // onSwiper={(swiper) => console.log('onSwiper', swiper)}
            >
                <SwiperBody />

            </Swiper>


            {/* <Swiper
                spaceBetween={50}
                slidesPerView={3}
                //modules={[Navigation, EffectCoverflow]}
                onSlideChange={() => console.log('onSlideChange: slide change')}
                onSwiper={(swiper) => console.log('onSwiper', swiper)}
            >
                <SwiperSlide><SlideItem cardInfo={cardInfos[0]} /></SwiperSlide>
                <SwiperSlide><SlideItem cardInfo={cardInfos[1]} /></SwiperSlide>
                <SwiperSlide><SlideItem cardInfo={cardInfos[2]} /></SwiperSlide>

                <button onClick={() => swipers2.lidePrev()}>Prev</button>
                <button onClick={() => swiper2.slideNext()}>Next</button>

            </Swiper> */}

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
    );
}

function Hero() {
    return <section className="hero">
        <div className="two-col">
            <div className="two-col-wrapper">
                <div className="two-col-text">
                    <h3 className="title-small">About Tornjak Club</h3>
                    <h2>of North America</h2>
                </div>
                <div className="two-col-text-block">
                    <p>
                        A small group of passionate Tornjak owners gathered to share their
                        love of the breed in September 2023. This small meeting in Ontario,
                        Canada became the very beginning of the Tornjak Club of North
                        America.
                    </p>
                    <p>
                        TCNA is a community of Tornjak enthusiasts who have come together to
                        share stories and knowledge about a rare and wonderful breed.
                        Whether you're a seasoned Tornjak owner or just curious about these
                        special pups, we're here to welcome you.
                    </p>
                </div>
            </div>
        </div>
    </section>;
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

function SlideItem({ cardInfo }: { cardInfo: CardInfo; }) {
    return (
        <div className="mySlides fade">
            <div className="event-card-top">
                <img className="event-card-img" src={cardInfo.img} />
            </div>
            <div className="event-card-bottom">

                {cardInfo.cardDataItems.map((item, index) => (
                    <Fragment key={index}>
                        <p className="title-small">{item.title}</p>
                        <h2 className="lowercase">{item.description}</h2>
                    </Fragment>
                ))}

                <p>{cardInfo.last}</p>
                <p className="read-more">
                    <a className="line" href={cardInfo.lastUrl}>
                        Inquire about this horse
                    </a>
                </p>
            </div>
        </div>
    );
}

function Slide1() {
    return (<div className="mySlides fade">
        <div className="event-card-top">
            <img className="event-card-img" src="./src/assets/img/maggie-horse.jpg" />
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
    </div>);
}

function Slide2() {
    return <div className="mySlides fade">
        <div className="event-card-top">
            <img
                className="event-card-img"
                src="./src/assets/img/group-photo1.jpg" />
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
    </div>;
}

function Slide3() {
    return (
        <div className="mySlides fade">
            <div className="event-card-top">
                <img className="event-card-img" src="./src/assets/img/facility-1.jpg" />
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

            {/* <div className="event-card-bottom">
            <p className="title-small">Vote on the</p>
            <h2 className="lowercase">Next Meetup</h2>
            <p>
                Interested in coming to our next Tornjak Club meetup? It's a very
                special sight to see all of the lovely Tornjaks all in one
                location, but it take a lot of planning to coordinate people and
                dogs from all over North America. If we have enough interest, we
                will hold a 2024 meetup. We would love to hear your thoughts on
                the date and location.
            </p>
            <p className="read-more">
                <a className="line" href="./voting.html">
                    Vote Now
                </a>
            </p>
        </div> */}
        </div>
    );
}
