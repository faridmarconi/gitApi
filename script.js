// API DO GIT PARA OBTER USERS


var API_URL = "https://api.github.com/users/";
var USERNAME = "faridmarconi";

window.onload = async function() {
    const response = await fetch(`${API_URL}${USERNAME}`);
    const dados = await response.json();
    const div = document.getElementById("conteudo");
        div.innerHTML = JSON.stringify(dados.login);
    const divB = document.getElementById("title");
        divB.innerHTML = JSON.stringify(dados.html_url);


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




// API VIACEP PARA PREENCHER RUA


    const cep = document.querySelector('#cep')

    const showData = (result)=>{
        for(const campo in result){
            if(document.querySelector('#'+campo)){
                document.querySelector('#'+campo).value = result[campo]
                //console.log(campo)
            }
        }
    }

    cep.addEventListener("blur",(e)=>{
        let search = cep.value.replace("-","")
        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }

        fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then(response =>{ response.json()
            .then( data => showData(data)) })
        .catch(e => console.log('errou: '+e,message))

        //console.log(cep.value)

    })