document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById("nombre").value;
    if(nombre.length == 0) {
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("nombre").focus();
        alert("Por favor complete su nombre");
        return;
    }else{
        document.getElementById("nombre").style.borderColor = "#ced4da";
    }

    var mail = document.getElementById("mail").value;
    if(mail.length == 0) {
        document.getElementById("mail").style.borderColor = "red";
        document.getElementById("mail").focus();
        alert("Por favor complete su mail");
        return;
    }
    if (mail.includes("@")){
        document.getElementById("mail").style.borderColor = "#ced4da";
    }else{
        document.getElementById("mail").focus();
        document.getElementById("mail").style.borderColor = "red";
        alert("Por favor ingrese un mail válido");
        return;
    }
    var telefono = document.getElementById("telefono").value;
    if (telefono.length == 0) {
        document.getElementById("telefono").style.borderColor = "red";
        document.getElementById("telefono").focus();
        alert("Por favor complete su telefono");
        return;
    }else{
        document.getElementById("telefono").style.borderColor = "#ced4da";
    }
        
    var mensaje = document.getElementById("mensaje").value;
    if (mensaje.length == 0) {
        document.getElementById("mensaje").style.borderColor = "red";
      alert("Por favor ingrese su consulta");
      document.getElementById("mensaje").focus();
      return;
    }else{
        document.getElementById("mensaje").style.borderColor = "#ced4da";
    }
    this.submit();

    alert("Tu mensaje ha sido enviado. Gracias por contactarte con Minga!");
 

}




/*

*/