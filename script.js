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
