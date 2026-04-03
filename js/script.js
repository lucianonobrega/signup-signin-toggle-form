let gradientSasuke = document.querySelector(".gradientSasuke");
let signUpLink = document.getElementById("signUpLink");
let signInLink = document.getElementById("signInLink");
let bgImage = document.querySelector(".bgContainer");
let signUpContainer = document.getElementById("signUpContainer");
let signInContainer = document.getElementById("signInContainer");
let containerPai = document.getElementById("containerPai");
let inputPassword = document.querySelectorAll(".inputPassword");
let olho = document.querySelectorAll(".olho");

signInLink.addEventListener("click", () => {
  gradientSasuke.classList.add("opacidade0");
  containerPai.classList.add("bordaNarutoContainerPai");
  bgImage.classList.add("transicao");
  bgImage.classList.add("bgNaruto");
  bgImage.classList.remove("bgSasuke");
  signInContainer.classList.remove("opacidade0");
  signUpContainer.classList.remove("opacidade1");
  signInContainer.classList.add("opacidade1");
  signUpContainer.classList.add("opacidade0");
})

signUpLink.addEventListener("click", () => {
  gradientSasuke.classList.remove("opacidade0");
  containerPai.classList.remove("bordaNarutoContainerPai");
  bgImage.classList.remove("transicao");
  bgImage.classList.add("bgSasuke");
  bgImage.classList.remove("bgNaruto");
  signInContainer.classList.remove("opacidade1");
  signUpContainer.classList.remove("opacidade0");
  signInContainer.classList.add("opacidade0");
  signUpContainer.classList.add("opacidade1");
})

let olhos = document.querySelectorAll(".olho");

olhos.forEach((olho) => {
  olho.addEventListener("click", () => {
    
    let inputPassword = olho.parentElement.querySelector("input");

    if (olho.src.includes("olho.png")) {
      olho.src = "assets/imagens/olhofechado.png";
      inputPassword.type = "text";
    } else {
      olho.src = "assets/imagens/olho.png";
      inputPassword.type = "password";
    }
  });
});