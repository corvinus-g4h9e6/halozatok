var kérdések;
var aktualkerdes;
var kérdésszám = 1;


var hotList = [];           
var questionsInHotList = 3;
var displayedQuestion;      
var numberOfQuestions;      
var nextQuestion = 1;   

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
        .then(data => kérdésMegjelenítés()
        );

    init();
}

function init() {
    for (var i = 0; i < questionsInHotList; i++) {
        let q = {
            question: {},
            goodAnswers: 0
        }
        hotList[i] = q;
    }

    
    for (var i = 0; i < questionsInHotList; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }
}

function kérdésMegjelenítés() {

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
    let kérdés = hotList[displayedQuestion].question;
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
   /* if (kérdésszám==1) {
        kérdésszám = 859;
    }
    else {
        kérdésszám--;
    }
   
    kérdésBetöltés(kérdésszám);*/

    displayedQuestion--;
    if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
    kérdésMegjelenítés()

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

    /*if (kérdésszám == 859) {
        kérdésszám = 1;
    }
    else {
        kérdésszám++;
    }

    kérdésBetöltés(kérdésszám);*/

    displayedQuestion++;
    if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
    kérdésMegjelenítés()

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


function kérdésBetöltés(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(
            result => {
                if (!result.ok) {
                    console.error(`Hibás letöltés: ${response.status}`)
                }
                else {
                    return result.json()
                }
            }
        )
    q => {
        hotList[destination].question = q;
        hotList[destination].goodAnswers = 0;
        console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`)
        if (displayedQuestion == undefined && destination == 0) {
            displayedQuestion = 0;
            kérdésMegjelenítés();
        }
    }
}    