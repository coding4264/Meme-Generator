const memeButton = document.querySelector(".memes .meme-button");
const memeImage = document.querySelector(".memes img");
const memeTitle = document.querySelector(".memes .meme-title");
const memeAuthor = document.querySelector(".memes .meme-author")

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;

}


const generateMeme = () => {
    fetch("https://meme-api.com/gimme/programmerhumor").then((response) => response.json()).then(data => {
        updateDetails(data.url, data.title, data.author);
    })
}

memeButton.addEventListener("click", generateMeme)

generateMeme();
