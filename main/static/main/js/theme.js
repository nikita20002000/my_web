let switchMode = document.getElementById('switch_theme');

switchMode.onclick = function () {
    let theme = document.getElementById('theme');

    if (theme.getAttribute("href") === "/static/main/css/light_mode.css") {
        theme.href = "/static/main/css/dark_mode.css";
    }else {
            theme.href = "/static/main/css/light_mode.css";
        }
}