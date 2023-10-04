let menu = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");
let m = document.querySelector(".main-body");
let count = 0;

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x'); // Toggle hamburger and close icon
    navbar.classList.toggle('open'); // Toggle the visibility of the navbar
    
    // You can control the main body's margin-top if needed.
    // For example, set a class on the main body and toggle it.
    if (count % 2 === 0) {
        m.classList.remove("m-t");
    } else {
        m.classList.add("m-t");
    }
    
    count++;
});

// You may also want to close the menu when a menu item is clicked
document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
        m.classList.remove('m-t');
        count = 0;
    });
});



GitHubCalendar(".calendar", "Gautam8014", { responsive: true });
GitHubCalendar(".calendar", "Gautam8014", { responsive: true });



function resume(){
    window.open("https://drive.google.com/file/d/1j3dNEXtqhBOwVfU5nlGcpsv7eVTUzEzi/view?usp=sharing")
}

