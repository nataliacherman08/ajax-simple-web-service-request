const quote = document.getElementById("quote");
const img = document.querySelector("img");
const author = document.getElementById("author");


fetch("https://thatsthespir.it/api")
    .then(res => {
        if (res.ok) {
            res.json().then(data => {
                img.src = data.photo;
                quote.innerText = `" ${data.quote} "`;
                author.innerText = data.author;
            })
        }
    })