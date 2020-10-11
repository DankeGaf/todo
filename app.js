let input = document.querySelector(".block__form-input")
let button = document.querySelector(".block__form-button-add")
let blockList = document.querySelector(".block__list")

function createElements(text){
    let newElement = document.createElement("p");
    newElement.className = "block__list-element";
    newElement.textContent = text;
    blockList.appendChild(newElement);

    let deleteSpan = document.createElement("span");
    deleteSpan.className = "block__list-delete";
    deleteSpan.textContent = "Х";
    newElement.appendChild(deleteSpan);
    deleteSpan.addEventListener("click", function(){
        blockList.removeChild(newElement)
    });

   /* let compliteSpan = document.createElement("span");
    compliteSpan.className = "block__list-complite";
    compliteSpan.textContent */

}

button.addEventListener("click", function(e){
    e.preventDefault();
    if(!(input.value === "Введите дело" || input.value === "")) {
        createElements(input.value);
        input.value = "";
    }
});

input.addEventListener("focus", function(){
    input.value = "";
});

input.addEventListener("blur", function(){
    if(!(input.value === "Введите дело" || input.value === ""));
    input.value = "Введите дело";
});