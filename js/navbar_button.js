function nav_scroll_profile() {
    var elmnt = document.getElementById("profileid");
    elmnt.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
    });
}

function nav_scroll_timeline() {
    var elmnt = document.getElementById("timelineid");
    elmnt.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });
}