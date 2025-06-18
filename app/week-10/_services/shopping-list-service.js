import { db } from '../_utils/firebase';
import {
	collection,
	query,
	getDocs,
	addDoc,
	doc,
	deleteDoc,
} from 'firebase/firestore';

/**
 * CREATE
 */

export async function addItem(userId, item) {
	const docRef = await addDoc(collection(db, 'users', userId, 'items'), item);
	return docRef.id;
}

/**
 * READ
 */
export async function getItems(userId) {
	// Query the firestore
	const q = query(collection(db, 'users', userId, 'items'));
	const querySnapshot = await getDocs(q);

	let itemCollection = [];
	querySnapshot.forEach((doc) => {
		itemCollection.push({
			id: doc.id,
			...doc.data(),
		});
	});
	return itemCollection;
}

/**
 * DELETE
 */
export async function deleteItem(userId, itemId) {
	const docRef = doc(db, 'users', userId, 'items', itemId);
	await deleteDoc(docRef);
}
