const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let links = document.getElementsByTagName('a');
links[0].textContent = siteContent.nav["nav-item-1"];
links[0].style.color = "green";
links[1].textContent = siteContent.nav["nav-item-2"];
links[1].style.color = "green";
links[2].textContent = siteContent.nav["nav-item-3"];
links[2].style.color = "green";
links[3].textContent = siteContent.nav["nav-item-4"];
links[3].style.color = "green";
links[4].textContent = siteContent.nav["nav-item-5"];
links[4].style.color = "green";
links[5].textContent = siteContent.nav["nav-item-6"];
links[5].style.color = "green";

let nav1 = document.createElement('a');
nav1.textContent = "Login";
nav1.style.color = 'green';
let navBar1 = document.querySelector('nav');
navBar1.prepend(nav1);

let nav2 = document.createElement('a');
nav2.textContent = "Logout";
nav2.style.color = "green";
let navBar2 = document.querySelector('nav');
navBar2.append(nav2);





let title = document.querySelector('.cta-text h1');
title.innerHTML = siteContent.cta.h1;
title.style.weight = "bold";


let circleImg = document.querySelector('#cta-img');
circleImg.setAttribute('src', siteContent['cta']['img-src']);

let butt = document.querySelector("button"); 
butt.textContent = "Get Started!";

let feat4 = document.querySelectorAll(".top-content .text-content h4");
feat4[0].textContent = siteContent["main-content"]["features-h4"];
feat4[1].textContent = siteContent["main-content"]["about-h4"];

let feat4cont = document.querySelectorAll(".top-content p");
feat4cont[0].textContent = siteContent["main-content"]["features-content"];
feat4cont[1].textContent = siteContent["main-content"]["about-content"];

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let serv4 = document.querySelectorAll(".bottom-content h4");
serv4[0].textContent = siteContent["main-content"]["services-h4"];
serv4[1].textContent = siteContent["main-content"]["product-h4"];
serv4[2].textContent = siteContent["main-content"]["vision-h4"];

let serv4cont = document.querySelectorAll(".bottom-content p");
serv4cont[0].textContent = siteContent["main-content"]["services-content"];
serv4cont[1].textContent = siteContent["main-content"]["product-content"];
serv4cont[2].textContent = siteContent["main-content"]["vision-content"];

let contEnd = document.querySelector(".contact h4");
contEnd.textContent = siteContent.contact["contact-h4"];

let contP = document.querySelectorAll(".contact p");
contP[0].textContent = siteContent.contact.address;
contP[1].textContent = siteContent.contact.phone;
contP[2].textContent = siteContent.contact.email;            

   