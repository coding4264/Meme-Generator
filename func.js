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

function capture() {
  const captureElement = document.querySelector('#capture');
  captureElement.style.display = 'block';
  html2canvas(captureElement)
    .then(canvas => {
      canvas.style.display = 'none';
      document.body.appendChild(canvas);
      return canvas;
    })
    .then(canvas => {
      const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      const a = document.createElement('a');
      a.setAttribute('download', 'my-image.png');
      a.setAttribute('href', image);
      a.click();
      captureElement.style.display = 'none'; // Restore the original style
      canvas.remove();
    });
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', capture);


generateMeme();
