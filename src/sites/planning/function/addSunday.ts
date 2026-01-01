import { db } from "../../../lib/firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import type { Sunday } from "../../../interfaces/ISundays";

async function addSunday(sunday: Omit<Sunday, "id">): Promise<Sunday> {
    const sundayCollection = collection(db, "sundays");
    const docRef = await addDoc(sundayCollection, sunday);
    return { id: docRef.id, ...sunday };
}

export default addSunday;
