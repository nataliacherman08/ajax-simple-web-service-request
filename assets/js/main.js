/*const quote = document.getElementById("quote");
const img = document.querySelector("img");
const author = document.getElementById("author");

let error = document.getElementById("error");

fetch("https://thatsthespir.it/api")
    .then(res => {
        if (res.ok) {
            res.json().then(data => {
                if (data.photo) {
                    img.src = data.photo;
                }
                quote.innerText = data.quote;
                author.innerText = `- ${data.author}`;
            })
        } else {
            error.innerHTML = "Something went wrong :("; // Not sure that it works
        }
    })*/

window.onload = () => {
    async function getData() {
        const response = await fetch("https://thatsthespir.it/api");

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        return data;
    }

    getData()

        .then(data => {
            document.getElementById("quote").innerHTML = data.quote;
            document.getElementById("author").innerHTML = data.author;
            console.log(data.photo)
            if (data.photo) {

                document.getElementById("img").innerHTML = `<img src='${data.photo}' alt='photo'>`
            }

            console.log(data)
        })
        .catch(error => {
            error.message;
        });


}