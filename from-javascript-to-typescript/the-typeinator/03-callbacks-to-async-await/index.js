// Put your checkEmotion and speak functions here! ✨
// See ./original.js for their older JavaScript code.
async function checkEmotion(knownEmotions, emotion) {
	// Simulate database processing time by waiting a second...
	await new Promise((resolve) => {
		return setTimeout(resolve, 1000);
	});
	return knownEmotions.has(emotion);
}

async function speak(knownEmotions, newEmotion, phrase) {
	await checkEmotion(knownEmotions, newEmotion, (hasEmotion) => {
		if (hasEmotion) {
			return `"${phrase}" (${newEmotion})`;
		} else {
			return (
				undefined,
				new Error(`Does not compute. I do not understand ${newEmotion}.`)
			);
		}
	});
}

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
