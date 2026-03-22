import{a as w,S as b,i as n}from"./assets/vendor-DQvd0HNi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const S="55034469-fe8c7c81350cc4405e2a2064a",d=15;async function p(t,s){const o={key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:d};return(await w.get("https://pixabay.com/api/",{params:o})).data}const m=document.querySelector(".gallery"),y=new b(".gallery a",{captionsData:"alt",captionDelay:250});y.refresh();function h(t){const o=t.map(r=>`
      <li class="gallery__item">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
        </a>
        <div class="info">
  <p class="info-item">
    <span class="info-title">Likes</span>
    <span class="info-value">${r.likes}</span>
  </p>
  <p class="info-item">
    <span class="info-title">Views</span>
    <span class="info-value">${r.views}</span>
  </p>
  <p class="info-item">
    <span class="info-title">Comments</span>
    <span class="info-value">${r.comments}</span>
  </p>
  <p class="info-item">
    <span class="info-title">Downloads</span>
    <span class="info-value">${r.downloads}</span>
  </p>
</div>
      </li>
    `).join("");m.insertAdjacentHTML("beforeend",o),y.refresh()}function P(){m.innerHTML=""}function g(){document.querySelector(".loader").classList.add("active")}function L(){document.querySelector(".loader").classList.remove("active")}function v(){document.querySelector(".button-load-more").classList.add("is-hidden")}function q(){document.querySelector(".button-load-more").classList.remove("is-hidden")}const f=document.querySelector(".form"),_=document.querySelector(".button-load-more");let i=1,c="",u=0;f.addEventListener("submit",async t=>{if(t.preventDefault(),c=f.querySelector('input[name="search-text"]').value.trim(),!c){n.warning({message:"Please enter a search term!"});return}i=1,P(),v(),g();try{const o=await p(c,i);if(u=o.totalHits,o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(o.hits),u>d&&q()}catch{n.error({message:"Something went wrong. Please try again later!"})}finally{L()}});_.addEventListener("click",async()=>{i+=1,g();try{const t=await p(c,i);h(t.hits);const s=Math.ceil(u/d);i>=s&&(v(),n.info({message:"We're sorry, but you've reached the end of search results."}));const r=document.querySelector(".gallery__item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}catch{n.error({message:"Something went wrong. Please try again later!"})}finally{L()}});
//# sourceMappingURL=index.js.map
