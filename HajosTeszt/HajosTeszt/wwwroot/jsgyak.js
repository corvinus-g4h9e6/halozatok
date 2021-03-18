
window.onload = function () {



    let hova = document.getElementById("ide")
    let sor = document.createElement("div");
    sor.classList.add("sorban");
    hova.appendChild(sor);
    for (var o = 0; o < 10; o++) {
        let szám = document.createElement("div");
        sor.appendChild(szám);
        szám.classList.add("doboz");
        szám.innerText = o + 1;
        szám.style.background = `rgb(0, ${255 - (20 * o)},0)`;



    }
 

    var faktoriális = function (n) {
        let er = 1;
        for (let i = 2; i <= n; i++) {
            er = er * i;
        }
        return er;
    }

    for (var s = 0; s < 10; s++) {

        let where = document.getElementById("pascal");
        let sor = document.createElement("div");
        sor.classList.add("sor");
        where.appendChild(sor);

        for (var o = 0; o <= s; o++) {

            let szam = document.createElement("div");
            sor.appendChild(szam);
            szam.classList.add("elem");
            szam.innerText = faktoriális(s) / (faktoriális(o) * (faktoriális(s - o)));
        }
    }

}