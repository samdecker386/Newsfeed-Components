/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// create a function that will create a hamburger menu
function createMenu(items) {

  // define new elements
  const menu = document.createElement('div');
  const list = document.createElement('ul');

  // set up structure of elements
  items.forEach(item => {
    const link = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.textContent = item;
    link.appendChild(anchor);
    list.appendChild(link);
 });
  menu.appendChild(list);

  // add classes to elements
  menu.classList.add('menu');
  
  return menu;
};

// more elements defined
const menu = createMenu(menuItems); // passing array into function
const menuButton = document.querySelector('.menu-button');

// selecting header and creating structure
const header = document.querySelector('.header');
header.appendChild(menu); // essentially passing createMenu(menuItems)

// toggle event for hamburger menu to open
menuButton.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
});