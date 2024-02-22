import { dynamicData } from "@/store";
import { Hero } from "./1-hero";
import { Card } from "./2-card";

export function Breeding() {
    return (
        <main id="breeding" className="page-events">
            <Hero />
            <div className="horses-for-sale">
                {dynamicData.breading.map((cardInfo, index) => (
                    <Card cardInfo={cardInfo} key={index} />
                ))}
            </div>
        </main>
    );
}
