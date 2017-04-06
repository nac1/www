/*
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    
    console.log(navigator.notification);
    alert("hola mundo");
    navigator.notification.beep(2);

    navigator.notification.alert(
    'You are the winner!',  // message
    null,         // callback
    'Game Over',            // title
    'Done'      
}
*/
var fn={
	ready:function(){
	document.addEventListener("deviceready",fn.init, false);
	},
	init:function(){
        

	$('#sig1').tap(fn.almacenar);
    $('#calc').tap(fn.calcular);
    $('#envia').tap(fn.envia);
    $('#dis1').tap(fn.dispositivo);
    $('#red1').tap(fn.estaconectado);
    $('#regFoto').tap(fn.tomarFoto);
	},
    almacenar:function(){
     navigator.vibrate(1000);
     navigator.notification.beep(1);

     var nombre_usuario=$('#name').val();
     localStorage.setItem("nombre",nombre_usuario);
     
     navigator.notification.alert("hola "+nombre_usuario,null,"Bienvenido","ok");
    },
    calcular:function(){
        var peso=$('#peso').val();
        var altura=$('#altura').val();
        var imc=parseFloat(peso)/(parseFloat(altura)*parseFloat(altura));

        var nom=localStorage.getItem('nombre');
        localStorage.setItem("imc",imc);

    navigator.notification.alert("hola "+nom+ "tu imc es"+imc,
        null,"IMC","ok");

    },
    envia:function(){
      navigator.vibrate(1000);
     navigator.notification.beep(1);
      var peso=$('#peso').val();
        var altura=$('#altura').val();
        var imc=localStorage.getItem("imc");
        var nombre=localStorage.getItem("nombre");
        alert(nombre+" "+imc);

        if(peso!='' && altura!='' && nombre!='' && imc!='')
        {alert("no vacios");
         $.ajax({
        type: "POST",
        url: "http://uprrimc.azurewebsites.net/test2.php", // data: { nom: nom, mail: mail,tel:tel }
        data: "peso="+peso+"&altura="+altura+"&nombre="+nombre+"&imc="+imc
               }).done(function(msg){
                        if(msg==1){
                               
                        alert("Datos eviados y recibidos");
                        
                        }else{
                         lert("Hubo un error en el registro");
                        }
                    });
            
           }else{
         alert('Todos los campos son requeridos');
            }

    },
    dispositivo:function(){
        $('#data').append('<p>'+device.model+'</p>');
        $('#data').append('<p>'+device.platform+'</p>');
        $('#data').append('<p>'+device.version+'</p>')

    },
    estaconectado:function(){
        navigator.notification.beep(1);
        var conn=navigator.connection.type;

        if(conn!=Connection.NONE)
            alert("conectado");
        else
            alert("desconectado");
    },
    tomarFoto:function(){
        // start image capture
    navigator.device.capture.captureImage(function(img){
        for(i=0;i<img.length;i++){
            ruta=img[i].fullPath;
        }
        $('#regFoto').attr('foto',ruta);
        $('#regImg').html('<img src="'+ruta+'" width="100%"/>');
    },
    function(err){alert("error"+err.code)}, 
     {limit:2});

    }
}

$(fn.ready);