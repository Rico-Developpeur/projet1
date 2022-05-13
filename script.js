const img = document.createElement("img");
img.src = "images/courrier.gif";
img.style.width = "200px";

const affiche = document.querySelector("#contactForm");


affiche.addEventListener("click", function (event) {
    event.preventDefault();
    // efface le contenu du form, remplace par :
    affiche.innerHTML = '📜 Message envoyé 📜';
    affiche.appendChild(img);
})
