import type { Timestamp } from "firebase/firestore";

export interface Sunday {
    id: string;
    date: Timestamp;
    items?: {
        order: number;
        id: string;
        title: string;
        key: string;
    }[];
    musicians?: string[];
}
