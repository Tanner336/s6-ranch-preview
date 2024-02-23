import JSON5 from "json5";
import { CardInfo } from "./types";
import { TestimonialData } from "./types-testimonial";

export * from "./types";
export * from "./types-testimonial";

export type DynamicData = {             // global data from jsonl files
    horses: CardInfo[];                 // horses for sale
    breading: CardInfo[];               // breading
    testimonials: TestimonialData[];    // testimonials
    error: string | undefined;          // errors from parsing jsonl files
    filename: string;                   // filename of the jsonl file
};

export const dynamicData: DynamicData = {
    horses: [],
    breading: [],
    testimonials: [],
    error: undefined,
    filename: '',
};

export async function initMdSDataWithFetch(url: string) {
    const res = await fetch(url);
    const text = await res.text();
    const json = JSON5.parse(text);
    return json;
}

export async function initDataWithFetch() {
    try {
        dynamicData.filename = "horses-for-sale.jsonl";
        dynamicData.horses = await initMdSDataWithFetch(`./data/horses/${dynamicData.filename}`);

        dynamicData.filename = "breeding.jsonl";
        dynamicData.breading = await initMdSDataWithFetch(`./data/breeding/${dynamicData.filename}`);

        dynamicData.filename = "testimonials.jsonl";
        dynamicData.testimonials = await initMdSDataWithFetch(`./data/testimonials/${dynamicData.filename}`);
    } catch (err) {
        dynamicData.error = err instanceof Error ? err.message : '' + err;
        console.error('11', err);
    }
}
