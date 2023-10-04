"use strict"
//COLORS
const contenedorColors = document.querySelector(".selector-body-colors");
console.log(contenedorColors);

/* let iconClose = document.querySelector(".fa-rectangle-xmark");
console.log(iconClose); */
const iconOpen = document.querySelector(".fa-pen");
console.log(iconOpen);

const icon_colors = document.querySelector(".choose-colors");
console.log(icon_colors);

iconOpen.addEventListener("click", () => {
    let displayContenedor = window.getComputedStyle(icon_colors).getPropertyValue("display");
    console.log(displayContenedor)
    console.log("hola")
    if (displayContenedor == "none") {
        icon_colors.style.display = "flex";
        /* iconClose.style.display = "flex" */
        iconOpen.style.display = "none"
    }
})

/* iconClose.addEventListener("click", () => {
    console.log("hola2")
    icon_colors.style.display = "none";
    iconClose.style.display = "none"
    iconOpen.style.display = "flex"
}) */

const colorChoose = document.querySelectorAll(".selector-color");
console.log(colorChoose);

const rootElement = document.documentElement;
console.log(rootElement);


colorChoose[0].addEventListener("click", () => {rootElement.style.setProperty('--skin-color', 'blue'); });
colorChoose[1].addEventListener("click", () => {rootElement.style.setProperty('--skin-color', 'green');   });
colorChoose[2].addEventListener("click", () => {rootElement.style.setProperty('--skin-color', 'palevioletred');   });
colorChoose[3].addEventListener("click", () => {rootElement.style.setProperty('--skin-color', '#ec1839');   });
colorChoose[4].addEventListener("click", () => {rootElement.style.setProperty('--skin-color', 'purple');   });

colorChoose.forEach((e,i) => {
    colorChoose[i].addEventListener("click", () => { 
        icon_colors.style.display = "none";
        iconOpen.style.display = "flex"
    })
});

//MODE DARK

const mode_dark = document.querySelector(".mode_dark");
let count = 1;
mode_dark.addEventListener("click", () => {
    count++;
    if(count % 2 == 0) {
        document.body.style.backgroundColor = "#020600";
        rootElement.style.setProperty('--bg-black-900', '#0d0d03');
        rootElement.style.setProperty('--bg-black-100', '#020600');
        rootElement.style.setProperty('--bg-black-50', '#171020');
        rootElement.style.setProperty('--text-black-900', '#cfd1b2');
        rootElement.style.setProperty('--text-black-700', '#afb18f');
    }
    else {
        document.body.style.backgroundColor = "#fdf9ff";
        rootElement.style.setProperty('--bg-black-900', '#f2f2fc');
        rootElement.style.setProperty('--bg-black-100', '#fdf9ff');
        rootElement.style.setProperty('--bg-black-50', '#e8dfec');
        rootElement.style.setProperty('--text-black-900', '#302e4d');
        rootElement.style.setProperty('--text-black-700', '#504e70');
    }
});

//MENU RSPONSIVE
const nav_toggler = document.querySelector(".aside__nav-toggler"),
links_menu = document.querySelectorAll(".link_menu"),
aside = document.querySelector(".aside");

const closeMenu = () => {
    aside.style.left = "-270px";
    aside.style.width = "270px";
}

nav_toggler.addEventListener('click', () => {
    if(aside.style.left != "0px") {
        aside.style.left = "0px";
        aside.style.width = "100%";
    }
    else closeMenu();
})


for (const link of links_menu) {
    link.addEventListener('click', () => {
        if (window.innerWidth < 1200) closeMenu();
    });
};

const ajustarAside = () => {
    if (window.innerWidth < 1200) {
        aside.style.left = "-270px";
        aside.style.width = "270px";
    } else {
        aside.style.left = "0";
        aside.style.width = "270px"; // Otra anchura deseada para pantallas más pequeñas
    }
}

window.addEventListener('resize', ajustarAside);
