import { db } from "../../../lib/firebase/firebase";
import { doc, deleteDoc } from "firebase/firestore";

async function deleteMusician(musicianId: string): Promise<void> {
    const musicianRef = doc(db, "musicians", musicianId);
    await deleteDoc(musicianRef);
}

export default deleteMusician;
