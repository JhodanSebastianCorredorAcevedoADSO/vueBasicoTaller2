export default {
     data() {
          return { 
               mostrar:false,    
               Nombre: '',
               Telefono: '',
               Teams: '',
               Email: '',

               Nombre2: '',
               Telefono2: '',
               Teams2: '',
               Email2: '',
               Barrio2: '',
               Transporte2: '',
               NivelA: '',

               Datos : [],
               Datos2: []               
          };
          
     },     
     methods: {
          processInput(){
               this.Datos.push({
                    Nombre: this.Nombre, 
                    Telefono: this.Telefono,
                    Teams: this.Teams,
                    Email: this.Email
               })
               this.Nombre = '',
               this.Telefono= '',
               this.Teams = '',
               this.Email = ''
          },
          processInput2(){
               this.Datos2.push({
                    Nombre: this.Nombre2, 
                    Telefono: this.Telefono2,
                    Teams: this.Teams2,
                    Email: this.Email2,
                    Barrio:this.Barrio2,
                    Transporte:this.Transporte2,
                    NivelA: this.NivelA
               })
               this.Nombre2 = '',
               this.Telefono2= '',
               this.Teams2 = '',
               this.Email2 = '',
               this.Barrio2 ='',
               this.Transporte2 ='',
               this.NivelA = ''
          },
          // elija(){
          //      document.getElementById('elija')
          // }
     }
}