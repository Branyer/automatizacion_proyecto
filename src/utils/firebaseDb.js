import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.config";

export const addTemperaturesData = async (data, collectionName) => {
  try {

    const requests = []

    for (let index = 0; index < data?.length; index++) {
      requests.push(addDoc(collection(db, collectionName), data[index]));
    }

    await Promise.all(requests)

  } catch (error) {
    console.log(error);
  }
};
