import { Carousel, imageUrlByIndex } from "@/ui";
import { CardInfo } from "@/store";

import css from "@/ui/carousel/carousel.module.css";
import css2 from "./card.module.css";

// console.log(css, css);
// console.log(css2, css2);

function CarouselImgs({ imgUrls }: { imgUrls: string[]; }) {
	return (
		<Carousel<string>
			slides={imgUrls}
			card={(index) => {
				return (
					<div className={css["card"]}>
						<img
							className={css["card__img"]}
							src={imageUrlByIndex(imgUrls, index)}
							alt="Your alt text"
						/>
					</div>
				);
			}}
		/>
	);
}

export function Card({ cardInfo }: { cardInfo: CardInfo; }) {
	return (
		<div className={css2.card}>
			<CarouselImgs imgUrls={cardInfo.images || []} />

			<div className={css2.card__description}>
				{cardInfo.descriptions?.map((item, index) => (
					<div className={css2.card__description__item} key={index}>
						<h3 className="title-small">{item.title}</h3>
						<h2 className="title-large">{item.description}</h2>
					</div>
				))}

				{cardInfo.notes && <p dangerouslySetInnerHTML={{ __html: cardInfo.notes }} />}

				{cardInfo.linkUrl && cardInfo.linkText && (
					<p className="read-more">
						<a className="line" href={cardInfo.linkUrl}>
							{cardInfo.linkText}
						</a>
					</p>
				)}
			</div>
		</div>
	);
}
