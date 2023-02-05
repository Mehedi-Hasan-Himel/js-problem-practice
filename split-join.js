const lyrics = `Tumi Bondhu Kala Pakhi ami jeno ki , bosonto kale tomay bolte pari ni.`;

const parts = lyrics.split(` `);
const sentence = lyrics.split(` . `);
const chars = lyrics.split(``);
// console.log( chars);

const partial = lyrics.slice(5, 8);
const partial2 = lyrics.substring(5, 8);

console.log(partial2);


const lines = [
   `Tumi Bondhu Kala Pakhi ami jeno ki` ,
    `bosonto kale tomay bolte pari ni`,
   `sada saa kala kala`,
]

const newSong = lines.join(`. `)

console.log(newSong);