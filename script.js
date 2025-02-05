// const hamburger = document.getElementById ("hamburger");
// const backside = document.getElementById ("close-nav");
// const navs = document.getElementById ("navbars");



// hamburger.addEventListener('click', () => {
//     navs.classList.toggle('visibility');
//     hamburger.style.display = "none";
// });
// backside.addEventListener('click', () => {
//     navs.classList.toggle('visibility');
//     hamburger.style.display = "block";
// });

const hamburger = document.getElementById("hamburger");
const backside = document.getElementById("close-nav");
const navs = document.getElementById("navbars");

const sidebarCheckbox = document.getElementById("sidebar-active");



// backside.addEventListener('click', () => {
    
// });

hamburger.addEventListener('click', () => {
    navs.classList.add('visibility'); // Show navbar
    hamburger.classList.add('hidden'); // Hide hamburger
    sidebarCheckbox.checked = true;
});

backside.addEventListener('click', () => {
    navs.classList.remove('visibility'); // Hide navbar
    hamburger.classList.remove('hidden'); // Show hamburger
    sidebarCheckbox.checked = false;
});


// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll(".whatsapp-btn").forEach(button => {
//         button.addEventListener("click", function (event) {
//             event.preventDefault(); // Prevent default link behavior

//             let productContainer = this.closest(".product-image");
//             let capTitle = productContainer.querySelector(".cap-title").textContent;
//             let capImage = productContainer.querySelector(".cap-image").src;

//             // WhatsApp link with dynamic data
//             let whatsappURL = `https://wa.me/+2348066764218?text=Hello,%20I'm%20interested%20in%20this%20${encodeURIComponent(capTitle)}.%20Here%20is%20the%20image:%20${encodeURIComponent(capImage)}`;

//             // Redirect user to WhatsApp
//             window.open(whatsappURL, "_blank");
//         });
//     });
// });

function sendToWhatsApp(element) {
    event.preventDefault(); // Prevent default link behavior

    let productContainer = element.closest(".product-image");

    // Ensure elements exist
    let capTitleElement = productContainer.querySelector(".cap-title");
    let capImageElement = productContainer.querySelector(".cap-image");

    // if (!capTitleElement || !capImageElement) {
    //     console.error("Error: Missing product details!");
    //     return;
    // }

    let capTitle = capTitleElement.textContent.trim();
    let capImage = capImageElement.src.trim();

    // Generate WhatsApp link
    let whatsappURL = `https://wa.me/+2348066764218?text=Hello,%20I'm%20interested%20in%20this%20${encodeURIComponent(capTitle)}.%20Here%20is%20the%20image:%20${encodeURIComponent(capImage)}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
}

