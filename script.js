document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" && 
   document.getElementById("email").value != "" &&
   document.getElementById("telefone").value != ""){
   alert("Prontinho! Você receberá as novidades por email!")
  }else{
    alert("Por favor, preencha os campos nome e email.")
  }
}

var nome = prompt("Qual é seu nome?")
alert (nome + " , bem-vinde! ")
