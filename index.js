import{a as d,S as p,i as n}from"./assets/vendor-C88MgI8j.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function f(s){return d({method:"get",url:"https://pixabay.com/api/",params:{key:"28573378-d6ea96aa58230c7b9cb77205d",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}function g(s){let e="";return s.message==="Network Error"?e="ERR_INTERNET_DISCONNECTED":s.response?e=`Помилка сервера: ${s.response.status}`:s.request&&(e="Сервер не відповідає."),console.error("Axios error:",s),e}const u=document.querySelector(".gallery");function y(s){let e="";s.forEach(r=>{e=e+`<li class="gallery-item">
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
</li>`}),u.insertAdjacentHTML("beforeend",e),h.refresh()}const h=new p(".gallery-link",{captions:!0,captionDelay:250});function b(){u.innerHTML=""}const m=document.querySelector("span");function L(){m.style.display="block"}function a(){m.style.display="none"}a();let c;const I=document.querySelector("form");I.addEventListener("submit",w);function w(s){s.preventDefault(),b(),c=s.target.elements["search-text"].value.trim(),L(),f(c).then(e=>{const r=e.data;if(!r.hits.length){n.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"yellow",timeout:5e3,position:"center",messageSize:"20",backgroundColor:"magenta"}),a();return}y(r.hits),a()}).catch(e=>{const r=g(e);n.show({message:r,position:"center",backgroundColor:"red",timeout:5e3}),a()})}
//# sourceMappingURL=index.js.map
