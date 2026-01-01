import type { Timestamp } from "firebase/firestore";
import type { ISong } from "./ISong";

export type SundayItem = { order: number } & (
    | ISong
    | { id: string; title: string }
);

export interface Sunday {
    id: string;
    date: Timestamp;
    items: SundayItem[];
}
