const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Store",
    "nav-item-8": "Locator",
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


// Setup
let addOne = document.createElement("a");
addOne.href = "#";
let addTwo = document.createElement("a");
addTwo.href = "#";
document.querySelector('header nav').append(addOne);
document.querySelector('header nav').prepend(addTwo);
let numNav = document.querySelectorAll(`header nav a`).length;

// Nav
for (let i = 1; i < numNav+1; ++i){
  document.querySelector(`header nav a:nth-child(${i})`).textContent = siteContent.nav["nav-item-" + i];
}
// CTA
//document.getElementById('logo-img').src = siteContent.nav["img-src"]; // already done by the demo
document.querySelector('.cta-text h1').textContent = siteContent.cta.h1;
document.querySelector('.cta-text button').textContent = siteContent.cta.button;
document.getElementById('cta-img').src = siteContent.cta["img-src"];

// Main
document.querySelector('.top-content .text-content:nth-child(1) h4').textContent = siteContent["main-content"]["features-h4"];
document.querySelector('.top-content .text-content:nth-child(1) p').textContent = siteContent["main-content"]["features-content"];
document.querySelector('.top-content .text-content:nth-child(2) h4').textContent = siteContent["main-content"]["about-h4"];
document.querySelector('.top-content .text-content:nth-child(2) p').textContent = siteContent["main-content"]["about-content"];
document.getElementById('middle-img').src = siteContent["main-content"]["middle-img-src"];
document.querySelector('.bottom-content .text-content:nth-child(1) h4').textContent = siteContent["main-content"]["services-h4"];
document.querySelector('.bottom-content .text-content:nth-child(1) p').textContent = siteContent["main-content"]["services-content"];
document.querySelector('.bottom-content .text-content:nth-child(2) h4').textContent = siteContent["main-content"]["product-h4"];
document.querySelector('.bottom-content .text-content:nth-child(2) p').textContent = siteContent["main-content"]["product-content"];
document.querySelector('.bottom-content .text-content:nth-child(3) h4').textContent = siteContent["main-content"]["vision-h4"];
document.querySelector('.bottom-content .text-content:nth-child(3) p').textContent = siteContent["main-content"]["vision-content"];

//Contact
document.querySelector('.contact h4').textContent = siteContent["contact"]["contact-h4"];
document.querySelector('.contact p:nth-child(2)').textContent = siteContent.contact.address;
document.querySelector('.contact p:nth-child(3)').textContent = siteContent["contact"]["phone"];
document.querySelector('.contact p:nth-child(4)').textContent = siteContent["contact"]["email"];

//Footer
document.querySelector('footer p').textContent = siteContent.footer.copyright;




// Task 3 -- add new content
for (let i = 1; i < numNav+1; ++i){
  document.querySelector(`header nav a:nth-child(${i})`).setAttribute('style', "color:green;");
}









