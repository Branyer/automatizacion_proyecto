import { useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  limit,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase.config";

const QUANTITY = 100;
export const useOnValue = (path, order) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    let arrayAux = []
    const unsubscribe = onSnapshot(
      query(collection(db, path), orderBy(order, "desc"), limit(QUANTITY)),
      (querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
          if(change.type === "added"){
            arrayAux = [JSON.parse(JSON.stringify(change.doc.data())), ...arrayAux]
          }

          if(change.type === 'removed') {
            arrayAux = []
          }

        });

        setState(arrayAux)

      }
    );

    return () => unsubscribe();
  }, [order, path]);

  return state;
};
