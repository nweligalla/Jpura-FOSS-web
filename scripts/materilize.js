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
    height: 500,
    transition: 500,
    interval: 3000

});

//materilized box

const matbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(matbox, {});

// tooltip

const tooltip = document.querySelectorAll('.tooltipped');
M.Tooltip.init(tooltip, {});