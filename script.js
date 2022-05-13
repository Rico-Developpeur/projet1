const img = document.createElement("img");
img.src = "courrier.gif";
img.style.width = "200px";
// const d = document.
const affiche = document.querySelector("#contactForm");


affiche.addEventListener("click", function (event) {
    event.preventDefault();
    // J'efface le contenu du formulaire
    affiche.innerHTML = '';
    // je remplace par le GIF
    affiche.appendChild(img);
})
