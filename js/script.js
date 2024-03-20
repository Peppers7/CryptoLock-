function alterarBackground(){
  document.getElementById('alterar_background').style.background = "none";
  let elementos = document.getElementsByClassName('remover_img');
  for (let i = 0; i < 2; i++) {
    elementos[i].style.display = "none";
  }
}

function criptografarTexto(){
  const acentosMinusculos = /[áàâãéèêíïóôõöúü]/;
  const acentosMaiusculos = /[ÁÀÂÃÉÈÊÍÏÓÔÕÖÚÜ]/;
  const selecionar = document.getElementById("entrada");
  const retornar = document.getElementById("saida");
  let entradacopiada = selecionar.value;
  if(/[A-Z]/.test(entradacopiada) ||  acentosMinusculos.test(entradacopiada) || acentosMaiusculos.test(entradacopiada)){
    alert("Apenas letras minusculas e NADA de acentos!!!");
  }else{
    alterarBackground()
    entradacopiada = entradacopiada
    .replaceAll(/e/g, "enter")
    .replaceAll(/i/g, "imes")
    .replaceAll(/a/g, "ai")
    .replaceAll(/o/g, "ober")
    .replaceAll(/u/g, "ufat");
     
    retornar.textContent = entradacopiada;
  }
}

function copiarTexto(){
  const selecionar = document.getElementById("saida").value;
  navigator.clipboard.writeText(selecionar);
}

function descriptografar(){
  const acentosMinusculos = /[áàâãéèêíïóôõöúü]/;
  const acentosMaiusculos = /[ÁÀÂÃÉÈÊÍÏÓÔÕÖÚÜ]/;
  const selecionar = document.getElementById("entrada");
  const retornar = document.getElementById("saida");
  let entradacopiada = selecionar.value;
  if(/[A-Z]/.test(entradacopiada) ||  acentosMinusculos.test(entradacopiada) || acentosMaiusculos.test(entradacopiada)){
    alert("Apenas letras minusculas e NADA de acentos!!!");
  }else if(entradacopiada == ""){
    alert("Você não forneceu nenhum texto para criptografar.");
  }else{
    alterarBackground();
    entradacopiada = entradacopiada
    .replaceAll(/enter/g, "e")
    .replaceAll(/imes/g, "i")
    .replaceAll(/ai/g, "a")
    .replaceAll(/ober/g, "o")
    .replaceAll(/ufat/g, "u");
     
    retornar.textContent = entradacopiada;
   }
}