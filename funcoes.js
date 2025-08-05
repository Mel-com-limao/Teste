function showTab(tabId) {
  document.querySelectorAll("section").forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById(tabId).classList.add("active");
}

function verificaResposta() {
  const resposta = document.getElementById('resposta1').value.toLowerCase();
  if (resposta === "maio") {
    document.getElementById('respostaCerta').style.display = "block";
  }
}

function verificaSenha() {
  const senha = document.getElementById('senha').value;
  const correta = "05MESES";
  if (senha.toUpperCase() === correta) {
    document.getElementById('conteudoSecreto').style.display = "block";
    document.getElementById('erroSenha').textContent = "";
  } else {
    document.getElementById('erroSenha').textContent = "Senha incorreta! Tente de novo ♥";
  }
}
