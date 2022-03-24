{
    const welcome = () => {
        console.log("Witaj na mojej stronie");
    }

    const onChangeColorClick = () => {
        const container = document.querySelector(".container");
        const changeColorButton = document.querySelector(".js-changeColorButton");
        container.classList.toggle("whiteBackground") ? changeColorButton.innerText = "jasny" : changeColorButton.innerText = "ciemny";
    };

    const date = () => {
        const season = document.querySelector(".js-season");
        const month = document.querySelector(".js-month").innerText;


        switch (month) {
            case "01":
            case "02":
            case "03":
                season.innerText = "zima";
                break;

            case "04":
            case "05":
            case "06":
                season.innerText = "wiosna";
                break;

            case "07":
            case "08":
            case "09":
                season.innerText = "lato";
                break;

            default:
                season.innerText = "jesień";
        }
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", onChangeColorClick);
        welcome();
        date();
    };

    init();
}