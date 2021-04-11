refreshBodyClassNames();

setTimeout(() => {
    refreshBodyClassNames();

    document.getElementsByClassName("sidebar-toggle")[0].onclick = function() {
        if(document.body.className == "ready sticky") {
            window.localStorage["nocp.sidebarOpen"] = "1";
        } else if(document.body.className == "ready sticky close") {
            window.localStorage["nocp.sidebarOpen"] = "0";
        }
    };
}, 100);

function refreshBodyClassNames() {
    if(window.localStorage["nocp.sidebarOpen"] == "0") {
        document.body.className = "ready sticky close";
    } else {
        document.body.className = "ready sticky";
    }
}
