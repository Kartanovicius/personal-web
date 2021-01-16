function nav_scroll_profile() {
    var elmnt = document.getElementById("profileid");
    elmnt.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "start"
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

function nav_scroll_abilities() {
    var elmnt = document.getElementById("abilitiesid");
    elmnt.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });
}

function nav_scroll_project() {
    var elmnt = document.getElementById("projectsid");
    elmnt.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });
}