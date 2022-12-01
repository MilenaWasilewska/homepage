console.log("Cześć!");

let button = document.querySelector(".js-sectionButton");
let textEducation = document.querySelector(".js-section__paragraph");

button.addEventListener("click", () => {
    textEducation.classList.toggle("show");

    if (textEducation.classList.contains("show")) {
        textEducation.innerText = "Zdobyłam tytuł inżyniera magistra na kierunku Mechaniki i Budowy Maszyn na uczelni AGH Kraków.";
        button.innerText = "Ukryj informacje o wykształceniu";
    } else {
        textEducation.innerText = "";
        button.innerText = "Wyświetl informacje o wykształceniu";
    }
});
