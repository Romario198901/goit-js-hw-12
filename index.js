import{a as C,S as L,i as n}from"./assets/vendor-Cw50Y1o6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const w=C.create({baseURL:"https://pixabay.com/api/",timeout:1e3});async function u(r,s){try{const o=await w.get("/",{params:{key:"53360432-3950dd890aa8264617696b589",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}}),{hits:a,totalHits:e}=o.data;return{hits:a,totalHits:e}}catch(o){console.error(o)}}const P=new L(".gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:500}),l={gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-btn")};function M({webformatURL:r,largeImageURL:s,tags:o,likes:a,views:e,comments:t,downloads:c}){return`<li class="gallery-item">
<a href="${s}" class="gallery-link">
<img src="${r}" alt="${o}">
</a>
<div class="gallery-descr">
<div class="gallery-descr-item">
<p class="gallery-descr-title">Likes</p>
<p class="gallery-descr-value">${a}</p>
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
<p class="gallery-descr-value">${c}</p>
</div>
</div>
</li>`}function m(r){const s=r.map(M).join("");l.gallery.insertAdjacentHTML("beforeend",s),P.refresh()}function y(){l.gallery.innerHTML=""}function p(){l.loader.classList.remove("is-hidden")}function h(){l.loader.classList.add("is-hidden")}function b(){l.loadMoreBtn.classList.remove("is-hidden")}function d(){l.loadMoreBtn.classList.add("is-hidden")}const S=document.querySelector("form");let i,f="",g=0;const v=15;S.addEventListener("submit",B);async function B(r){r.preventDefault();const o=new FormData(r.target).get("search-text").trim();if(!o){n.warning({title:"❌",titleColor:"#fafafb",message:" Please enter search query!",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"});return}y(),p(),i=1,f=o;try{const{hits:a,totalHits:e}=await u(f,i);g=e;const t=Math.ceil(g/v);if(!a||a.length===0){n.error({title:"❌",titleColor:"#fafafb",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"});return}m(a),i<t?b():d()}catch(a){n.error({title:"❌",titleColor:"#fafafb",message:"Sorry, something went wrong!!!. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"}),console.error(a)}finally{h(),r.target.reset()}}y();l.loadMoreBtn.addEventListener("click",q);async function q(){p();try{const r=Math.ceil(g/v);if(i+1>=r){n.warning({title:"❌",titleColor:"#fafafb",message:"We're sorry, but you've reached the end of search results.",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"bottomRight"}),d();return}const s=i+1,{hits:o}=await u(f,s);if(!o||o.length===0){n.warning({title:"❌",titleColor:"#fafafb",message:"No more images found.",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"bottomRight"}),d();return}i=s,m(o);const a=l.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"}),i>=r?d():b()}catch{n.error({title:"❌",titleColor:"#fafafb",message:"Sorry, something went wrong!!!. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"}),d()}finally{h()}}
//# sourceMappingURL=index.js.map
