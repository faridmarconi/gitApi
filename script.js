var API_URL = "https://api.github.com/users/";
var USERNAME = "faridmarconi";

window.onload = function() {
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            var div = document.getElementById("conteudo");
            div.innerHTML = xml.responseText;
        }
    }

    xml.open("GET", API_URL + USERNAME, true);
    xml.send();
}