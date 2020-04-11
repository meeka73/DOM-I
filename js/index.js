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

// images
let headerImage = document.getElementById('cta-img');
headerImage.setAttribute('src', siteContent['cta']['img-src']);

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// // nav
let navItems = document.getElementsByTagName('a');
Array.from(navItems).forEach((item, index) => {
  item.textContent = siteContent['nav'][`nav-item-${(index += 1)}`]
});

// // logo text
let logoText = document.querySelectorAll('.cta-text h1')[0];
logoText.textContent = siteContent['cta']['h1'];

// // button
let btn = document.querySelectorAll('.cta-text button')[0];
btn.textContent = siteContent['cta']['button'];

// // main features
let featureTitle = document.querySelectorAll('.main-content .top-content .text-content h4')[0];
featureTitle.textContent = siteContent['main-content']['features-h4'];

let featureParagraph = document.querySelectorAll('.main-content .top-content .text-content p')[0];
featureParagraph.textContent = siteContent['main-content']['features-content'];

let aboutTitle = document.querySelectorAll('.main-content .top-content .text-content h4')[1];
aboutTitle.textContent = siteContent['main-content']['about-h4'];

let aboutParagraph = document.querySelectorAll('.main-content .top-content .text-content p')[1];
aboutParagraph.textContent = siteContent['main-content']['about-content'];

// bottom content
let servicesTitle = document.querySelectorAll('.main-content .bottom-content .text-content h4')[0];
servicesTitle.textContent = siteContent['main-content']['services-h4'];

let servicesText = document.querySelectorAll('.main-content .bottom-content .text-content p')[0];
servicesText.textContent = siteContent['main-content']['services-content'];

let productTitle = document.querySelectorAll('.main-content .bottom-content .text-content h4')[1];
productTitle.textContent = siteContent['main-content']['product-h4'];

let productText = document.querySelectorAll('.main-content .bottom-content .text-content p')[1];
productText.textContent = siteContent['main-content']['product-content'];

let visionTitle = document.querySelectorAll('.main-content .bottom-content .text-content h4')[2];
visionTitle.textContent = siteContent['main-content']['vision-h4'];

let visionText = document.querySelectorAll('.main-content .bottom-content .text-content p')[2];
visionText.textContent = siteContent['main-content']['vision-content'];

// contact
let contactTitle = document.querySelectorAll('.contact h4')[0];
contactTitle.textContent = siteContent['contact']['contact-h4'];

let addressText = document.querySelectorAll('.contact p')[0];
addressText.textContent = siteContent['contact']['address'];

let phoneText = document.querySelectorAll('.contact p')[1];
phoneText.textContent = siteContent['contact']['phone'];

let emailText = document.querySelectorAll('.contact p')[2];
emailText.textContent = siteContent['contact']['email'];

// footer
let footerTitle = document.querySelectorAll('footer p')[0];
footerTitle.textContent = siteContent['footer']['copyright'];

// navigation color change
let navColor = document.querySelectorAll('a');
navColor.forEach(navClr => {
  navClr.style.color='green';
});

// additional navigation items
let homeTitle = document.createElement('a');
homeTitle.textContent = 'Home';

let homeText = document.querySelector('nav');
homeText.prepend('Home');
homeText.style.color='green';

let reviewsTitle = document.querySelector('a');
reviewsTitle.textContent = 'Reviews';

let reviewText = document.querySelector('nav');
reviewText.append('Reviews');
reviewText.style.color='green';