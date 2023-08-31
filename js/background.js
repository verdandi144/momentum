const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg"
]

//random한 img choose
const chosenImage = images[Math.floor(Math.random() * images.length)];

//Javascript로 HTML에 img.src 추가하기
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

//bgImage를 HTML body 내부에 추가하기
document.body.appendChild(bgImage);