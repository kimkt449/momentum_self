const images = [
  "1.jpeg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpeg",
  "8.jpeg",
];

const img = images[Math.floor(Math.random() * images.length)];

const bgimg = document.createElement("img");

bgimg.src = `imgs/${img}`;

document.body.appendChild(bgimg);
