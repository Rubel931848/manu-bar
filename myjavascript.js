var mainWrapNav = document.getElementById('mynav');
var navOpen = document.getElementById('open');
var navClose = document.getElementById('close');
navOpen.addEventListener('mousedown', function(){
    mainWrapNav.style.left='0px';
});
navClose.addEventListener('mouseenter', function(){
    mainWrapNav.style.left="-250px";
});