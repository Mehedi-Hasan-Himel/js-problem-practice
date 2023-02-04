const lyrics = `Tumi Bondhu Kala Pakhi ami jeno ki , bosonto kale tomay bolte pari ni.`;

// const doesExist = lyrics.includes(`Pakhi`)
const lyricsLowerCase = lyrics.toLowerCase();

const searchStringLower = searchStringLower.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

console.log(doesExist);
