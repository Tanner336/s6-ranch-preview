import { CardInfo } from "@/routes/27-horses-for-sale/types";
import JSON5 from "json5";

export type DynamicData = {         // glbal data from jsonl files
    horses: CardInfo[];       // horses for sale
    breading: CardInfo[];     // breading
}

export const dynamicData: DynamicData = {
    horses: [],
    breading: [],
}

export async function initMdSDataWithFetch(url: string) {
        const res = await fetch(url);
        const text = await res.text();
        const json = JSON5.parse(text);
        return json;
        

        //console.log('H4S', gH4Sale);
}

export async function initDataWithFetch() {
    try {
        dynamicData.horses = await initMdSDataWithFetch("./data/horses/horses-for-sale.jsonl");
        dynamicData.breading = await initMdSDataWithFetch("./data/breeding/breeding.jsonl");
    } catch (err) {
        console.error(err);
    }
}
