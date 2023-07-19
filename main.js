const cookieButton = document.querySelector("#btnCookie")
const resetCookieButton = document.querySelector("#btnNewCookie")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const luckyPhrase = document.querySelector(".lucky")
const wisdomPhrases = [
  "Toda solução abre caminho para novos problemas.",
  "Alimentar uma vaca com flores não gera mais apreciação.",
  "Não faça aos outros o que não quer que façam a você.",
  "Lembre do ontem, mas viva o hoje!",
  "Recupere as energias, você vai conseguir os seus objetivos depois disso.",
  "Boa sorte vem de um bom planejamento.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão.",
  "Se alguém está tão cansado que não possa lhe dar um sorriso, deixa-lhe o teu.",
  "Na vida, duas coisas são certas: o amor e a morte.",
  "Você não pode mudar o vento, mas pode ajustar as velas do barco para chegar onde quer.",
  "Uma vida não questionada não merece ser vivida.",
  "Nada é suficiente para quem o suficiente é pouco.",
  "Não importa o quão devagar você vá, desde que não pare.",
  "O rio atinge seus objetivos, porque aprendeu a contornar obstáculos.",
  "A dúvida é o princípio da sabedoria.",
  "Você vive hoje uma vida que gostaria de viver por toda a eternidade?",
  "Nada é permanente, exceto a mudança.",
  "É livre quem deixou de ser escravo de si mesmo.",
  "Apressa-te a viver bem e pensa que cada dia é, por si só, uma vida.",
  "A vida deve ser compreendida para trás. Mas deve ser vivida para frente.",
]
const hideScreen = () => {
  screen2.classList.toggle("hide")
  screen1.classList.toggle("hide")
}

const randomCookie = () => {
  let randomNumber = Math.floor(Math.random() * (wisdomPhrases.length))
  luckyPhrase.innerText = wisdomPhrases[randomNumber]
}

const handleCookieClick = (event) => {
  randomCookie()
  hideScreen()
}

cookieButton.addEventListener("click", handleCookieClick)
resetCookieButton.addEventListener("click", hideScreen)
document.addEventListener("keydown", (e) => {
  if(e.key== 'Enter' && screen1.classList.contains('hide')) {
    hideScreen()
  }
});