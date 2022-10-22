// const img = document.createElement("img");
// img.src = "./images/courrier.gif";
// img.style.width = "200px";

// const affiche2 = document.querySelector("#contactForm");

// const affiche = document.querySelector(".button3");

// const select_contact_p = document.querySelector(".contact_p");

// affiche.addEventListener("click", function (event) {
//     event.preventDefault();
//     // efface le contenu du p :
//     select_contact_p.innerHTML = "";
//     // efface le contenu du form, remplace par :
//     affiche2.innerHTML = '📜 Message envoyé 📜';
//     affiche2.appendChild(img);
// })

// transition texte formulaire de contact
const ratio = 0.1;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      observer.unobserver(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll(".reveal").forEach(function (r) {
  observer.observe(r);
});
