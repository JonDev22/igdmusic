import { db } from "../../../lib/firebase/firebase";
import { collection, deleteDoc, doc } from "firebase/firestore";

async function deleteSunday(sundayId: string): Promise<void> {
    const sundayCollection = collection(db, "sundays");
    const sundayDoc = doc(sundayCollection, sundayId);
    await deleteDoc(sundayDoc);
}

export default deleteSunday;
