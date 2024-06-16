//1. Declaramos constantes
const botones = document.querySelectorAll(".botones__div");

const images = [
    './imgs/img1-adidas.webp',
    './imgs/img2-nike.avif',
    './imgs/img3-reebok.jpeg',
    './imgs/img4-vans.jpeg',
    './imgs/img5-northface.jpeg',
    './imgs/img6-arcteryx.jpeg',
    './imgs/img7-birkenstock.jpeg',
    './imgs/img8-levis.jpeg',
    './imgs/img9-newbalance.jpeg',
    './imgs/img10-converse.jpeg'
];

const imagenFondo = document.querySelector(".imgfondo");

botones.forEach((boton, index) => {
    boton.addEventListener("mouseover", () => {
        botonHovereado = boton;
        botones.forEach(boton => {
            if (boton === botonHovereado) {
                boton.style.opacity = 1;
            } else {
                boton.style.opacity = 0.5;
            }
        });

        imagenFondo.style.opacity = 1;
        imagenFondo.style.backgroundImage = `url(${images[index]})`;
    });

    boton.addEventListener("mouseout", () => {
        botones.forEach(boton => {
            boton.style.opacity = 1;
            imagenFondo.style.opacity = 0;
        });

    });
});