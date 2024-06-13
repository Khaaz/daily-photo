"use server";

import { revalidatePath } from "next/cache";

import { fetchChallenges, reset, updateChallenge } from "@/datastore/lib.js";
import { daysSinceDate, pickRandom } from "@/helpers/date.js";

export async function pickChallenge() {
	const challenges = await fetchChallenges();

	
	const notPickedChallenges = challenges.filter(c => !c.picked);
	if (notPickedChallenges.length === 0) {
		return false;
	}
		
	const pickedChallenges = challenges.filter(c => c.picked);
	
	const daysSince = daysSinceDate();
	const remainingPicks = daysSince - pickedChallenges.length;
	if (remainingPicks < 1) {
		return false;
	}
	
	const maxChallenge = pickedChallenges.reduce( (prev, current) => ( (prev.id > current.id) ? prev : current), { id: 0 } );
	
	// pick a random new challenge
	const pickedChallenge = pickRandom(notPickedChallenges);

	await updateChallenge(pickedChallenge._id, {
		id: maxChallenge.id + 1,
		picked: true,
		done: false,
	} );

	revalidatePath("/challenges");
	return true;
}

export async function validateChallenge(challenge) {
	await updateChallenge(challenge._id, {
		done: !challenge.done,
	} );

	revalidatePath("/challenges");
	return;
}

export async function resetChallenges() {
	await reset();
	// await sync();

	revalidatePath("/challenges");
	return;
}
