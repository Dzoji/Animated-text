// Selektuj tekstualni tag koji se nalazi u .section1 h1
let textTag = document.querySelector(".section1 h1");
// Dodaj tekst iz tekstualnog taga u varijablu text
let text = textTag.textContent;
// Podijeli tekst u polje sa svakim karakterom u pojedinačnom elementu
let splittedText = text.split("");
// Izbriši sadržaj tekstualnog taga
textTag.innerHTML = "";
// Za svaki karakter u polju splittedText
for (let i = 0; i < splittedText.length; i++) {
    // Ako je karakter razmak, zamijeni ga s "&nbsp"
    if (splittedText[i] == " ") {
        splittedText[i] = "&nbsp";
    }
    // Dodaj span sa sadržajem trenutnog karaktera u tekstualni tag
    textTag.innerHTML += `<span>${splittedText[i]}</span>`;
}

// Selektiraj sve spanove unutar tekstualnog taga
let spans = textTag.querySelectorAll("span");

// Kreiraj varijablu k
let k = 0;
// Kreiraj interval sa funkcijom koja će se izvoditi svakih 70ms
let interval = setInterval(() => {
    // Dodijeli varijabli singleSpan trenutni span iz polja spans
    let singleSpan = spans[k];
    // Dodaj klasu "fadeMove" trenutnom spanu
    singleSpan.className = "fadeMove";
    // Povećaj varijablu k za 1
    k++;

    // Ako je k jednako dužini polja spans, prekini interval
    if (k === spans.length) {
        clearInterval(interval);
    }
}, 70);

// selektujemo element sa klasom "border-line" i cuvamo ga u promenljivoj "border"
let border = document.querySelector(".border-line");
// inicijalizujemo promenljivu "animationWidth" na nulu
let animationWidth = 0;

// registrovanje event listener-a za dogadjaj scroll na window objektu
window.onscroll = () => {
    // provjeravamo da li se korisnik skroluje gore ili dole
    if (this.oldScroll > this.scrollY) {
        animationWidth -= 1.5; // ako se skroluje gore, umanjujemo vrijednost "animationWidth" za 1.5
    } else {
        animationWidth += 1.5; // ako se skroluje dole, uvecavamo vrijednost "animationWidth" za 1.5
    }

    // ogranicavamo vrednost "animationWidth" na raspon od 0 do 100
    if (animationWidth >= 100) {
        animationWidth = 100;
    }

    if (animationWidth <= 0) {
        animationWidth = 0;
    }

    // postavljamo sirinu elementa sa klasom "border-line" u zavisnosti od vrednosti "animationWidth"
    border.style.width = animationWidth + "%";
    // cuvamo trenutnu poziciju skrola kao vrednost "oldScroll"
    this.oldScroll = this.scrollY;

    // pozivamo funkciju "imageAnimation" koja animira slike u drugoj sekciji
    imageAnimation();
};

// definisemo funkciju "imageAnimation"
const imageAnimation = () => {
    // selektujemo element sa klasom "images" unutar druge sekcije i cuvamo ga u promenljivoj "sectionForAnimation"
    let sectionForAnimation = document.querySelector(".section2 .images");
    // dobavljamo poziciju elementa "sectionForAnimation" u odnosu na viewport
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
    // racunamo visinu viewport-a podeljenu sa 1.2 i cuvamo u promenljivoj "screenPosition"
    let screenPosition = window.innerHeight / 1.2;

    // selektujemo elemente slika sa klasom "slideFromLeft" i "slideFromRight" i cuvamo ih u varijablama "leftImage" i "rightImage"
    let leftImage = document.querySelector(".slideFromLeft");
    let rightImage = document.querySelector(".slideFromRight");

    // proveravamo da li se sekcija nalazi u vidljivom delu viewport-a
    if (sectionPosition < screenPosition) {
        // ako sekcija jeste u vidljivom delu viewport-a, dodajemo im klasu "animated" koja ih animira
        leftImage.classList.add("animated");
        rightImage.classList.add("animated");
    }
};
