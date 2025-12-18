import { db } from "../../../lib/firebase/firebase";
import { collection, doc, updateDoc } from "firebase/firestore";

import type { ISong } from "../../../interfaces/ISong";

async function editSong(song: ISong): Promise<ISong> {
    const songCollection = collection(db, "songs");
    const songDoc = doc(songCollection, song.id);
    await updateDoc(songDoc, { ...song });
    return song;
}

export default editSong;
