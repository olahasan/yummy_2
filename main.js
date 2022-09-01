let myImage = document.getElementById("slideshow");
let images = ["images/landing/548360-pizza.jpg",
    "images/landing/715534.webp",
    "images/landing/PyUskj.webp",
    "images/landing/715490.webp",
    "images/landing/CurryLentilBurger.webp",
    "images/landing/4587540-food-burgers-french-fries.jpg",
    "images/landing/1229282-fried-beef-steak.jpg"];
console.log(myImage);
console.log(images);

let i = 0;

function slideshow() {
    myImage.setAttribute("src", images[i]);


    if (i === images.length - 1) {
        i = 0;
    } else {
        i++;
    }

    setTimeout(() => {

        slideshow();

    }, 2000);
}
slideshow();


let yum = document.getElementById("yum");
let icons = document.getElementsByClassName("icons")[0];
console.log(yum);
console.log(icons);

yum.onclick = function () {
    icons.classList.toggle("hide");
}

// breakfast
let main = document.getElementById("main");
let small = document.querySelectorAll(".small")
console.log(main);
console.log(small);


small.forEach(function (ele) {
    ele.onmouseenter = function () {
        main.src = ele.src
    }
    console.log(ele)
})

// breakfast