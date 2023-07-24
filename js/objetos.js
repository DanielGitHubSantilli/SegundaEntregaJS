    
    /* dentro de un objeto a las variables se le van a llamar atributos/propiedades y a las funciones se les llama métodos */
         const miPresentacion = {
          nombre: "Daniel",
          apellido: "Santilli",
          edad: 46,
          pasatiempos: ["Bailar Tango"," jugar al fùtbol."],
          soltero: false,
          hijos:2,
          notas: [8,9,10],
          contacto: {
            email: "danielsantilli.informatica@gmail.com",
            twitter: "@daniel_santilli",
            linkedin: "Daniel Santilli",
            celular: "2324-000000"
            },
    
          //función anónima...
          //Template strings (comillas simples que me pemite interpolar las variables.)
            decirMiNombre: function () {
            console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir como ${this.contacto.twitter} en twitter.`)
            }
          }

        //Diferentes formas de llamar al Objeto.
        console.log(miPresentacion);
        console.log("Mi nombre: " +  miPresentacion["nombre"]);
        console.log("Mi apellido: " + miPresentacion["apellido"]);
        console.log("Convirtiendo a mayúsculas: " + miPresentacion.nombre.toUpperCase()); //método para transformar en mayúsculas.
        console.log("Convirtiendo a mayúsculas: " + miPresentacion.apellido.toUpperCase());
        console.log("tengo: " + miPresentacion.edad + " años");
        console.log(miPresentacion.soltero);
        console.log("Mis pasatiempos: " + miPresentacion.pasatiempos);
        console.log("Mi pasión: " + miPresentacion.pasatiempos[0]);
        console.log("Es un placer: " + miPresentacion.pasatiempos[1]);
        console.log(miPresentacion.contacto);
        
        console.log("Ni contato en Twitter: " + miPresentacion.contacto.twitter);

        //Método. NO necesito llamar al console.log porque la funcion contiene uno.
         
        miPresentacion.decirMiNombre();

        const FullStack=["Desarrollo Web"," JavaScript"," ReactJS"," BackEnd."]
        
        //console.log("La nota más alta es: "+  Math.max(${this.notas}))
        
        console.log("La carrera de full Stack cuenta con las siguientes materias: " + FullStack);
        console.log("Cursé y aprobé: " + FullStack[0] + ".");
        console.log("Estoy cursando: " + FullStack[1] + ".");
        console.log("Me quedan por cursar: " + FullStack[2] + "," + FullStack[3] + ".");
        console.log("La cantidad de materias de la carrera son: " + FullStack.length + ".");
        

        FullStack.push(" Otra Materia");
        console.log("Agregando una materia: " + FullStack);

        FullStack.pop();
        console.log("Eliminando una materia: " + FullStack)

        console.log("*****************OBJETO Date******************")
      
        console.log("Hoy es: " + new Date())

        console.log("*****************OBJETO Math Funciones matemáticas******************")

        console.log("Función PI: " + Math.PI);
        console.log("Función Logaritmo natural: " + Math.LN10);
        console.log("nota más baja es: " + Math.min(...miPresentacion.notas));
        console.log("nota más alta es: " + Math.max(...miPresentacion.notas));

        console.log("***************UTILIZANDO MÉTODO DE BÚSQUEDA INCLUDE*************** ")  
      let incluyeNotaNueve = miPresentacion.notas.includes(9)  
      console.log("¿Se encuentra la nota 9? " + incluyeNotaNueve);
      let incluyeApellido = miPresentacion.apellido.includes("Santilli")
      console.log("¿Se encuentra el apellido? " + incluyeApellido);
    


