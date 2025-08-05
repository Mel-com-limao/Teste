function verificaSenha() {
  const senha = document.getElementById("senha").value;
  const correta = "05MESES";

  if (senha.toUpperCase() === correta) {
    document.getElementById("conteudo").style.display = "block";
    document.getElementById("erro").textContent = "";
  } else {
    document.getElementById("erro").textContent = "Senha incorreta! Tente de novo 💌";
    document.getElementById("conteudo").style.display = "none";
  }
}

