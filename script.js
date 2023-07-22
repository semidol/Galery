let loader = document.querySelector('.loader');
let btn = document.querySelector('.btn');
let gallery = document.querySelector('.gallery');
let error = document.querySelector('.error');

async function getImg() {
    loader.style.display = 'inline-block';

    try {
        let res = await fetch('https://dog.ceo/api/breeds/image/random/14');
        let data = await res.json();
        if (data) {
          displayImg(data);
        }
    } catch {
        error.style.display = 'block';
    } finally {
        loader.style.display = 'none';
    }
}

function displayImg (data) {
    for (let elem of data.message) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('gallery__img');
        gallery.appendChild(newDiv);

        let newImg = document.createElement('img');
        newImg.src = elem;
        newDiv.appendChild(newImg);
    }
}

btn.addEventListener('click', getImg)