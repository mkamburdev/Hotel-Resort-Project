function preloadImages(urls) {
  for (let i = 0; i < urls.length; i++) {
    let img = new Image();
    img.src = urls[i];
  }
}

window.onload = function () {
  preloadImages([
    "./images/slider1.webp",
    "./images/slider2.webp",
    "./images/slider3.webp",
    "./images/slider4.webp",
  ]);
};
