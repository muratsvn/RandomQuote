const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  try {
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "Updating...";

    const response = await fetch(apiURL);
    const data = await response.json();

    const quoteContent = data.content;
    const author = data.author;
    const length = data.length;

    if (length > 200) {
      quoteEl.style.fontSize = "1.5vw";
      authorEl.style.fontSize = "1.2vw";
    } else if (length > 130) {
      quoteEl.style.fontSize = "2.4vw";
      authorEl.style.fontSize = "2.2vw";
    } else {
      quoteEl.style.fontSize = "3vw";
      authorEl.style.fontSize = "2.6vw";
    }

    quoteEl.innerText = quoteContent;
    authorEl.innerText = author;

    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
    console.log(data);
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "An error happened, try again later";
    authorEl.innerText = "An error happened";
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
  }
}

getQuote();
btnEl.addEventListener("click", getQuote);