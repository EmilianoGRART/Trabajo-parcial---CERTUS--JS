$(document).ready(function () {
  // Validar el formulario al enviarlo
  $("#clienteForm").submit(function (event) {
    event.preventDefault(); // Evitar envío del formulario

    // Obtener los valores ingresados
    var nombre = $("#nombre").val().trim();
    var apellido = $("#apellido").val().trim();
    var correo = $("#correo").val().trim();
    var genero = $("input[name='genero']:checked").val();
    var fechaNacimiento = $("#fechaNacimiento").val();

    // Validar el nombre (2 a 50 caracteres)
    if (nombre == "" || nombre.length < 2 || nombre.length > 50) {
      alert("Ingresa un nombre valido");
      return;
    }

    // Validar el apellido (2 a 50 caracteres)
    if (apellido.length < 2 || apellido.length > 50) {
      alert("Ingresa un apellido valido");
      return;
    }

    // Validar el correo
    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
      alert("Ingrese un correo real.");
      return;
    }

    // Validar el género
    if (genero === undefined) {
      alert("Seleccione un género.");
      return;
    }

    // Validar la fecha de nacimiento
    if (fechaNacimiento == "") {
      alert("Ingrese una fecha de nacimiento.");
      return;
    }

    // Confirmar el envío de los datos
    var confirmacion = confirm("¿Está seguro de enviar?");

    if (confirmacion) {
      // Mostrar mensaje de alerta confirmando el envío
      alert("Los datos han sido enviados correctamente.");
      // Aquí puedes realizar otras acciones, como enviar los datos a un servidor
    }
  });
});
