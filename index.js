import{a as d,i,S as f}from"./assets/vendor-2TIoixgK.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=d.create({baseURL:"https://pixabay.com/api/",timeout:1e3});function g(a){return u.get("/",{params:{key:"53360432-3950dd890aa8264617696b589",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>!r.data.hits||r.data.hits.length===0?(i.error({title:"❌",titleColor:"#fafafb",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"}),null):r.data.hits).catch(r=>{console.error(r)})}const m=new f(".gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:500}),n={gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader")};function p({webformatURL:a,largeImageURL:r,tags:s,likes:o,views:e,comments:t,downloads:l}){return`<li class="gallery-item">
<a href="${r}" class="gallery-link">
<img src="${a}" alt="${s}">
</a>
<div class="gallery-descr">
<div class="gallery-descr-item">
<p class="gallery-descr-title">Likes</p>
<p class="gallery-descr-value">${o}</p>
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
<p class="gallery-descr-value">${l}</p>
</div>
</div>
</li>`}function y(a){const r=a.map(p).join("");n.gallery.innerHTML=r,m.refresh()}function c(){n.gallery.innerHTML=""}function h(){n.loader.classList.remove("is-hidden")}function b(){n.loader.classList.add("is-hidden")}const v=document.querySelector("form");v.addEventListener("submit",L);function L(a){a.preventDefault();const s=new FormData(a.target).get("search-text").trim();if(!s){i.warning({title:"❌",titleColor:"#fafafb",message:" Please enter search query!",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"});return}c(),h(),g(s).then(o=>{if(!o||o.length===0){i.error({title:"❌",titleColor:"#fafafb",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"});return}y(o)}).catch(o=>{i.error({title:"❌",titleColor:"#fafafb",message:"Sorry, something went wrong!!!. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"}),console.error(o)}).finally(()=>{b()}),a.target.reset()}c();
//# sourceMappingURL=index.js.map
