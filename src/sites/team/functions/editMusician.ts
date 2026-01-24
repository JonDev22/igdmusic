import { db } from "../../../lib/firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";

import type { IMusician } from "../../../interfaces/IMusician";

async function editMusician(musician: IMusician): Promise<IMusician> {
    const musicianRef = doc(db, "musicians", musician.id);
    const { id, ...updateData } = musician;
    await updateDoc(musicianRef, updateData);
    return musician;
}

export default editMusician;
