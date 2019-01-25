document.addEventListener('DOMContentLoaded', function(){
  const form = document.querySelectorAll(".form")[0];
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const nombre = document.querySelectorAll(".nombre")[0].value;
    const apellido = document.querySelectorAll(".apellido")[0].value;
    const curso = document.querySelectorAll(".curso")[0];

    const generoSeleccionado = document.querySelectorAll("input[name='genero']:checked")[0].value;
    let saludo;

    switch (generoSeleccionado) {
      case "masculino":
        saludo = "Bienvenido";
        break
      case "femenino":
        saludo = "Bienvenida";
        break;
      default:
        saludo = "Bienvenidx";
    }
    
    const mensajetexto = document.querySelectorAll(".mensaje-texto")[0];
    mensajetexto.innerHTML = `${saludo} al curso de ${nombre}`;

  })
});
