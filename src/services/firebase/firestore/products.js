import { getDocs, collection, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getProducts = (categoryId) => {
    const productsCollection = categoryId
        ? query(collection(db, "products"), where("category", "==", categoryId), where("stock", ">=", 1))
        : query(collection(db, "products"), where("stock", ">=", 1));

    return getDocs(productsCollection)
        .then((querySnapshot) => {
            const productsAdapted = querySnapshot.docs.map((doc) => {
                const data = doc.data();
                return { id: doc.id, ...data };
            });
            return productsAdapted;
        })
        .catch((error) => {
            return error;
        });
};

export const getProductById = (itemId) => {
    const productDoc = doc(db, "products", itemId);

    return getDoc(productDoc)
        .then((queryDocumentSnapshot) => {
            const data = queryDocumentSnapshot.data();
            const productAdapted = { id: queryDocumentSnapshot.id, ...data };
            return productAdapted;
        })
        .catch((error) => {
            return error;
        });
};
