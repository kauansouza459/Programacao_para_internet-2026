const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  console.log(nome);
  console.log(email);

  alert(`Formulário enviado!\nNome: ${nome}\nEmail: ${email}`);
  

  if (nome.length < 3) {
     alert("O nome deve ter pelo menos 3 caracteres.");
     return;
    }
   if (!email.includes("@")) {
       alert("Email inválido.");
       return;
    
    }
  console.log("Formulário enviado!");
});


document.getElementById("bAlerta").addEventListener("click", function() {
  alert("Este é um alerta em javascript!");
});

document.getElementById("bCor")
.addEventListener("click", function() {
document.body.style.backgroundColor = "rgb(82, 0, 0)";
});

