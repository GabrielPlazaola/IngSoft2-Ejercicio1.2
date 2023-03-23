"use strict";
exports.__esModule = true;
exports.Ascensor = exports.Piso = void 0;
var Piso = /** @class */ (function () {
    function Piso(nom) {
        this.nombre = nom;
    }
    return Piso;
}());
exports.Piso = Piso;
var Ascensor = /** @class */ (function () {
    function Ascensor(pisocomienzo) {
        this.pisoactual = pisocomienzo;
        this.historial = [pisocomienzo.nombre];
    }
    Ascensor.prototype.mostrarpisoactual = function () {
        return this.pisoactual.nombre;
    };
    Ascensor.prototype.mostrarhistorial = function () {
        return this.historial;
    };
    Ascensor.prototype.borrarhistorial = function () {
        this.historial = [this.pisoactual.nombre];
    };
    Ascensor.prototype.ira = function (pisoelegido) {
        var listasubir = [];
        var listabajar = [];
        this.subir(pisoelegido, listasubir, this.pisoactual);
        this.bajar(pisoelegido, listabajar, this.pisoactual);
        console.log(listasubir);
        console.log(listabajar);
        this.historial = this.historial.concat(listasubir);
        this.historial = this.historial.concat(listabajar);
        this.pisoactual = pisoelegido;
    };
    Ascensor.prototype.subir = function (destino, lista, estepiso) {
        lista.push(estepiso.nombre);
        if (estepiso != destino) {
            try {
                return this.subir(destino, lista, estepiso.pisosiguiente);
            }
            catch (_a) {
                lista.length = 0;
            }
        }
        else {
            lista.shift();
        }
    };
    Ascensor.prototype.bajar = function (destino, lista, estepiso) {
        lista.push(estepiso.nombre);
        if (estepiso != destino) {
            try {
                return this.bajar(destino, lista, estepiso.pisosiguiente);
            }
            catch (_a) {
                lista.length = 0;
            }
        }
        else {
            lista.shift();
        }
    };
    return Ascensor;
}());
exports.Ascensor = Ascensor;
var plantabaja = new Piso("Planta Baja");
var piso1 = new Piso("Piso 1");
var piso2 = new Piso("Piso 2");
var piso3 = new Piso("Piso 3");
var piso4 = new Piso("Piso 4");
var piso5 = new Piso("Piso 5");
var ascensor1 = new Ascensor(plantabaja);
var ascensor2 = new Ascensor(plantabaja);
var ascensor3 = new Ascensor(plantabaja);
var ascensor4 = new Ascensor(plantabaja);
plantabaja.pisosiguiente = piso1;
piso1.pisoanterior = plantabaja;
piso1.pisosiguiente = piso2;
piso2.pisoanterior = piso1;
piso2.pisosiguiente = piso3;
piso3.pisoanterior = piso2;
piso3.pisosiguiente = piso4;
piso4.pisoanterior = piso3;
piso4.pisosiguiente = piso5;
piso5.pisoanterior = piso4;
ascensor1.ira(piso3);
console.log("hola");
