import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createElementsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);


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

galleryContainer.addEventListener("click", selectGallery);

function selectGallery(event) {
    console.log(event.target);
    console.log(event.currentTarget);
    event.preventDefault();
};
const instance = basicLightbox.create(`<img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
             />`, {
    onShow: (instance) => {
              galleryContainer.addEventListener('onShow', openCloseLightbox)
    },
        
        
    onClose: (instance) => {
        galleryContainer.removeEventListener('onClose', openCloseLightbox)
    }
});
function openCloseLightbox(event) {
        if (event.target.className !== "gallery__image") {
        console.log(event.target.className);
        return;
    }
    }
