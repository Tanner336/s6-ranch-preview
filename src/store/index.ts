import { H4SaleCardInfo } from "@/routes/27-horses-for-sale/types";
import JSON5 from "json5";

export let gH4Sale: H4SaleCardInfo[] = []; // global H4Sale

export async function initMdSDataWithFetch(url: string) {
    try {
        const res = await fetch(url);
        const text = await res.text();
        const json = JSON5.parse(text);

        gH4Sale = json;
        console.log('H4S', gH4Sale);
    } catch (err) {
        console.error(err);
    }
}

export async function initDataWithFetch() {
    await initMdSDataWithFetch("./data/horses-for-sale.jsonl");
}
