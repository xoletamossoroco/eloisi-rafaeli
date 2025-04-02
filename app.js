document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    const username = document.getElementById("nome").value;
    const password = document.getElementById("senha").value;
    const password = document.getElementById("email").value;
    const password = document.getElementById("idade").value;
    const message = document.getElementById("message");

    if (nome === "Eloisi" && senha === "rafa1402"  && email === "rafa6169@gmail.com"  && idade === "17"){
        message.style.color= "green";
        message.textContent="login Bem sucedido!";

        setTimeout(() =>{
            window.location.href = "view.html";
        }, 1000)

    }else{
        message.style.color= "red";
        message.textContent="Usuario ou Senha incorretos";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000)
    }
});