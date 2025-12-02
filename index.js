import{a as b,S as v,i as n}from"./assets/vendor-Cw50Y1o6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const C=b.create({baseURL:"https://pixabay.com/api/",timeout:1e3});async function m(r,o){try{const a=await C.get("/",{params:{key:"53360432-3950dd890aa8264617696b589",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}}),{hits:s,totalHits:e}=a.data;return{hits:s,totalHits:e}}catch(a){console.error(a)}}const L=new v(".gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:500}),l={gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-btn")};function w({webformatURL:r,largeImageURL:o,tags:a,likes:s,views:e,comments:t,downloads:d}){return`<li class="gallery-item">
<a href="${o}" class="gallery-link">
<img src="${r}" alt="${a}">
</a>
<div class="gallery-descr">
<div class="gallery-descr-item">
<p class="gallery-descr-title">Likes</p>
<p class="gallery-descr-value">${s}</p>
</div>
<div class="gallery-descr-item">
<p class="gallery-descr-title">Views</p>
<p class="gallery-descr-value">${e}</p>
</div>
<div class="gallery-descr-item">
<p class="gallery-descr-title">Comments</p>
<p class="gallery-descr-value">${t}</p>
</div>
<div class="gallery-descr-item">
<p class="gallery-descr-title">Downloads</p>
<p class="gallery-descr-value">${d}</p>
</div>
</div>
</li>`}function y(r){const o=r.map(w).join("");l.gallery.insertAdjacentHTML("beforeend",o),L.refresh()}function P(){l.gallery.innerHTML=""}function p(){l.loader.classList.remove("is-hidden")}function f(){l.loader.classList.add("is-hidden")}function M(){l.loadMoreBtn.classList.remove("is-hidden")}function i(){l.loadMoreBtn.classList.add("is-hidden")}const S=document.querySelector("form");let c=1,g="",u=0;const h=15;i();S.addEventListener("submit",B);async function B(r){r.preventDefault();const a=new FormData(r.target).get("search-text").trim();if(!a){n.warning({title:"❌",titleColor:"#fafafb",message:" Please enter search query!",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"});return}P(),i(),p(),c=1,g=a;try{const{hits:s,totalHits:e}=await m(g,c);u=e;const t=Math.ceil(u/h);if(!s||s.length===0){n.error({title:"❌",titleColor:"#fafafb",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"});return}y(s),c<t?M():i()}catch(s){n.error({title:"❌",titleColor:"#fafafb",message:"Sorry, something went wrong!!!. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"}),console.error(s)}finally{f()}r.target.reset()}l.loadMoreBtn.addEventListener("click",q);async function q(){p();try{const r=Math.ceil(u/h),o=c+1;if(o>r){n.warning({title:"❌",titleColor:"#fafafb",message:"We're sorry, but you've reached the end of search results.",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"bottomRight"}),i(),f();return}const{hits:a}=await m(g,o);if(!a||a.length===0){n.warning({title:"❌",titleColor:"#fafafb",message:"No more images found.",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"bottomRight"}),i();return}c=o,y(a);const s=l.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"}),c===r&&i()}catch{n.error({title:"❌",titleColor:"#fafafb",message:"Sorry, something went wrong!!!. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"}),i()}finally{f()}}
//# sourceMappingURL=index.js.map
