import { dynamicData } from "@/store";
import { Hero } from "./1-hero";
import { Card } from "./2-card";
// import { toast } from "sonner";

export function HoreseForSale() {
    return (
        <main id="for-sale" className="page-events">
            <Hero />
            {/* <button onClick={() => toast('This is a sonner toast')}>1111111111111111111111 Render my toast</button> */}
            <div className="horses-for-sale">
                {dynamicData.horses.map((cardInfo, index) => (
                    <Card cardInfo={cardInfo} key={index} />
                ))}
            </div>
        </main>
    );
}
