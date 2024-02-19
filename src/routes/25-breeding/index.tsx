import { Hero } from "./1-hero";
import { Card } from "./2-carousel";
import { cardInfos } from "./slider-data";

export function Breeding() {
  return (
    <main id="for-sale" className="page-events">
      <Hero />
      <div className="horses-for-sale">
        <Card cardInfo={cardInfos[0]} />
        <Card cardInfo={cardInfos[1]} />
        <Card cardInfo={cardInfos[2]} />
      </div>
    </main>
  );
}
