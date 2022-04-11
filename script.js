var API_URL = "https://api.github.com/users/";
var USERNAME = "faridmarconi";

window.onload = async function() {
    const response = await fetch(`${API_URL}${USERNAME}`);
    const dados = await response.json();
    const div = document.getElementById("conteudo");
        div.innerHTML = JSON.stringify(dados);
}

    // var xml = new XMLHttpRequest();
    // xml.onreadystatechange = function() {
    //     if(this.readyState === 4 && this.status === 200) {
    //         var div = document.getElementById("conteudo");
    //         div.innerHTML = xml.responseText;
    //     }
    // }
    // xml.open("GET", API_URL + USERNAME, true);
    // xml.send();