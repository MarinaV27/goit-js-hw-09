import"./vendor-6c1dc48c.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const s=document.querySelector("ul.gallery");document.querySelectorAll(".galleri-link");s.innerHTML=l(images);s.addEventListener("click",a);function l(t){return t.map(({preview:i,original:o,description:n})=>`<li class="gallery-item" >
       <a class="gallery-link" href="${o}">
         <img
           class="gallery-image"
           src="${i}"
           data-source="${o}"
           alt="${n}"
           width = '360' 
           height = '200' 
         />
       </a>   
      </li>`).join("")}function a(t){if(t.currentTarget===t.target)return;t.preventDefault();const i=t.target.dataset.source,o=images.find(({original:e})=>e===i);basicLightbox.create(`<img
            class="gallery-image"
            src="${o.original}"
            alt="${o.description}" 
          />`).show()}
//# sourceMappingURL=1-gallery-f4da973f.js.map
