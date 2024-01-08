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
    fetch("https://meme-api.com/gimme/memes").then((response) => response.json()).then(data => {
        updateDetails(data.url, data.title, data.author);
    })
}

memeButton.addEventListener("click", generateMeme)

function capture() {
  const captureElement = document.querySelector('#capture');
  html2canvas(captureElement)
    .then(canvas => {
      canvas.style.display = 'none';
      document.body.appendChild(canvas);
      return canvas;
    })
    .then(canvas => {
      setTimeout(() => {
        const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
        const a = document.createElement('a');
        a.setAttribute('download', 'my-image.png');
        a.setAttribute('href', image);
        a.click();
        canvas.remove();
      }, 1000); // Delay in milliseconds
    });
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', capture);



generateMeme();
