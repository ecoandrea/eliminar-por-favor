

let trabajos = [
    {id:1,trabajo:'Freelance'},
    {id:2,trabajo:'Docente'},
    {id:3,trabajo:'escuela de la calle'}
];

let personas = [
    {id:1,nombre:'Jose Luis',edad:22,trabajo_id:1},
    {id:2,nombre:'Juan',edad:22,trabajo_id:1},
    {id:3,nombre:'Martin',edad:30,trabajo_id:2},
    {id:4,nombre:'Danilo',edad:40,trabajo_id:3}
];


function obtenerPersonas(){
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            resolved(personas)
        },100)
    });
}

function buscarPersona(id){
    if(typeof(id)!=='number') return Promise.reject("No puedes poner textos");

    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            let persona = personas.filter(persona=>{return persona.id === id})[0];
            resolved(persona);
        },500);
    });
}

function buscarTrabajo(idTrabajoPersona){
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            let trabajo = trabajos.find(trabajo=>{return trabajo.id === idTrabajoPersona});
            resolved(trabajo);
        },500);
    });
}

let idBusqueda = 3;
obtenerPersonas()
.then(personas=>{return buscarPersona(idBusqueda)})

.then(persona=>{
    console.log(`La persona es ${persona.nombre} y su id de trabajo es ${persona.trabajo_id}`); 
    return buscarTrabajo(persona.trabajo_id)
})

.then(trabajo=>{
    console.log(trabajo)
})

.catch(e=>{console.error(e)});

function suma (numero){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(numero+48);
        }, 2000);
    })

    
}


class Animal{
    constructor(tipo,tamano,habitat){
        this.tipo = tipo
        this.tamano = tamano
        this.habitat = habitat
    }
    


class Perro extends Animal{
    constructor(tipo,tamano,habitat,raza){
        super(tipo,tamano,habitat)
        this.raza = raza
    }
}

    static dormir(){
        return `Zzzzz.... zzz.... zz..`
    }


console.log(Animal.dormir());