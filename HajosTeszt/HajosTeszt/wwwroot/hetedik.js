var kérdések;
var aktualkerdes;
var kérdésszám = 1;

window.onload = function() {
    letöltés();
}



function letöltés() {

   /* fetch('/questions.json').then(response => response.json()).then(data => letöltésBefejeződött(data))

    function letöltésBefejeződött(d) {

        console.log("Sikeres letöltés")
        console.log(d)
        kérdések = d;
        kérdésMegjelenítés(kérdésszám);

    }*/

    fetch('/questions/1')
        .then(response => response.json())
        .then(data => kérdésMegjelenítés(data)
        );


}



function kérdésMegjelenítés(kérdés) {

   /* document.getElementById("kérdés_szöveg").innerHTML = kérdések[kérdés].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[kérdés].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[kérdés].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[kérdés].answer3;
    if (kérdések[kérdés].image!="") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image;

    }
    else {
        document.getElementById("kép1").src = "";
    }*/
    aktualkerdes = kérdés;
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    if (kérdés.image != "") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;

    }
    else {
        document.getElementById("kép1").src = "";
    }

}



function Vissza() {

   /* if (kérdésszám==0) {
        kérdésszám = kérdések.length-1;
        letöltés();
        Clear();
    }
    else {
        kérdésszám--;
        letöltés();
        Clear();
    }*/
    if (kérdésszám==1) {
        kérdésszám = 859;
    }
    else {
        kérdésszám--;
    }
   
    kérdésBetöltés(kérdésszám);
    Clear();

}

function Elore() {
   /* if (kérdésszám == kérdések.length-1) {
        kérdésszám = 0;
       
    }
    else {
        kérdésszám++;
        letöltés();
        
    }*/

    if (kérdésszám == 859) {
        kérdésszám = 1;
    }
    else {
        kérdésszám++;
    }

    kérdésBetöltés(kérdésszám);
    Clear();

  
   

}


function valasz1Click() {

    valaszCheck(1);
}

function valasz2Click() {

    valaszCheck(2);
}

function valasz3Click() {

    valaszCheck(3);
}



function valaszCheck(n) {
   
    if (n==aktualkerdes.correctAnswer) {
        document.getElementById("válasz" + n).classList.add("jo");
    }
    else {
        document.getElementById("válasz" + n).classList.add("rossz");
    }
   
}

function Clear() {
    document.getElementById("válasz1").classList.remove("jo");
    document.getElementById("válasz1").classList.remove("rossz");
    document.getElementById("válasz2").classList.remove("jo");
    document.getElementById("válasz2").classList.remove("rossz");
    document.getElementById("válasz3").classList.remove("jo");
    document.getElementById("válasz3").classList.remove("rossz");
}


function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
}    