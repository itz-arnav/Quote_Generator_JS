"use strict";

const quoteMaal = document.querySelector(".quote-material");
const kahawaat = document.querySelector(".quote-text");
const guruji = document.querySelector(".quote-author");

let apiQuotes = [];

async function getQuotes() {
  const APIurl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(APIurl);
    apiQuotes = await response.json();
  } catch (err) {
    console.alert(err);
  }
}

getQuotes();

document.querySelector(".next-quote").addEventListener("click", function () {
  let len = apiQuotes.length;
  let random = Math.floor(Math.random() * len);
  console.log(random);
  console.log(apiQuotes[1]);
  kahawaat.innerText = apiQuotes[random].text;
  if (apiQuotes[random].text.length > 100) {
    quoteMaal.classList.add("long-quote");
  } else {
    quoteMaal.classList.remove("long-quote");
  }
  if (apiQuotes[random].author != undefined) {
    guruji.innerText = apiQuotes[random].author;
  } else {
    guruji.innerText = "Unknown";
  }
});

document.querySelector(".twitter").addEventListener("click", function () {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${kahawaat.textContent} - ${guruji.textContent}`;
  window.open(twitterUrl, "_blank");
});
