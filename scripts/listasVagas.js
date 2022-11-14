//lista de vagas, a ser preenchida com os dados do web service 
let vagas = [];

//URL Obtida a partir do componente json-server
let url = "http://localhost:3000/vagas";
let lista = document.getElementById("vaga");

//função para construir a lista de vagas na página
function exibirVagas(){
  let desenv = document.getElementById("desenv");
  let negocio = document.getElementById("negocio");

  limparLista();

  for(let i = 0; i < vagas.length; i++){

    let tipo = vagas[i].tipo;
    var qualTipo = (desenv.checked && tipo === '1') || (negocio.checked && tipo === '2');

    if(qualTipo){
      let option = document.createElement("option");
      option.textContent = vagas[i].titulo;
      option.setAttribute("value",vagas[i].id);

      lista.appendChild(option);
    }

    desenv.addEventListener("click", exibirVagas, false);
    negocio.addEventListener("click", exibirVagas, false)

  }
}
//função limpar lista de vagas
function limparLista(){
  while(lista.firstChild){
    lista.removeChild(lista.firstChild);
  }
}

//acesso ao web Service 
fetch(url)
  .then(res => res.json())
  .then(valor =>{
    vagas = valor;
    exibirVagas();
  });
