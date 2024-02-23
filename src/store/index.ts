import { toast } from "sonner";
import { CardInfo } from "./types";
import JSON5 from "json5";

export * from "./types";

export type DynamicData = {         // global data from jsonl files
    horses: CardInfo[];             // horses for sale
    breading: CardInfo[];           // breading
    error: string | undefined;      // errors from parsing jsonl files
    filename: string;               // filename of the jsonl file
};

export const dynamicData: DynamicData = {
    horses: [],
    breading: [],
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
        try {
            dynamicData.horses = await initMdSDataWithFetch("./data/horses/horses-for-sale.jsonl");
        } catch (err) {
            dynamicData.error = err instanceof Error ? err.message : '' + err;
            dynamicData.filename = "horses-for-sale.jsonl";
            throw err;
        }
    
        try {
            dynamicData.breading = await initMdSDataWithFetch("./data/breeding/breeding.jsonl");
        } catch (err) {
            dynamicData.error = err instanceof Error ? err.message : '' + err;
            dynamicData.filename = "breeding.jsonl";          
            throw err;
        }
            
    } catch (err) {
        console.error(err);
    }
}
