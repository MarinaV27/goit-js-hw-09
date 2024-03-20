
    const container = document.querySelector("ul.gallery");
    const img = document.querySelectorAll(".galleri-link")
    container.innerHTML = creatMarkup(images);
    container.addEventListener("click", handleModalOpen);
   
    function creatMarkup (arr){
      return arr.map(({preview, original, description}) => 
      `<li class="gallery-item" >
       <a class="gallery-link" href="${original}">
         <img
           class="gallery-image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
           width = '360' 
           height = '200' 
         />
       </a>   
      </li>`
      )
      .join("");
  }
  // Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


    function handleModalOpen(event){
        if(event.currentTarget === event.target) return;
        event.preventDefault();
    const currentImage = event.target.dataset.source;
    const image = images.find(({original}) => original === currentImage);
 
    const instance = basicLightbox.create( 
       
          `<img
            class="gallery-image"
            src="${image.original}"
            alt="${image.description}" 
          />`
    ) ;
    instance.show();

    }
