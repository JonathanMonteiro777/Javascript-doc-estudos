function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 1;
const max = 50;
let rand = randomNumber(min, max);

while (rand !== 10) {
    rand = randomNumber(min, max);
    console.log(rand);
}

console.log('######');
do {
    rand = randomNumber(min, max);
    console.log(rand);
} while (rand !== 10);
