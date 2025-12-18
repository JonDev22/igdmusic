import { db } from "../../../lib/firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

import type { ISong } from "../../../interfaces/ISong";

async function addSong(songData: Omit<ISong, "id">): Promise<ISong> {
    const songCollection = collection(db, "songs");
    const docRef = await addDoc(songCollection, songData);
    return { id: docRef.id, ...songData };
}

export default addSong;
