

$('#boton-enviar').click(function(){

  $.get("https://my-json-server.typicode.com/riverajhon02/api/autos", function(datos, status){
    $.each(datos, function (ind, elem) {
      console.log('¡Hola :'+ elem.id );
      
      $('.dato-tabla').append("<tr><td>" + elem.id + "</td><td>" + elem.marca + "</td><td>"+ elem.modelo +"</td><td>"+elem.propietario+"</td><td>"+elem.direccion+ "</td></tr>");
    });

  });
});
