function abilities_html() {
    document.getElementById("textbox_text").innerText = "kek";
}

function abilities_js() {
    document.getElementById("textbox_text").innerText = "lol";
}

function abilities_java() {
    document.getElementById("textbox_text").innerText = "ceburek";
}

function abilities_csharp() {
    document.getElementById("textbox_text").innerText = "saslik";
}

function bg_color_trigger() {
    $(document).ready(function() {
        $(".active_ability").trigger("click");
    });
}

function bg_color() {
    $(document).ready(function() {

        $('li > button.list')
            .click(function(e) {
                $('li > button.list')
                    .removeClass('active_ability');
                $(this).addClass('active_ability');
            });
    });
}