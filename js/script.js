{
    const welcome = () => {
        console.log("Cześć!");
    };

    const toggleDisplayTextEducationClick = () => {

        const textEducation = document.querySelector(".js-section__paragraph");

        textEducation.classList.toggle("show");

        if (textEducation.classList.contains("show")) {
            textEducation.innerText = "Zdobyłam tytuł inżyniera magistra na kierunku Mechaniki i Budowy Maszyn na uczelni AGH Kraków.";
            button.innerText = "Ukryj informacje o wykształceniu";
        } else {
            textEducation.innerText = "";
            button.innerText = "Wyświetl informacje o wykształceniu";
        }
    }

    const init = () => {

        const button = document.querySelector(".js-sectionButton");
        button.addEventListener("click", toggleDisplayTextEducationClick);

        welcome();
    }

    init();
}