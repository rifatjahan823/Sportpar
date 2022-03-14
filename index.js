const images =[
    "img/slider-img.jpg",
    "img/slider-img2.jpg",
    "img/slider-img3.jpg" 
]
let imageIndex = 0;
const getImage = document.getElementById("slider-image");

setInterval(() => {
    if(imageIndex>=images.length){
        imageIndex = 0;
    }
    const imgURL = images[imageIndex ] 
    imageIndex++
    getImage.setAttribute('src',imgURL)
},3000);