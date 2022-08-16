class Estudiante {
    _nombre
    _asignaturas = ["Javascript","HTML","CSS"]
    _asignatura
    constructor(nombre, asignatura){
        this._nombre = nombre
        this._asignatura = asignatura
    }
    obtenDatos (){
    return `Soy ${this._nombre} y estudio ${this._asignaturas[this._asignatura]}`
    }
}

const Eu = new Estudiante("Kevin",1)
console.log(Eu.obtenDatos());