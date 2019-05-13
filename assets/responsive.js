const tablet = 768;
let open = false;
const burger = `
  <div id="burger" class="burger-close">
    <span class="bar1"></span>
    <span class="bar2"></span>
    <span class="bar3"></span>
  </div>
`;
const links = `
  <a href="/">Blog</a>
  <a href="/about">About</a>
  <a href="/portfolio">Portfolio</a> 
`;

function toggleMenu() {
  open = !open;
  if (open) {
    get('burger').className = 'burger-open';
    get('mobile-menu').className = 'mobile-menu-active';
  } else {
    get('burger').className = 'burger-close';
    get('mobile-menu').className = '';
  }
}

function updateHamburger() {
  if (window.innerWidth < tablet) {
    get('nav-right').innerHTML = burger;
    get('burger').addEventListener('click', toggleMenu);
  } else {
    get('nav-right').innerHTML = links;
    open = false;
  }
}

function get(id) {
  return document.getElementById(id);
}

window.addEventListener('resize', updateHamburger);
updateHamburger();