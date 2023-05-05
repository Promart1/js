const t=document.querySelector(".siteBar-category-list");fetch("https://books-backend.p.goit.global/books/category-list").then((t=>t.json())).then((e=>{const o=e.map((t=>function({list_name:t}){return`<li class="siteBar-category-item">${t}</li>`}(t))).join("");console.log(e),t.insertAdjacentHTML("beforeend",o)}));
//# sourceMappingURL=index.0ef68dd1.js.map
