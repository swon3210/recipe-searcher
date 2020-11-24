// Header Text
const headerText = document.querySelector('.header-text');

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
// const nextBtn = document.querySelector('#search .next-btn');
// const goBackBtn = document.querySelector('#search-detail .go-back-btn');
// const searchStartBtn = document.querySelector('#search-detail .next-btn');

// nextBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   const SEARCH_DETAIL_PAGE = 'SEARCH-DETAIL'
//   history.pushState(null, null, `/${SEARCH_DETAIL_PAGE.toLowerCase()}`)
//   pageTransition(SEARCH_DETAIL_PAGE.toLowerCase());
// })


// goBackBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   const SEARCH_DETAIL_PAGE = 'SEARCH'
//   history.pushState(null, null, `/${SEARCH_DETAIL_PAGE.toLowerCase()}`)
//   pageTransition(SEARCH_DETAIL_PAGE.toLowerCase());
// })

// searchStartBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   const SEARCH_DETAIL_PAGE = 'RECIPES'
//   history.pushState(null, null, `/${SEARCH_DETAIL_PAGE.toLowerCase()}`)
//   pageTransition(SEARCH_DETAIL_PAGE.toLowerCase());
// })

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
  if (page === '') {
    pageTransition('recipes')
  } else {
    pageTransition(page)
  }
}

// sidebarItems.addEventListener('click', (event) => {
//   event.preventDefault();
//   let page;
//   if (event.currentTarget.innerText !== event.target.innerText) {
//     page = event.target.innerText
//     history.pushState(null, null, `/${page.toLowerCase()}`)
//     headerText.innerText = page;
//     pageTransition(page.toLowerCase());
//   }
// })

// 리다이렉팅 문제...

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