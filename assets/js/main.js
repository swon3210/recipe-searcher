import { getRecipesRequest } from './request.js';

// Sidebar Toggle Btn
const sidebarOpenBtn = document.querySelector('.sidebar-open-btn');
const sidebarCloseBtn = document.querySelector('.sidebar-close-btn');
sidebarOpenBtn.addEventListener('click', toggleSidebar);
sidebarCloseBtn.addEventListener('click', toggleSidebar);

// Sidebar
const sidebar = document.querySelector('.sidebar');
const sidebarItems = document.querySelector('.sidebar-items');
let sidebarX = -260;

// SEARCH 1 INPUTS
const search1Inputs = document.querySelectorAll('#search .text-input');


// SEARCH 2 INPUTS
const timeRangeInput = document.querySelector('#search-detail .time-range-input');
const timeRangeInputValue = document.querySelector('#search-detail .time-range-input-value');
const timeRangeTrackbar = document.querySelector('#search-detail .time-range-input-trackbar');
const selectedIngredients = []

timeRangeInput.addEventListener('input', (event) => {
  const progress = event.target.value;
  timeRangeInputValue.innerText = progress + ' min'
  timeRangeTrackbar.style.transform = `translateX(-${100 - progress * (2 / 3)}%)`;
})

const pages = document.getElementsByClassName('page');

// Routing
window.onhashchange = () => {
  const page = window.location.hash.substr(1);
  if (page === '') {
    pageTransition('recipes')
  } else {
    pageTransition(page)
  }
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
  if (sidebarX >= 0) {
    closeSidebar()
  } else {
    openSidebar()
  }
}


// DATA

const allRecipes = getAllRecipesRequest();



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