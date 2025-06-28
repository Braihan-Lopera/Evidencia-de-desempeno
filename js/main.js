//Braihan Steven Lopera Agudelo - cc. 1023524836 - Ejercicio 6

//Vraiables

let valorMensual = 0;
let planBasico = 70000;
let planPremium = 90000;
let planVip = 120000;
let valorAdicionalE = 1.20; // E = Empresarial
let valorDescuentoI = 0.90; // I = Institucional


let opcionUsuario = Number(prompt("Bienvenido a el servicio de internet domiciliario\n*************************************************\nQue desea hacer?: \n1.Pagar mi plan de internet \n2.Ver planes disponibles"))
if(opcionUsuario ==1){
    let tipoPlan = prompt("¿Qué plan tienes?:\n1. Básico\n2. Premium\n3. VIP");
    let tipoCliente = prompt("¿Qué tipo de cliente eres?:\n1. Residencial\n2. Empresarial\n3. Institucional");
    let esRural = prompt("¿Estás en zona rural? (SI/NO):");
    let valorBase = 0;
    if(tipoPlan == "1"){
        valorBase = 70000;
    }else if(tipoPlan == "2"){
        valorBase = 90000;
    }else if(tipoPlan == "3"){
        valorBase = 120000;
    }else{
        alert("Plan no válido.");
    }
    if(tipoCliente == "2"){ // Empresarial
        valorBase = valorBase * 1.20;
    }else if(tipoCliente == "3"){ // Institucional
        valorBase = valorBase * 0.90;
    }
    if(esRural.toLowerCase() == "si"){
        valorBase = valorBase * 1.05;
    }
    let estaAlDia = prompt("¿Pagaste dentro de la fecha límite? (SI/NO):");
    if(estaAlDia.toLowerCase() == "no"){
        valorBase = valorBase * 1.02;
        alert("Por pago fuera de fecha se aplica un interés del 2%." );
    }
    alert("El total a pagar es: $" + valorBase.toFixed(0) + " COP.\nGracias por ponerte al día 😊");
}else if(opcionUsuario == 2){
    let opcionUsuario = Number(prompt("MENU DE PLANES \n****************************\n1.Plan basico. \n2.Plan premium. \n3.Plan V.I.P"));
    if(opcionUsuario == 1){
        console.log("Iniciando solicitud.");
        console.log("plan seleccionado: Plan basico");
        console.log("Costo: " + planBasico);
        let opcionUsuario = prompt("Este es nuestro plan basico:\n-Incluye internet con velocidad de entrada de 30Mbps\n-Su costo es de: $70.000cop/Mensuales\n-Deseas adquirir este plan? (SI/NO)");
        if(opcionUsuario.toLowerCase() == 'si'){
            console.log("Inicia proceso de adquisicion del producto.");
            console.log("Costo: " + planBasico);
            let tipoCliente = Number(prompt("Perfecto 🤩. Ya casi estas listo para ser parte de nuestra familia.\nQue tipo de cliente eres?:\n1.Residencial\n2.Empresarial\n3.Institucional"))
            if(tipoCliente == 1){
                console.log("Cliente residencial registrado. \nValor total a pagar: " + planBasico + "\nSin costos adicionales.");
                let numeroCliente = Number(prompt("¡Genial!\nEl tipo de plan ha sido registrado con exito.\nListo, indicanos el numero para que alguno de nuestros asesores se pueda contactar contigo:"))
                console.log("Numero registrado: " + numeroCliente + "\npendiente para contactar.");
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
                let numeroCliente = Number(prompt("Listo, indicanos el numero para que alguno de nuestros asesores se pueda contactar contigo:"))
                console.log("Numero registrado: "+ numeroCliente);
                alert("Listo en breve nos contactaremos a el numero "+ numeroCliente + " que tengas un lindo dia 😊");
                console.log("Valor total del plan: "+ conValorAdicional);
            }else if(tipoCliente == 3){
                console.log("Cliente Institucional registrado" + planBasico);
                console.log("Quitandole el  10%");
                let conValorAdicional = planBasico * valorDescuentoI
                console.log("Total: " + conValorAdicional);
                alert("Para continuar el proceso te pediremos unos datos.")
                let nombreInstitucion = prompt("Cual es el nombre de la institucion?:")
                    if(!isNaN(nombreInstitucion)){
                        alert("Creo que eso no es un nombre de una institucion 🤔")
                    }else{
                        console.log("Nombre ingresado: "+ nombreInstitucion);
                    }
                console.log("Nombre registrado: "+ nombreInstitucion);
                let nombreEncargado = prompt("A nombre de quien se solicita el servicio:");
                    if(!isNaN(nombreEncargado)){
                        alert("Creo que eso no es un nombre de un encargado 🤔")
                    }else{
                        console.log("Nombre ingresado: "+ nombreEncargado);
                    }
                console.log("Nombre del encargado: "+ nombreEncargado);
                let direccionInstitucion = prompt("Cual es la direccion de la institucion?: ");
                console.log("Direccion de la institucion: "+ direccionInstitucion);
                let numeroCliente = Number(prompt("Listo, indicanos el numero para que alguno de nuestros asesores se pueda contactar contigo:"))
                console.log("Numero registrado: "+ numeroCliente);
                alert("Listo en breve nos contactaremos a el numero "+ numeroCliente + "que tengas un lindo dia 😊");
                console.log("Valor total del plan: "+ conValorAdicional);
            }else{
                alert("¡Opcion no valida!");
            }
    }else if(opcionUsuario.toLowerCase() == 'no'){
        console.log("Operacion cancelada. Volver al menu.");
        alert("No te preocupes, aca estaremos por si cambias de opinion 😁");
    }
    else{
        alert("Respuesta invalida.")
    }
    
}else if( opcionUsuario == 2){
    console.log("plan seleciionado: Plan premium");
    console.log("Costo: " + planPremium);
    let opcionUsuario = prompt("Este es nuestro plan premium:\n-Incluye internet con velocidad de entrada de 50Mbps\n-Su costo es de: $90.000cop/Mensuales\n-Deseas adquirir este plan? (SI/NO)");
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
                if(!isNaN(nombreEmpresa)){
                    alert("Creo que eso no es un nombre de una empresa 🤔")
                }else{
                    console.log("Nombre ingresado: "+ nombreEmpresa);
                }
            console.log("Nombre registrado: "+ nombreEmpresa);
            let nombreEncargado = prompt("A nombre de quien se solicita el servicio:")
                if(!isNaN(nombreEncargado)){
                    alert("Creo que eso no es un nombre de una institucion 🤔")
                }else{
                    console.log("Nombre ingresado: "+ nombreEncargado);
                }
            console.log("Nombre del encargado: "+ nombreEncargado);
            let direccionEmpresa = prompt("Cual es la direccion de la empresa?: ");
            console.log("Direccion de la empresa: "+ direccionEmpresa);
            let numeroCliente = Number(prompt("Listo, indicanos el numero para que alguno de nuestros asesores se pueda contactar contigo:"))
            console.log("Numero registrado: "+ numeroCliente);
            alert("Listo en breve nos contactaremos a el numero "+ numeroCliente + " que tengas un lindo dia 😊");
            console.log("Valor total del plan: "+ conValorAdicional);
        }else if(tipoCliente == 3){
            console.log("Cliente Institucional registrado" + planPremium);
            console.log("quitandole el 10%");
            let conValorAdicional = planPremium * valorDescuentoI
            console.log("Total: " + conValorAdicional);
            alert("Para continuar el proceso te pediremos unos datos.")
            let nombreInstitucion = prompt("Cual es el nombre de la institucion?:")
                if(!isNaN(nombreInstitucion)){
                    alert("Creo que eso no es un nombre de una institucion 🤔")
                }else{
                    console.log("Nombre ingresado: "+ nombreInstitucion);
                }
            console.log("Nombre registrado: "+ nombreInstitucion);
            let nombreEncargado = prompt("A nombre de quien se solicita el servicio:")
                if(!isNaN(nombreEncargado)){
                    alert("Creo que eso no es un nombre de un encargado 🤔")
                }else{
                    console.log("Nombre ingresado: "+ nombreEncargado);
                }
            console.log("Nombre del encargado: "+ nombreEncargado);
            let direccionInstitucion = prompt("Cual es la direccion de la institucion?: ");
            console.log("Direccion de la institucion: "+ direccionInstitucion);
            let numeroCliente = Number(prompt("Listo, indicanos el numero para que alguno de nuestros asesores se pueda contactar contigo:"))
            console.log("Numero registrado: "+ numeroCliente);
            alert("Listo en breve nos contactaremos a el numero "+ numeroCliente + "que tengas un lindo dia 😊");
            console.log("Valor total del plan: "+ conValorAdicional);
        }else{   
        }
    }else if(opcionUsuario.toLowerCase() == 'no'){
        console.log("Operacion cancelada. Volver al menu.");
        alert("No te preocupes, aca estaremos por si cambias de opinion 😁");
    }
    else{
        alert("Respuesta invalida.")
    }
    }else if(opcionUsuario == 3){
        console.log("plan seleciionado: Plan V.I.P");
        console.log("Costo: " + planVip);
        let opcionUsuario = prompt("Este es nuestro plan V.I.P:\n-Incluye internet con velocidad de entrada de 100Mbps\n-Su costo es de: $100.000cop/Mensuales\n-Deseas adquirir este plan? (SI/NO)");
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
                    if(!isNaN(nombreEmpresa)){
                        alert("Creo que eso no es un nombre de una empresa 🤔")
                    }else{
                        console.log("Nombre ingresado: "+ nombreEmpresa);
                    }
                console.log("Nombre registrado: "+ nombreEmpresa);
                let nombreEncargado = prompt("A nombre de quien se solicita el servicio:");
                if(!isNaN(nombreEncargado)){
                    alert("Creo que eso no es un nombre de un encargado 🤔")
                }else{
                    console.log("Nombre ingresado: "+ nombreEncargado);
                }
                console.log("Nombre del encargado: "+ nombreEncargado);
                let direccionEmpresa = prompt("Cual es la direccion de la empresa?: ");
                console.log("Direccion de la empresa: "+ direccionEmpresa);
                let numeroCliente = Number(prompt("Listo, indicanos el numero para que alguno de nuestros asesores se pueda contactar contigo:"))
                console.log("Numero registrado: "+ numeroCliente);
                alert("Listo en breve nos contactaremos a el numero "+ numeroCliente + " que tengas un lindo dia 😊");
                console.log("Valor total del plan: "+ conValorAdicional);
            }else if(tipoCliente == 3){
                console.log("Cliente Institucional registrado" + planVip);
                console.log("Quitandole el 10%");
                let conValorAdicional = planVip * valorDescuentoI
                console.log("Total: " + conValorAdicional);
                alert("Para continuar el proceso te pediremos unos datos.")
                let nombreInstitucion = prompt("Cual es el nombre de la institucion?:")
                console.log("Nombre registrado: "+ nombreInstitucion);
                let nombreEncargado = prompt("A nombre de quien se solicita el servicio:")
                console.log("Nombre del encargado: "+ nombreEncargado);
                let direccionInstitucion = prompt("Cual es la direccion de la institucion?: ");
                console.log("Direccion de la institucion: "+ direccionInstitucion);
                let numeroCliente = Number(prompt("Listo, indicanos el numero para que alguno de nuestros asesores se pueda contactar contigo:"))
                console.log("Numero registrado: "+ numeroCliente);
                alert("Listo en breve nos contactaremos a el numero "+ numeroCliente + "que tengas un lindo dia 😊");
                console.log("Valor total del plan: "+ conValorAdicional);
            }else{
                console.log("Respuesta incorrecta, cancelando solicitud.");
                alert("Respuesta no valida");
            }
        }else if(opcionUsuario.toLowerCase() == 'no'){
            console.log("Operacion cancelada. Volver al menu.");
            alert("No te preocupes, aca estaremos por si cambias de opinion 😁");
        }else{
            console.log("Respuesta incorrecta, cancelando solicitud.");
            alert("Respuesta no valida");
        }
    }else{
    //Control de error
    if(isNaN(opcionUsuario)){
        alert("¡Eso no es un numero valido!")
    }else{
        console.log("Numero ingresado: "+ opcionUsuario);
    }
    console.log("Cancelar solicitud.");
    alert("Opcion no valida, intenta de nuevo.");
    }
}else{
    alert("Opción no válida. Intenta nuevamente.");
    throw new Error("Proceso detenido por opción inválida.");}