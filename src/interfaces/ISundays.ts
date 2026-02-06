import type { Timestamp } from "firebase/firestore";

export interface SundaySong {
    order: number;
    id: string;
    title: string;
    key: string;
}

export interface Sunday {
    id: string;
    date: Timestamp;
    items?: SundaySong[];
    musicians?: string[];
}
