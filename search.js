const lyrics = `Tumi Bondhu Kala Pakhi ami jeno ki , bosonto kale tomay bolte pari ni.`;

const searchString = `pakhi`;

const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

console.log(doesExist);
/*--------------------------------------------------------------------*/

// index of
console.log(lyrics.indexOf(`Kala`));

if (lyrics.indexOf(`sada`) !== -1) {
  console.log(`Sada Ache`);
} else {
  console.log(`Sada nai`);
}

// startwith
console.log(lyrics.startsWith(`2mi`));

// endsWith
const fileName = `mybiodata.pdf`;
const otherfile = `mypic.png`;
fileName.endsWith(`.pdf`);
