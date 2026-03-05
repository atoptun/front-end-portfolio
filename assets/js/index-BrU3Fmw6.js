import"../modulepreload-polyfill-B5Qt9EMX.js";const l="English Excellence",n="./project-preview.png",a={title:l,preview:n},j="Simply chocolate",_="./project-preview.jpg",g={title:j,preview:_},v="Web studio",d="./project-preview.jpg",w={title:v,preview:d},m="/front-end-projects/assets/img/project-preview-DeMrkegx.png",h="/front-end-projects/assets/img/project-preview-CZ7uCP-d.jpg",b="/front-end-projects/assets/img/project-preview-D5o7DGK8.jpg",u="/front-end-projects/assets/img/preview-default-Bqb_KZJC.jpg",$=Object.assign({"../projects/01-english-excellence/meta.json":a,"../projects/02-simply-chocolate/meta.json":g,"../projects/03-web-studio/meta.json":w}),s=Object.assign({"../projects/01-english-excellence/project-preview.png":m,"../projects/02-simply-chocolate/project-preview.jpg":h,"../projects/03-web-studio/project-preview.jpg":b}),c=document.querySelector("#project-list"),f=()=>{if(!c)return;const r=Object.entries($).map(([i,e])=>{const o=i.replace("/meta.json",""),t=e.preview?`${o}/${e.preview.replace("./","")}`:null,p=t&&s[t]?s[t]:u;return`
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
    `}).join("");c.innerHTML=r};f();
//# sourceMappingURL=index-BrU3Fmw6.js.map
