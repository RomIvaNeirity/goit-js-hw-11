import{a as c,S as u,i as l}from"./assets/vendor-Bh6Y_e5t.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function m(s){return c({method:"get",url:"https://pixabay.com/api/",params:{key:"28573378-d6ea96aa58230c7b9cb77205d",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}function p(s){let e="";return s.message==="Network Error"?e="ERR_INTERNET_DISCONNECTED":s.response?e=`Помилка сервера: ${s.response.status}`:s.request&&(e="⏳ Сервер не відповідає."),console.error("Axios error:",s),e}const f=document.querySelector(".gallery");function d(s){let e="";s.forEach(r=>{e=e+`<li class="gallery-item">
  <a class="gallery-link" href="${r.largeImageURL}">
    <img
      class="gallery-image"
      src="${r.webformatURL}"
           alt="${r.tags}"
    />
  </a>
  <ul class="image-attribute-list">
  <lI class="image-attribute-list-item">
  <p>Likes</p>
  <p>${r.likes}</p>
  </lI>
   <lI class="image-attribute-list-item">
   <p>Views</p>
  <p>${r.views}</p>
  </lI>
   <lI class="image-attribute-list-item">
   <p>Comments</p>
  <p>${r.comments}</p>
  </lI>
   <lI class="image-attribute-list-item">
   <p>Downloads</p>
  <p>${r.downloads}</p>
  </lI>
  </ul> 
</li>`}),f.insertAdjacentHTML("beforeend",e),g.refresh()}const g=new u(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250});let n;const h=document.querySelector("form");h.addEventListener("submit",y);function y(s){s.preventDefault(),n=s.target.elements["search-text"].value.trim(),m(n).then(e=>{const r=e.data;if(!r.hits.length){l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",backgroundColor:"blue",timeout:3e3});return}d(r.hits)}).catch(e=>{const r=p(e);l.show({message:r,position:"center",backgroundColor:"red",timeout:3e3})})}
//# sourceMappingURL=index.js.map
