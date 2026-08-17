document.addEventListener("DOMContentLoaded", function () {

    console.log("CreatorAI Hub loaded successfully!");

    const links = document.querySelectorAll("a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Opening:", link.getAttribute("href"));
        });
    });

});