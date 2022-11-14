//lista de vagas, a ser preenchida com os dados do web service 
let vagas = [];

//URL Obtida a partir do componente json-server
let url = "http://localhost:3000/vagas";
let lista = document.getElementById("vaga");

//função para construir a lista de vagas na página
function exibirVagas(){
  for(let i = 0; i< vagas.length; i++){
    let option = document.createElement("option");
    option.textContent = vagas[i].titulo;
    option.setAttribute("value",vagas[i].id);

    lista.appendChild(option);
  }
}

//acesso ao web Service 
fetch(url)
  .then(res => res.json())
  .then(valor =>{
    vagas = valor;
    exibirVagas();
  });
