// Header Text
const headerText = document.querySelector('.header-text');

// Sidebar Toggle Btn
const sidebarOpenBtn = document.querySelector('.sidebar-open-btn');
const sidebarCloseBtn = document.querySelector('.sidebar-close-btn');
sidebarOpenBtn.addEventListener('click', toggleSidebar);
sidebarCloseBtn.addEventListener('click', toggleSidebar);

// Sidebar
const sidebar = document.querySelector('.sidebar');
let sidebarX = -260;

// SEARCH 1 INPUTS
const search1Inputs = document.querySelectorAll('#search-1 .text-input');
console.log(search1Inputs);

// SEARCH 2 INPUTS
const timeRangeInput = document.querySelector('#search-2 .time-range-input');
const selectedIngredients = []

// Page Transition
// const search1Page = document.querySelector('#search-1');
// const search2Page = document.querySelector('#search-2');
// const search3Page = document.querySelector('#search-3');
// const recipesPage = document.querySelector('#recipes');
// const ingredientsPage = document.querySelector('#ingredients');
// const tagsPage = document.querySelector('.tags');

const pages = document.getElementsByClassName('page');

// Routing
window.onhashchange = () => {
  const page = window.location.hash.substr(1);
  headerText.innerText = page;
  pageTransition(page)
}

// Page Transition
function pageTransition(pageName) {
  for (let page of pages) {
    if (page.id == pageName) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }
  }
}

// Sidebar Function
function toggleSidebar() {
  console.log(sidebarX)
  if (sidebarX >= 0) {
    closeSidebar()
  } else {
    openSidebar()
  }
  // if (Number(getComputedStyle(sidebar).left.replace("px", "")) > 0) {
  //   closeSidebar();
  // } else {
  //   openSidebar();
  // }
}

// toggleSidebar()
 
// Animations
function closeSidebar() {
  if (sidebarX > -270) {
    sidebarX -= 10;
    sidebar.style.transform =  `translateX(${sidebarX}px)`;
    requestAnimationFrame(closeSidebar);
  }
}

function openSidebar() {
  if (sidebarX < 0) {
    sidebarX += 10;
    sidebar.style.transform =  `translateX(${sidebarX}px)`;
    requestAnimationFrame(openSidebar); 
  }
}

function fadeInDropDown() {
  
}
