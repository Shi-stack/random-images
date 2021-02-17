const imgArray = ['images/img-1.jpg','images/img-2.jpg','images/img-3.jpg','images/img-4.jpg', 'images/img-5.jpg','images/img-6.jpg','images/img-7.jpg','images/img-8.jpg','images/img-9.jpg','images/img-10.jpg'];

const randomImg = imgArray[Math.floor(Math.random() * imgArray.length)];

document.querySelector('img').setAttribute('src',randomImg);
