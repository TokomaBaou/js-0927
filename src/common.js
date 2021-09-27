//DOM要素が読み込まれたとき
(() => {
  window.addEventListener(
    "DOMContentLoaded",
    () => {
      console.log("表示された");
    },
    false
  );
})();

// window.addEventListener("DOMContentLoaded", (event) => {
//   console.log("DOM fully loaded and parsed");
// });
