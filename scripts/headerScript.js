var headerContent = document.getElementById("headerContent");

var links = [
    ["index.html", "Home"], // Always first
    ["games.html", "Games"],
    ["musician.html", "Music"],
    ["art.html", "Art"],
    ["languages.html", "Languages"],
    ["contact.html", "Contact"],
    ["about.html", "About"], // Always the last
];

function populateHeader() {
    populateNavigationBar();
}

function populateNavigationBar() {
    // Open unordered list
    var navigationBar = '<ul>';

    for(x = 0; x < links.length; ++x) {
        var link = links[x];

        navigationBar += '<li';

        // If the current page is the last page, place on the right side of the navigation bar
        if(x == links.length - 1) {
            navigationBar += ' style="float:right"';
        }

        // If the current page is being created, mark as an active page
        // If connecting to the .com, mark home as active page
        if(window.location.href.indexOf(link[0]) > -1
            || (window.location.href.indexOf(".html") == -1 && x == 0)) {
            navigationBar += ' class="activePage"';
        }

        // Creates a navigation node to the page
        navigationBar += '><a href="' + link[0] + '">' + link[1] + '</a></li>';
    }

    navigationBar += '</ul>';
    headerContent.innerHTML += navigationBar;
}

populateHeader();