const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiUrl = "https://api.quotable.io/random";

/* function getQuote() {
    fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
            quoteEl.innerText = data.content;
            authorEl.innerText = data.author;
        });
} */

async function getQuote(){
    const repsonse = await fetch(apiUrl);
    const data = await repsonse.json();
    
    const quoteContent = data.content;
    const author = data.author;

    const length = data.length;
    if(length>100){
        quoteEl.style.fontSize = "7px";
    }
    quoteEl.innerText = quoteContent;
    authorEl.innerText = author;


    //console.log(data);
    
}   

getQuote();
btnEl.addEventListener("click", getQuote);