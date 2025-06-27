//Braihan Steven Lopera Agudelo - cc. 1023524836 - Ejercicio 6

//Vraiables

let valorMensual = 0;
let planBasico = 70000;
let planPremium = 90000;
let planVip = 120000;
let valorAdicionalE = 0.80; // E = Empresarial
let valorAdicinalI= 0.10; // I = Institucional

let opcionUsuario = Number(prompt("Bienvenido a el servicio de internet domiciliario\n*************************************************\nQue servicio desea contratar?: \n1.Ver plan basico \n2.Ver plan premium \n3.Ver plan V.I.P"))

if(opcionUsuario == 1){
    console.log("plan seleciionado: Plan basico");
    console.log("Costo: " + planBasico);
    opcionUsuario = prompt("Este es nuestro plan basico:\n-Incluye internet con velocidad de entrada de 30Mbps\n-Su costo es de: $70.000cop/Mensuales\n-Deseas adquirir este plan? (SI/NO)");
    if(opcionUsuario.toLowerCase() == 'si'){
        console.log("Inicia proceso de adquisicion del producto.");
        console.log("Costo: " + planBasico);

        let tipoCliente = Number(prompt("Perfecto 🤩. Ya casi estas listo para ser parte de nuestra familia.\nQue tipo de cliente eres?:\n1.Residencial\n2.Empresarial\n3.Institucional"))
        if(tipoCliente == 1){
            console.log("Cliente residencial registrado. \nValor total a pagar: " + planBasico + "\nSin costos adicionales.");
            let numeroCliente = Number(prompt("¡Genial!\nEl tipo de plan ha sido registrado con exito.\nPor favor, dejanos tu numero para que alguno de nuestros asesores se comunique contigo y asi puedas saber cuando sera la instalacion de nuestros servicios."))
            console.log("Numero registrado: " + numeroCliente + "\nendiente para contactar.");
            alert("El numero " + numeroCliente + " Ha sido registrado, en breve nos contactaremos contigo. \nsaliendo...")
        }else if(opcionUsuario == 2){
            console.log("Cliente Empresarial registrado. valor: " + planBasico);
            console.log("Sumandole el 20% por ser tipo empresarial");
            let conValorAdicional = planBasico * valorAdicionalE;
            console.log("Total: " + conValorAdicional);

        }else if(opcionUsuario == 3){

        }else{

            
        }
        
        
    }    
    
}
