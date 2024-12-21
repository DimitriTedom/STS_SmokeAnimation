const text = document.getElementById("textId");
const text1 = document.getElementById("textid");

text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
text1.innerHTML = text1.textContent.replace(/\S/g, "<span>$&</span>");

// Note:
// /\S/ : Expression régulière qui trouve tous les caractères non espace.
// $& : Représente le caractère trouvé par la regex.
// Chaque caractère (lettre) est enveloppé dans un <span>.
// Exemple : Le texte Code devient :
// <span>C</span><span>o</span><span>d</span><span>e</span>

const MySpan = document.querySelectorAll("span");

MySpan.forEach(span => {
    span.addEventListener("mouseover", () => {
        span.classList.add("active");
    });
});