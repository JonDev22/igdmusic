import type { Timestamp } from "firebase/firestore";

export interface ISong {
    id: string;
    title: string;
    youTubeLink: string;
    songSelectLink: string;
    createdAt: Timestamp;
    order?: string;
    key?: string;
}
