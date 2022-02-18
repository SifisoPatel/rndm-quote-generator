const quoteText = document.querySelector(".quote");
authorName = document.querySelector(".author .name");
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");

//random quote function
function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading quote...";
    //fetching random quotes from api and parsing it into a javascript object 
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {

        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "Get another...";
        quoteBtn.classList.remove("loading");
    })
}

soundBtn.addEventListener("click", () => {
    //SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); //speak method of SpeechSynthesisUtterance speaks the utterance
});

//copy button
copyBtn.addEventListener("click", () => {
    //write text copies the specified text to the clipboard
    navigator.clipboard.writeText(quoteText.innerText)
});

//twitter btn
twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank"); //opening a new twitter tab with passing quote in the url
})

quoteBtn.addEventListener("click", randomQuote);