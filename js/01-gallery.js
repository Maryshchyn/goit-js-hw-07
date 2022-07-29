import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createElementsMarkup(galleryItems);
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
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
function selectGallery(event) {
    console.log(event.target);
    console.log(event.currentTarget);
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        console.log(event.target.className);
        return;}
const instance = basicLightbox.create( `<div class="modal">
<img src = ${event.target.dataset.source}
  alt=${event.target.alt}
  width = '1280'
  height = '800'
/>
</div> `, {
    onShow: instance => {
        console.log('add Listener');
        instance.element().querySelector('img').onclick = instance.close;
              window.addEventListener("keydown", handleEscape);
    },
    onClose: instance => {
        console.log('remove Listener');
        window.removeEventListener("keydown", handleEscape);
    }
});
function handleEscape(event) {
    if (event.key === 'Escape') {
        console.log('esc');
      instance.close();
      return;
    }
  }
  instance.show();
};
    galleryContainer.addEventListener("click", selectGallery);