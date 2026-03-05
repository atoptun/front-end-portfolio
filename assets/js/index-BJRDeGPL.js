import"../modulepreload-polyfill-B5Qt9EMX.js";const n="English Excellence",l="./project-preview.png",j={title:n,preview:l},a="Simply chocolate",_="./project-preview.jpg",v={title:a,preview:_},g="Web studio",w="./project-preview.jpg",d={title:g,preview:w},m="Cat house",h="./project-preview.jpg",b={title:m,preview:h},u="/front-end-projects/assets/img/project-preview-DeMrkegx.png",$="/front-end-projects/assets/img/project-preview-CZ7uCP-d.jpg",f="/front-end-projects/assets/img/project-preview-D5o7DGK8.jpg",C="/front-end-projects/assets/img/project-preview-BF97nXz_.jpg",y="/front-end-projects/assets/img/preview-default-Bqb_KZJC.jpg",x=Object.assign({"../projects/01-english-excellence/meta.json":j,"../projects/02-simply-chocolate/meta.json":v,"../projects/03-web-studio/meta.json":d,"../projects/04-cat-house/meta.json":b}),s=Object.assign({"../projects/01-english-excellence/project-preview.png":u,"../projects/02-simply-chocolate/project-preview.jpg":$,"../projects/03-web-studio/project-preview.jpg":f,"../projects/04-cat-house/project-preview.jpg":C}),c=document.querySelector("#project-list"),D=()=>{if(!c)return;const r=Object.entries(x).map(([i,e])=>{const o=i.replace("/meta.json",""),t=e.preview?`${o}/${e.preview.replace("./","")}`:null,p=t&&s[t]?s[t]:y;return`
      <li class="project-card">
        <a class="card-link" href="${`${o}/`.replace("../","./")}">
          <div class="card-image">
            <img src="${p}" alt="${e.title}" loading="lazy" width="300" height="300">
          </div>
          <div class="card-content">
            <h2 class="project-title">${e.title}</h2>
          </div>
        </a>
      </li>
    `}).join("");c.innerHTML=r};D();
//# sourceMappingURL=index-BJRDeGPL.js.map
