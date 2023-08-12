import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryGrid = document.querySelector('.gallery');

const galleryMap = galleryItems
    .map(({ preview, description, original }) =>
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
).join('');

galleryGrid.insertAdjacentHTML('beforeend', galleryMap);

const lightbox = new SimpleLightbox('.gallery a', { captionsData:"alt",
captionDelay: 250, 
captionPosition: "bottom",});