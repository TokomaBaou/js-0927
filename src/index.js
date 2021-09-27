import "./styles.css";
// import { DOMContentLoaded } from "dom-content-loaded";

document.getElementById("app").innerHTML = `
<div class="swiper-container">
<div class="swiper-wrapper">
  <div class="swiper-slide slide-item">
    slide1
  </div>
  <div class="swiper-slide slide-item">
    slide2
  </div>
  <div class="swiper-slide slide-item">
    slide3</div>
  </div>
  <div class="swiper-button-prev"></div>
   <div class="swiper-button-next"></div>
</div>
`;

// // (() => {
//   window.addEventListener(
//     "DOMContentLoaded",
//     () => {
//       console.log("表示された");
//     },
//     false
//   );
// })();
// window.addEventListener("DOMContentLoaded", (event) => {
//   console.log("DOM fully loaded and parsed");
// });
