import"../modulepreload-polyfill-B5Qt9EMX.js";const o="English Excellence",a="./project-preview.png",p={title:o,preview:a},j="/front-end-projects/assets/img/project-preview-DeMrkegx.png",g="/front-end-projects/assets/img/preview-default-Bqb_KZJC.jpg",d=Object.assign({"../projects/01-english-excellence/meta.json":p}),c=Object.assign({"../projects/01-english-excellence/project-preview.png":j}),s=document.querySelector("#project-list"),v=()=>{if(!s)return;const l=Object.entries(d).map(([n,e])=>{const r=n.replace("/meta.json",""),t=e.preview?`${r}/${e.preview.replace("./","")}`:null,i=t&&c[t]?c[t]:g;return`
      <li class="project-card">
        <a class="card-link" href="${`${r}/`.replace("../","./")}">
          <div class="card-image">
            <img src="${i}" alt="${e.title}" loading="lazy" width="300" height="300">
          </div>
          <div class="card-content">
            <h2 class="project-title">${e.title}</h2>
          </div>
        </a>
      </li>
    `}).join("");s.innerHTML=l};v();
//# sourceMappingURL=index-DbTROsk_.js.map
