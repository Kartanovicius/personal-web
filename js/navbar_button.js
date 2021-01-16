var offset = 40;

function nav_scroll_profile() {
    var el = document.querySelector('.profile'); // element you are scrolling to
    window.scroll({ top: (el.offsetTop - offset), left: 0, behavior: 'smooth' });
}

function nav_scroll_timeline() {
    var el = document.querySelector('.timeline'); // element you are scrolling to
    window.scroll({ top: (el.offsetTop - offset), left: 0, behavior: 'smooth' });
}

function nav_scroll_abilities() {
    var el = document.querySelector('.abilities'); // element you are scrolling to
    window.scroll({ top: (el.offsetTop - offset), left: 0, behavior: 'smooth' });
}

function nav_scroll_projects() {
    var el = document.querySelector('.projects'); // element you are scrolling to
    window.scroll({ top: (el.offsetTop - offset), left: 0, behavior: 'smooth' });
}