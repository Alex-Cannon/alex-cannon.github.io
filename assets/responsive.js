const hamburger = `
  <div style="display:flex; flex-direction: column;">
    <a href="/">Blog</a>
    <a href="/about">About</a>
    <a href="/portfolio">Portfolio</a> 
  </div>
`;

const defaultNavRight = `
  <a href="/">Blog</a>
  <a href="/about">About</a>
  <a href="/portfolio">Portfolio</a> 
`;

(function () {
  const desktopBreakpoint = 768;

  function updateHamburger() {
    if (window.innerWidth < desktopBreakpoint) {
      get('nav-right').innerHTML = defaultNavRight;
    } else {
      get('nav-right').innerHTML = defaultNavRight;
    }
  }

  function get(id) {
    return document.getElementById(id);
  }

  window.addEventListener('resize', updateHamburger);
})()