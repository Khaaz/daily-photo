import { FIXED_DATE } from "@/configs/data.js";

export function daysSinceDate() {
	// Get the current date
	const currentDate = new Date();
    
	// Calculate the difference in time (in milliseconds)
	const timeDifference = currentDate - FIXED_DATE;
    
	// Convert time difference from milliseconds to days
	const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24) );
    
	return daysDifference;
}
