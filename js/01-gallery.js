import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')

function createMarkup(el) {
return el.map(({preview,original,description})=> `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
   </a>
  </li>`).join('')  
}
galleryEl.insertAdjacentHTML('beforeend', createMarkup(galleryItems))
galleryEl.addEventListener('click', onClick)

function onClick(el) {
    el.preventDefault()
    if (el.target.classList.contains('gallery__image')) {
     let currentEl = el.target.dataset
     if (currentEl){
       const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}"   width="1200" height="800">`)
        instance.show()  
     }      
    }
}

console.log(galleryItems);

