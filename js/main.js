//Braihan Steven Lopera Agudelo - cc. 1023524836 - Ejercicio 6

//Vraiables

let valorMensual = 0;
let planBasico = 70000;
let planPremium = 90000;
let planVip = 120000;
let valorAdicionalE = 1.20; // E = Empresarial
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
            let numeroCliente = Number(prompt("¡Genial!\nEl tipo de plan ha sido registrado con exito.\nListo, indicanos el numero para que alguno de nuestros asesores se pueda contactar contigo:"))
            console.log("Numero registrado: " + numeroCliente + "\nendiente para contactar.");
            alert("El numero " + numeroCliente + " Ha sido registrado, en breve nos contactaremos contigo. \nGracias por contar con nosotros, que tengas un lindo dia 😊")
        }else if(tipoCliente == 2){
            console.log("Cliente Empresarial registrado. \nvalor: " + planBasico);
            console.log("Sumandole el 20% por ser tipo empresarial");
            let conValorAdicional = planBasico * valorAdicionalE;
            console.log("Total: " + conValorAdicional);
            alert("Para continuar el proceso te pediremos unos datos.")
            let nombreEmpresa = prompt("Cual es el nombre de la empresa?:")
            console.log("Nombre registrado: "+ nombreEmpresa);
            let nombreEncargado = prompt("A nombre de quien se solicita el servicio:")
            console.log("Nombre del encargado: "+ nombreEncargado);
            let direccionEmpresa = prompt("Cual es la direccion de la empresa?: ");
            console.log("Direccion de la empresa: "+ direccionEmpresa);
            let zonaRural = prompt("Es una zona rural? (SI/NO):")
                if(zonaRural == 'si'){
                    let valorRural = conValorAdicional * 1.05
                    console.log("Valor adicional por zona rural: " + valorRural);
                }
            numeroCliente = Number(prompt("Listo, indicanos el numero para que alguno de nuestros asesores se pueda contactar contigo:"))
            console.log("Numero registrado: "+ numeroCliente);
            alert("Listo en breve nos contactaremos a el numero "+ numeroCliente + " que tengas un lindo dia 😊");
            console.log("Valor total del plan: "+ conValorAdicional);
        }else if(tipoCliente == 3){
            console.log("Cliente Institucional registrado" + planBasico);
            console.log("Sumandole 10%");
            let conValorAdicional = planBasico + valorAdicinalI
            console.log("Total: " + conValorAdicional);
            alert("Para continuar el proceso te pediremos unos datos.")
            let nombreInstitucion = prompt("Cual es el nombre de la institucion?:")
            console.log("Nombre registrado: "+ nombreInstitucion);
            let nombreEncargado = prompt("A nombre de quien se solicita el servicio:")
            console.log("Nombre del encargado: "+ nombreEncargado);
            let direccionInstitucion = prompt("Cual es la direccion de la institucion?: ");
            console.log("Direccion de la institucion: "+ direccionInstitucion);
            numeroCliente = Number(prompt("Listo, indicanos el numero para que alguno de nuestros asesores se pueda contactar contigo:"))
            console.log("Numero registrado: "+ numeroCliente);
            alert("Listo en breve nos contactaremos a el numero "+ numeroCliente + "que tengas un lindo dia 😊");
            console.log("Valor total del plan: "+ conValorAdicional);
        }else{

            
        }
        
        
    }else{
        alert("Respuesta invalida.")
    }
    
}else if( opcionUsuario == 2){
    console.log("plan seleciionado: Plan premium");
    console.log("Costo: " + planPremium);
    opcionUsuario = prompt("Este es nuestro plan bpremium:\n-Incluye internet con velocidad de entrada de 50Mbps\n-Su costo es de: $90.000cop/Mensuales\n-Deseas adquirir este plan? (SI/NO)");
    if(opcionUsuario.toLowerCase() == 'si'){
        console.log("Inicia proceso de adquisicion del producto.");
        console.log("Costo: " + planPremium);

        let tipoCliente = Number(prompt("Perfecto 🤩. Ya casi estas listo para ser parte de nuestra familia.\nQue tipo de cliente eres?:\n1.Residencial\n2.Empresarial\n3.Institucional"))
        if(tipoCliente == 1){
            console.log("Cliente residencial registrado. \nValor total a pagar: " + planPremium + "\nSin costos adicionales.");
            let numeroCliente = Number(prompt("¡Genial!\nEl tipo de plan ha sido registrado con exito.\nListo, indicanos el numero para que alguno de nuestros asesores se pueda contactar contigo:"))
            console.log("Numero registrado: " + numeroCliente + "\nPendiente para contactar.");
            alert("El numero " + numeroCliente + " Ha sido registrado, en breve nos contactaremos contigo. \nGracias por contar con nosotros, que tengas un lindo dia 😊")
        }else if(tipoCliente == 2){
            console.log("Cliente Empresarial registrado. \nvalor: " + planPremium);
            console.log("Sumandole el 20% por ser tipo empresarial");
            let conValorAdicional = planPremium * valorAdicionalE;
            console.log("Total: " + conValorAdicional);
            alert("Para continuar el proceso te pediremos unos datos.")
            let nombreEmpresa = prompt("Cual es el nombre de la empresa?:")
            console.log("Nombre registrado: "+ nombreEmpresa);
            let nombreEncargado = prompt("A nombre de quien se solicita el servicio:")
            console.log("Nombre del encargado: "+ nombreEncargado);
            let direccionEmpresa = prompt("Cual es la direccion de la empresa?: ");
            console.log("Direccion de la empresa: "+ direccionEmpresa);
            numeroCliente = Number(prompt("Listo, indicanos el numero para que alguno de nuestros asesores se pueda contactar contigo:"))
            console.log("Numero registrado: "+ numeroCliente);
            alert("Listo en breve nos contactaremos a el numero "+ numeroCliente + " que tengas un lindo dia 😊");
            console.log("Valor total del plan: "+ conValorAdicional);
        }else if(tipoCliente == 3){
            console.log("Cliente Institucional registrado" + planPremium);
            console.log("Sumandole 10%");
            let conValorAdicional = planPremium + valorAdicinalI
            console.log("Total: " + conValorAdicional);
            alert("Para continuar el proceso te pediremos unos datos.")
            let nombreInstitucion = prompt("Cual es el nombre de la institucion?:")
            console.log("Nombre registrado: "+ nombreInstitucion);
            let nombreEncargado = prompt("A nombre de quien se solicita el servicio:")
            console.log("Nombre del encargado: "+ nombreEncargado);
            let direccionInstitucion = prompt("Cual es la direccion de la institucion?: ");
            console.log("Direccion de la institucion: "+ direccionInstitucion);
            numeroCliente = Number(prompt("Listo, indicanos el numero para que alguno de nuestros asesores se pueda contactar contigo:"))
            console.log("Numero registrado: "+ numeroCliente);
            alert("Listo en breve nos contactaremos a el numero "+ numeroCliente + "que tengas un lindo dia 😊");
            console.log("Valor total del plan: "+ conValorAdicional);
        }else{   
        }
    }else{
        alert("Respuesta invalida.")
    }
}else if(opcionUsuario == 3){
    console.log("plan seleciionado: Plan V.I.P");
    console.log("Costo: " + planVip);
    opcionUsuario = prompt("Este es nuestro plan V.I.P:\n-Incluye internet con velocidad de entrada de 100Mbps\n-Su costo es de: $100.000cop/Mensuales\n-Deseas adquirir este plan? (SI/NO)");
    if(opcionUsuario.toLowerCase() == 'si'){
        console.log("Inicia proceso de adquisicion del producto.");
        console.log("Costo: " + planVip);

        let tipoCliente = Number(prompt("Perfecto 🤩. Ya casi estas listo para ser parte de nuestra familia.\nQue tipo de cliente eres?:\n1.Residencial\n2.Empresarial\n3.Institucional"))
        if(tipoCliente == 1){
            console.log("Cliente residencial registrado. \nValor total a pagar: " + planVip + "\nSin costos adicionales.");
            let numeroCliente = Number(prompt("¡Genial!\nEl tipo de plan ha sido registrado con exito.\nListo, indicanos el numero para que alguno de nuestros asesores se pueda contactar contigo:"))
            console.log("Numero registrado: " + numeroCliente + "\nPendiente para contactar.");
            alert("El numero " + numeroCliente + " Ha sido registrado, en breve nos contactaremos contigo. \nGracias por contar con nosotros, que tengas un lindo dia 😊")
        }else if(tipoCliente == 2){
            console.log("Cliente Empresarial registrado. \nvalor: " + planVip);
            console.log("Sumandole el 20% por ser tipo empresarial");
            let conValorAdicional = planVip * valorAdicionalE;
            console.log("Total: " + conValorAdicional);
            alert("Para continuar el proceso te pediremos unos datos.")
            let nombreEmpresa = prompt("Cual es el nombre de la empresa?:")
            console.log("Nombre registrado: "+ nombreEmpresa);
            let nombreEncargado = prompt("A nombre de quien se solicita el servicio:")
            console.log("Nombre del encargado: "+ nombreEncargado);
            let direccionEmpresa = prompt("Cual es la direccion de la empresa?: ");
            console.log("Direccion de la empresa: "+ direccionEmpresa);
            numeroCliente = Number(prompt("Listo, indicanos el numero para que alguno de nuestros asesores se pueda contactar contigo:"))
            console.log("Numero registrado: "+ numeroCliente);
            alert("Listo en breve nos contactaremos a el numero "+ numeroCliente + " que tengas un lindo dia 😊");
            console.log("Valor total del plan: "+ conValorAdicional);
        }else if(tipoCliente == 3){
            console.log("Cliente Institucional registrado" + planVip);
            console.log("Sumandole 10%");
            let conValorAdicional = planVip + valorAdicinalI
            console.log("Total: " + conValorAdicional);
            alert("Para continuar el proceso te pediremos unos datos.")
            let nombreInstitucion = prompt("Cual es el nombre de la institucion?:")
            console.log("Nombre registrado: "+ nombreInstitucion);
            let nombreEncargado = prompt("A nombre de quien se solicita el servicio:")
            console.log("Nombre del encargado: "+ nombreEncargado);
            let direccionInstitucion = prompt("Cual es la direccion de la institucion?: ");
            console.log("Direccion de la institucion: "+ direccionInstitucion);
            numeroCliente = Number(prompt("Listo, indicanos el numero para que alguno de nuestros asesores se pueda contactar contigo:"))
            console.log("Numero registrado: "+ numeroCliente);
            alert("Listo en breve nos contactaremos a el numero "+ numeroCliente + "que tengas un lindo dia 😊");
            console.log("Valor total del plan: "+ conValorAdicional);
        }
    }
}