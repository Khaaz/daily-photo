import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	updateDoc,
	writeBatch,
} from "firebase/firestore";

import { CHALLENGES_DESCRIPTIONS } from "@/configs/data.js";

// eslint-disable-next-line no-shadow
import { db } from "./firebase.js";

const COLLECTION = "challenges";

export async function fetchChallenges() {
	const itemsCollection = collection(db, COLLECTION);
	const itemsSnapshot = await getDocs(itemsCollection);
	const itemsList = itemsSnapshot.docs.map(document => {
		return { ...document.data(), _id: document.id };
	} );
	
	return itemsList;
}

export async function updateChallenge(itemId, data) {
	const itemRef = doc(db, COLLECTION, itemId);
	await updateDoc(itemRef, data);
}

export async function reset() {
	const querySnapshot = await getDocs(collection(db, COLLECTION) );
	const batch = writeBatch(db);

	querySnapshot.forEach( (document) => {
		const docRef = doc(db, COLLECTION, document.id);
		batch.update(docRef, { id: -1, picked: false, done: false } );
	} );

	await batch.commit();
}

export async function sync() {
	const descriptions = CHALLENGES_DESCRIPTIONS;
	  
	const collectionRef = collection(db, COLLECTION);
	const querySnapshot = await getDocs(collectionRef);

	const existingDescriptions = {};

	querySnapshot.forEach( (document) => {
		const docData = document.data();
		existingDescriptions[docData.description] = document.id;
	} );

	const descriptionsSet = new Set(descriptions);
	const existingDescriptionsSet = new Set(Object.keys(existingDescriptions) );

	// Add new challenge that are not in the Firestore
	for (const description of descriptions) {
		if (!existingDescriptionsSet.has(description) ) {
			await addDoc(collectionRef, {
				id: -1,
				description,
				picked: false,
				done: false,
			} );
		}
	}

	// Remove challenges that are in Firestore but not in the provided list
	for (const description of existingDescriptionsSet) {
		if (!descriptionsSet.has(description) ) {
			await deleteDoc(doc(db, COLLECTION, existingDescriptions[description] ) );
		}
	}
}
