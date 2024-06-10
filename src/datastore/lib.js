// lib/firebase.js
import { collection, getDocs } from "firebase/firestore";

// eslint-disable-next-line no-shadow
import { db } from "./firebase.js";

// Add this function to fetch data
export async function fetchChallenges() {
	const itemsCollection = collection(db, "challenges");
	const itemsSnapshot = await getDocs(itemsCollection);
	const itemsList = itemsSnapshot.docs.map(doc => doc.data() );
	
	return itemsList;
}
