const textareaEl = document.querySelector(".textarea");
const charactersNumberEl = document.querySelector(".stat__number--ch");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--fb");
const wordsNumberEl = document.querySelector(".stat__number--words");

const inputHandler = () => {
  if (textareaEl.value.includes("<script>")) {
    alert("you cant use script here hehe");
    textareaEl.value = textareaEl.value.replace("<script>", "");
  }
  let numberOfWords = textareaEl.value.split(" ").length;
  if (textareaEl.value.length === 0) {
    numberOfWords = 0;
  }
  let numberOfCh = textareaEl.value.length;
  const twitterCh = 280 - numberOfCh;
  const fbCh = 2200 - numberOfCh;

  if (fbCh < 0) {
    facebookNumberEl.classList.add("stat__number--limit");
  } else {
    if (facebookNumberEl.classList.contains("stat__number--limit"))
      facebookNumberEl.classList.remove("stat__number--limit");
  }

  if (twitterCh < 0) {
    twitterNumberEl.classList.add("stat__number--limit");
  } else {
    if (twitterNumberEl.classList.contains("stat__number--limit")) {
      twitterNumberEl.classList.remove("stat__number--limit");
    }
  }

  wordsNumberEl.textContent = numberOfWords;
  charactersNumberEl.textContent = numberOfCh;
  twitterNumberEl.textContent = twitterCh;
  facebookNumberEl.textContent = fbCh;
};

textareaEl.addEventListener("input", inputHandler);
