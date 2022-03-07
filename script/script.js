let button = document.querySelector(".button");
let container = document.querySelector(".container");
let changeColorButton = document.querySelector(".changeColorButton");

button.addEventListener("click", () => {
    container.classList.toggle("whiteBackground");
    if (container.classList.contains("whiteBackground"))
    changeColorButton.innerText = "jasny";
    else 
    changeColorButton.innerText = "ciemny";
});

let season = document.querySelector(".season");
let month = document.querySelector(".month").innerText;


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