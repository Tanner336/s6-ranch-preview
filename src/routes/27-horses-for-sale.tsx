import { Fragment } from "react";
import { Carousel, imageUrlByIndex } from "@/ui";

import img1 from "../assets/img/facility-1.jpg";
import img2 from "../assets/img/facility-2.jpg";
import img3 from "../assets/img/facility-3.jpg";
import { Link } from "react-router-dom";

import css from "@/ui/carousel/carousel.module.css";

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
		lastUrl: '/'
	},
	{
		img: img2,
		cardDataItems: cardDataItems,
		last: 'Buy Horse now yada yada yada',
		lastUrl: '/'
	},
	{
		img: img3,
		cardDataItems: cardDataItems,
		last: 'Buy Horse now yada yada yada',
		lastUrl: '/'
	},
];

const slides = [img1, img2, img3];

export function HoreseForSale() {
	return (
		<>
			<main id="events" className="page-events">
				<Hero />

				<Carousel
					slides={slides}
					card={(index) => {
						return (
							<div className={css["card"]}>
								<img
									className={css["card__img"]}
									src={imageUrlByIndex(slides, index)}
									alt="Your alt text"
								/>
							</div>
						);
					}
					}
				/>
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
					<Link className="line" to={cardInfo.lastUrl}>
						Inquire about this horse
					</Link>
				</p>
			</div>
		</div>
	);
}

function Slide1() {
	return (
		<div className="mySlides fade">
			<div className="event-card-top">
				<img
					className="event-card-img"
					src="./src/assets/img/maggie-horse.jpg"
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
					<Link className="line" to="/">
						Inquire about this horse
					</Link>
				</p>
			</div>
		</div>);
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
