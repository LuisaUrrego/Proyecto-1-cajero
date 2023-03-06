 /*Escribir una lista de usuarios con los siguientes datos: nombre, número 
de documento, contraseña y tipo de usuario. El tipo de usuario será: 1: 
administrador, 2: cliente. Guardarla en un array de objeto */

const listadoUsuarios = [
{
    name: "Luisa",
    document: 10362,
    password: 8899,
    userType: 1,
},
{
    name: "Miriam",
    document: 52285,
    password: 1543,
    userType: 2,
},
{
    name: "Juan",
    document: 79023,
    password: 5789,
    userType: 2,
},
{
    name: "Hector",
    document: 76432,
    password: 5529,
    userType: 2,
},
]


/*2. Realizar un programa que al inicio solicite ingresar documento y 
contraseña, si el usuario no existe debe indicar que no existe y volver a 
preguntar usuario y contraseña...*/

const verification = () =>{
    let verification= true;
    let user = {};
    while (verification) {
        const identification = parseInt(prompt ("Por favor ingrese su documento"));
        const userPass = parseInt(prompt ("Por favor ingrese su contraseña"));
        listadoUsuarios.forEach (element =>{
            if (element.document == identification && element.password == userPass) {
                user = element;
                verification = false;
                
            };

        });
        if (verification == true) {
            alert("Este usuario no existe, por favor verifique los datos ingresados");
            
        };
       
                
    };
    return user;
}

/*si el usuario es administrador, debe 
permitir cargar el cajero de la siguiente manera: 
3. Solicitar la cantidad de billetes de 5, 10, 20, 50 y 100 mil pesos COP.
4. Almacenar esta información en un array de objetos.*/

let cashOnHand = [
    {
        quantity: 0,
        denomination: 100000,
    },
    {
        quantity: 0,
        denomination: 50000,
    },
    {
        quantity: 0,
        denomination: 20000,
    },
    {
        quantity: 0,
        denomination: 10000,
    },
    {
        quantity: 0,
        denomination: 5000,
    }
]

const cashier = (cashOnHand, user) => {
    if (user.userType == 1) {
        let totalsum= 0;
        cashOnHand.forEach (element => {
            element.quantity += parseInt (prompt("Bienvenido administrador, por favor ingresa la cantidad de billetes de " , element.denomination));

            /*5. Una vez tenga la información, debe mostrar en consola la suma por cada 
            denominación y el total general */ 
            const totalDenomination = element.quantity * element.denomination;
            console.log ("La suma de billetes de " , element.denomination , "es " , totalDenomination , " cantidad de billetes " , element.quantity);
            totalsum += totalDenomination;
        

        });
        console.log("La suma total de la cantidad de billetes es: " , totalsum );


        
       /* 7. Si el cajero no tiene dinero cargado, debe aparecer un mensaje en 
        consola: “Cajero en mantenimiento, vuelva pronto.” Y reiniciar desde el 
        inicio.*/
           
    }
    else if (user.userType == 2){
        let totalsum = 0;
        cashOnHand.forEach (element => {
            const totalDenomination = element.quantity * element.denomination;
            totalsum += totalDenomination;

        });

        if (totalsum == 0) {
            console.log ("Cajero en mantenimiento, vuelva pronto");
            
        } else if (totalsum > 0){
            let cantidadRetiro = parseInt (prompt ("Por favor ingrese la cantidad a retirar"));
            console.log ("La cantidad que el usuario desea retirar es " , cantidadRetiro);
            if (cantidadRetiro <= totalsum) {
                let cantidadEntrega = 0;
                cashOnHand.forEach (element => {
                    const dineroRequerido = Math.floor (cantidadRetiro / element.denomination);
                    if (dineroRequerido <= element.quantity) {
                       if (cantidadRetiro >= element.denomination * dineroRequerido) {
                        cantidadRetiro -= element.denomination * dineroRequerido ;
                        element.quantity -= dineroRequerido;
                        cantidadEntrega += element.denomination * dineroRequerido;
                        console.log ("Se entregaron " & dineroRequerido & "de " & element.denomination);

                        
                       } 
                        
                    } else if (dineroRequerido > element.quantity) {
                        if (cantidadRetiro >= element.denomination * element.quantity){
                            console.log("Se entregó " , element.quantity , "de " , element.denomination);
                            cantidadEntrega += element.denomination * element.quantity;
                            cantidadRetiro -= element.denomination * element.quantity;
                            element.quantity -= element.quantity
                        }
                        
                    }

                })
                console.log("La cantidad que el cajero pudo entregar fue " ,
                cantidadEntrega & "Y le faltó por entregar" & cantidadRetiro);

                let dineroDisponible = 0;
                cashOnHand.forEach(element => {
                    const totalDenomination = element.quantity * element.denomination;
                    console.log("La suma de billetes " & element.denomination & "Y el restante en el cajero es " 
                    & totalDenomination & "La cantidad restante de billetes es " & element.quantity );
                    

               
                });

            }else if (cantidadRetiro > totalsum){
                console.log ("Lo sentimos el cajero no cuenta con los fondos necesarios para poder realizar el retiro");

            }
                    
                      
            
        }
        
       
    }
   
 



    
 
    
 

 
  

 
