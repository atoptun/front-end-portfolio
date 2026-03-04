import"../modulepreload-polyfill-B5Qt9EMX.js";const a="English Excellence",n="./images/preview.png",o={title:a,preview:n},p=Object.assign({"../projects/01-english-excellence/meta.json":o}),l=document.querySelector("#project-list"),d=({title:e,preview:r,url:t})=>`
  <li class="project-card">
    <a class="card-link" href="${t}">
      <div class="card-image">
        <img src="${r}" alt="${e}" loading="lazy" width="300" height="300">
      </div>
      <div class="card-content">
        <h2 class="project-title">${e}</h2>
      </div>
    </a>
  </li>
  `,j=()=>{if(!l)return;const e=[];Object.entries(p).forEach(([r,t])=>{const c=r.replace("/meta.json",""),s=`${c}/index.html`.replace("../","./");let i="./img/preview-default.jpg";t.preview&&(i=new URL(`${c}/${t.preview}`,import.meta.url).href),e.push(d({title:t.title,preview:i,url:s}))}),l.insertAdjacentHTML("beforeend",e.join(""))};j();
//# sourceMappingURL=index-C7wDZS-O.js.map
