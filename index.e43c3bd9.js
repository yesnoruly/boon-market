const e=document.querySelectorAll(".shop__btn"),t=document.querySelectorAll(".shop-item");let c="shop__btn--active";e.forEach((s=>{s.addEventListener("click",(()=>{var o;e.forEach((e=>{e.classList.remove("shop__btn--active")})),o=s.id,c=o,t.forEach((e=>{e.classList.contains(c)?e.classList.remove("hide"):e.classList.add("hide")})),s.classList.add("shop__btn--active")}))}));const s=document.querySelector(".header");window.matchMedia("(min-width: 500px)").matches&&window.addEventListener("scroll",(function(){document.documentElement.scrollTop>50?s.classList.add("header--scrolled"):s.classList.remove("header--scrolled")}));const o=document.querySelector(".header__menu"),a=document.querySelector(".header__burger"),d=document.querySelector("body");a.addEventListener("click",(function(e){e.preventDefault(),o.classList.toggle("header__menu--active"),a.classList.toggle("header__menu--active"),d.classList.toggle("lock")}));
//# sourceMappingURL=index.e43c3bd9.js.map
