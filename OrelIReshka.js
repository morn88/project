let y = 0;
let n = 0;
let a;
for (let index = 0; index < 100; index++) {
    a = Math.random() * 10;
    if (a > 5){
        y++;
    }
    else{
        n++
    }
}
document.body.innerHTML = `<p>Орел: ${y}\nРешка: ${n}</p>`;
