console.log("Hello World");

close_menu = document.getElementById('close');
hamburger = document.getElementById('hamburger');

close_menu.addEventListener("click", (e) => {
    alert('Close');
});

hamburger.addEventListener('click', (e) => {
    alert('Open')
});
