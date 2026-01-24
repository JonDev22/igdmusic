import { db } from "../../../lib/firebase/firebase";
import { updateDoc, doc } from "firebase/firestore";
import type { Sunday } from "../../../interfaces/ISundays";

async function updateSunday(sunday: Sunday): Promise<void> {
    const sundayRef = doc(db, "sundays", sunday.id);
    await updateDoc(sundayRef, {
        date: sunday.date,
        items: sunday.items,
        musicians: sunday.musicians || [],
    });
}

export default updateSunday;
