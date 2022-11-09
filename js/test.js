import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMarkup = createGalleryMarkup(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
  
};

const modalWindow = basicLightbox.create(`    
    <img src="${e.target.dataset.source}">`,
{
	closable: true,
});
  

function createGalleryMarkup(galleryItems) { 
  const itemMarkup = galleryItems.map(({ preview, original, description }) => { 
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
</div>`
  }).join("");
  return itemMarkup;
};

function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG")
    return;
  modalWindow.show();
};

function onImageClose(e) { 
  if (e.code === "Escape")
    modalWindow.close();
  document.removeEventListener('keydown', onImageClose);
}

refs.gallery.insertAdjacentHTML("beforeend", galleryMarkup);
refs.gallery.addEventListener("click", onImageClick);
refs.gallery.addEventListener("keydown", onImageClose);

