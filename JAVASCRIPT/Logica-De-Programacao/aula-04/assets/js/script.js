const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estyleBody = getComputedStyle(document.body);
const backgroundColorBody = estyleBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white'
}
