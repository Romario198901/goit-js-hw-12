import{a as h,S as b,i as n}from"./assets/vendor-Cw50Y1o6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const v=h.create({baseURL:"https://pixabay.com/api/",timeout:1e3});async function d(o,s){try{const t=await v.get("/",{params:{key:"53360432-3950dd890aa8264617696b589",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}}),{hits:r,totalHits:e}=t.data;return{hits:r,totalHits:e}}catch(t){console.error(t)}}const C=new b(".gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:500}),i={gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-btn")};function L({webformatURL:o,largeImageURL:s,tags:t,likes:r,views:e,comments:a,downloads:c}){return`<li class="gallery-item">
<a href="${s}" class="gallery-link">
<img src="${o}" alt="${t}">
</a>
<div class="gallery-descr">
<div class="gallery-descr-item">
<p class="gallery-descr-title">Likes</p>
<p class="gallery-descr-value">${r}</p>
</div>
<div class="gallery-descr-item">
<p class="gallery-descr-title">Views</p>
<p class="gallery-descr-value">${e}</p>
</div>
<div class="gallery-descr-item">
<p class="gallery-descr-title">Comments</p>
<p class="gallery-descr-value">${a}</p>
</div>
<div class="gallery-descr-item">
<p class="gallery-descr-title">Downloads</p>
<p class="gallery-descr-value">${c}</p>
</div>
</div>
</li>`}function u(o){const s=o.map(L).join("");i.gallery.insertAdjacentHTML("beforeend",s),C.refresh()}function m(){i.gallery.innerHTML=""}function y(){i.loader.classList.remove("is-hidden")}function p(){i.loader.classList.add("is-hidden")}function w(){i.loadMoreBtn.classList.remove("is-hidden")}function g(){i.loadMoreBtn.classList.add("is-hidden")}const P=document.querySelector("form");let l,f="";const M=15;P.addEventListener("submit",S);async function S(o){o.preventDefault();const t=new FormData(o.target).get("search-text").trim();if(!t){n.warning({title:"❌",titleColor:"#fafafb",message:" Please enter search query!",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"});return}m(),y(),l=1,f=t;try{const{hits:r}=await d(t,l);if(!r||r.length===0){n.error({title:"❌",titleColor:"#fafafb",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"});return}u(r),w()}catch(r){n.error({title:"❌",titleColor:"#fafafb",message:"Sorry, something went wrong!!!. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"}),console.error(r)}finally{p(),o.target.reset()}}m();i.loadMoreBtn.addEventListener("click",B);async function B(){y();try{l+=1;const{totalHits:o}=await d(l,f),s=Math.ceil(o/M);if(l>s){n.warning({title:"❌",titleColor:"#fafafb",message:"We're sorry, but you've reached the end of search results.",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"}),g();return}const{hits:t}=await d(f,l);if(!t||t.length===0){n.warning({title:"❌",titleColor:"#fafafb",message:"No more images found.",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"}),g();return}u(t);const r=i.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}catch{n.error({title:"❌",titleColor:"#fafafb",message:"Sorry, something went wrong!!!. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"})}finally{p()}}
//# sourceMappingURL=index.js.map
