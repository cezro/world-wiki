import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default async function uploadDocument(
  collectionName: string,
  data: object
): Promise<string> {
  const collectionRef = collection(db, collectionName);

  return addDoc(collectionRef, data)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      throw error;
    });
}
