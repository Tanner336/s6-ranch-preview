import { Carousel, imageUrlByIndex } from "@/ui";
import { CardInfo } from "./slider-data";
import css from "@/ui/carousel/carousel.module.css";
import css2 from "./card.module.css";
import { Link } from "react-router-dom";

function CarouselImgs({ imgUrls }: { imgUrls: string[] }) {
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

export function Card({ cardInfo }: { cardInfo: CardInfo }) {
  return (
    <div className={css2.card}>
      <CarouselImgs imgUrls={cardInfo.img} />

      <div className={css2.card__description}>
        {cardInfo.cardDescItems.map((item, index) => (
          <div className={css2.card__description__item} key={index}>
            <h3 className="title-small">{item.title}</h3>
            <h2 className="title-large">{item.description}</h2>
            <p>{item.notes}</p>
          </div>
        ))}

        <hr></hr>

        <p className="read-more">
          <Link className="line" to="#contact">
            Inquire About This Horse
          </Link>
        </p>
      </div>
    </div>
  );
}
