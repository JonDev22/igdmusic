import { db } from "../../../lib/firebase/firebase";
import { collection, deleteDoc, doc } from "firebase/firestore";

async function deleteSong(songId: string): Promise<void> {
    const songCollection = collection(db, "songs");
    const songDoc = doc(songCollection, songId);
    await deleteDoc(songDoc);
}

export default deleteSong;
