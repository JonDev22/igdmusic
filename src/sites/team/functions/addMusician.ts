import { db } from "../../../lib/firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

import type { IMusician } from "../../../interfaces/IMusician";

async function addMusician(
    musicianData: Omit<IMusician, "id">,
): Promise<IMusician> {
    const musiciansCollection = collection(db, "musicians");
    const docRef = await addDoc(musiciansCollection, musicianData);
    return { id: docRef.id, ...musicianData };
}

export default addMusician;
