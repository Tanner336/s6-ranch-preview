import { gH4Sale } from "@/store";
import { Hero } from "./1-hero";
import { Card } from "./2-card";

export function HoreseForSale() {
    return (
        <main id="for-sale" className="page-events">
            <Hero />
            <div className="horses-for-sale">
                {gH4Sale.map((cardInfo, index) => (
                    <Card cardInfo={cardInfo} key={index} />
                ))}
            </div>
        </main>
    );
}
