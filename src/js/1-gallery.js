
  import SimpleLightbox from "simplelightbox";

  import "simplelightbox/dist/simple-lightbox.min.css";

  import {images} from "./gallery-images.js";

    const container = document.querySelector("ul.gallery");

    container.innerHTML = createMarkup(images);
    const modal = new SimpleLightbox('.gallery  a', {  captionsData : "alt", captionDelay : 250  });
   
    function createMarkup (arr){
      return arr.map(({preview, original, description}) => 
      `<li class="gallery-item">
      <a class="gallery-link" href="${original}">
          <img 
              class="gallery-image" 
              src="${preview}" 
              alt="${description}" 
              />
      </a>
  </li>`
      )
      .join("");
  }

  function handleModalOpen(event) {
    event.preventDefault();
    
  }


