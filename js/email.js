$("#enviarFormulario").on("click", function (event) {
  event.preventDefault();
  // resto de tu codigo
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var asunto = document.getElementById("asunto").value;
  var mensaje = document.getElementById("mensaje").value;
  var fono = document.getElementById("fono").value;

  fetch("http://127.0.0.1:3000/api/email", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      nombre: nombre,
      email: email,
      asunto: asunto,
      mensaje: mensaje,
      fono: fono,
    }),
  })
    .then(function (res) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Mensaje Enviado",
        showConfirmButton: false,
        timer: 1500,
      });
      vaciaCampos();
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    });
});

function vaciaCampos() {
  $("#nombre").val("");
  $("#email").val("");
  $("#asunto").val("");
  $("#mensaje").val("");
  $("#fono").val("");
}
