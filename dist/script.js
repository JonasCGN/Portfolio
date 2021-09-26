var img = 0;
var github = [
  "https://i.imgur.com/82S6KZi.png",
  "https://i.imgur.com/shYntbA.png"
];

function alterarTema() {
  document.body.classList.toggle("dark");

  if (img == github.length) {
    img = 0;
  }
  document.getElementById("github").src = github[img];
  img++;
}