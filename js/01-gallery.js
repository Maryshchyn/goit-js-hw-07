import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createElementsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", selectGallery);

function selectGallery(evt) {
    evt.preventDefault();
}


function createElementsMarkup(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">
             <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
             />
            </a>
            </div>`;
        }).join("")
};


const instance = basicLightbox.create(`<img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
             />`, {
    onShow: (instance) => {
        window.addEventListener("keydown", openClose);
    },
    onClose: (instance) => {
        window.removeEventListener("keydown", openClose);
    }
});

function openClose(evt) {
    if (evt.target.className !== "gallery__image") {
        console.log(evt.target.className);
        return;
    }
}



