const body = document.querySelector("body");
let currentImg;

const wait = function (seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImg = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = `${imgPath}`;
    img.addEventListener("load", () => {
      body.appendChild(img);
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error("Image not found"));
    });
  });
};

createImg("img/img-2.jpg")
  .then((img) => {
    currentImg = img;
    console.log(currentImg);
    return wait(2);
  })
  .then(() => {
    body.removeChild(currentImg);
    return createImg("img/img-1.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log(currentImg);
    return wait(2);
  })
  .then(() => {
    body.removeChild(currentImg);
  })
  .catch((err) => console.log(err));
