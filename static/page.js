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

    var hitokoto_xhr = new XMLHttpRequest();
    hitokoto_xhr.open("get", "https://v1.hitokoto.cn");
    hitokoto_xhr.send(null);
    hitokoto_xhr.onload = function() {
        var data = JSON.parse(this.responseText);
        var from = data.from_who == null ? data.from : data.from_who;
        document.getElementById("motd").innerHTML = data.hitokoto +"<em> --"+ from +"</em>";
    };
}, 100);

function refreshBodyClassNames() {
    if(window.localStorage["nocp.sidebarOpen"] == "0") {
        document.body.className = "ready sticky close";
    } else {
        document.body.className = "ready sticky";
    }
}
