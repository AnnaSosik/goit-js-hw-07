import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// <-- GALLERY GRID MAP --> //
const galleryGrid = document.querySelector('.gallery');

const galleryMap = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`
  )
  .join('');

console.log(galleryMap);

galleryGrid.insertAdjacentHTML('beforeend', galleryMap);

// <-- MODAL-->//
// <--EVENT "CLICK"/"KEYDOWN"--> //

galleryGrid.addEventListener('click', ImgClick);

function ImgClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return e.preventDefault();
  }

  const modal = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`,

    {
      onShow: () => document.addEventListener('keydown', EscKey),
      onClose: () => document.removeEventListener('keydown', EscKey),
    }
  );

  modal.show();

  function EscKey(e) {
    if (e.code === 'Escape') {
      modal.close();
    }
  }
}
