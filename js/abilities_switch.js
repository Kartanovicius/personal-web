function abilities_html() {
    document.getElementById("textbox_text").innerHTML = "Knowledge of HTML5, CSS3 and Javascript.<br><br>Experience in working with Git.<br><br>Adobe Photoshop image editing skills.<br><br>Designing and prototyping with Figma.";
}

function abilities_java() {
    document.getElementById("textbox_text").innerHTML = "Half-year experience in java development.<br><br>Knowledge of Object-Oriented Programming and design.<br><br>Knowledge of relational databases, SQL.";
}

function abilities_csharp() {
    document.getElementById("textbox_text").innerHTML = "Have acquired skills of C and C# programing languages.<br><br>Experience designing and developing Winforms applications.";
}

function bg_color() {
    $('li > button.list')
        .click(function(e) {
            $('li > button.list')
                .removeClass('active_ability');
            $(this).addClass('active_ability');
        });
}