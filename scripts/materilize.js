// sidenav

const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {
    edge: "right"
});

// scroll effect

const scrollSpy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollSpy, {});

// slider  
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 450,
    transition: 500,
    interval: 4000
});

//materilized box

const matbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(matbox, {});

// tooltip

const tooltip = document.querySelectorAll('.tooltipped');
M.Tooltip.init(tooltip, {});


// form modal

const modalForm = document.querySelector('.modal');
M.Modal.init(modalForm, {});

// const modalClose = document.querySelector('.close');
// M.Collapsible.init(modalClose);