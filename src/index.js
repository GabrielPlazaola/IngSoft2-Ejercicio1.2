"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Pisonulo = exports.Pisofinal = exports.Ascensor = exports.Piso = void 0;
var Elemento = /** @class */ (function () {
    function Elemento(nom, fin) {
        this.nombre = nom;
        this.pfinal = fin;
    }
    Elemento.prototype.subir = function (lista, ascensor) {
        lista.push(this.nombre);
        return this.pisosiguiente.subir(lista, ascensor);
    };
    Elemento.prototype.bajar = function (lista, ascensor) {
        lista.push(this.nombre);
        return this.pisoanterior.bajar(lista, ascensor);
    };
    return Elemento;
}());
var Piso = /** @class */ (function (_super) {
    __extends(Piso, _super);
    function Piso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Piso;
}(Elemento));
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
        pisoelegido.pfinal.setobjetivo(pisoelegido);
        var listasubir = [];
        var listabajar = [];
        this.pisoactual.subir(listasubir, this);
        this.pisoactual.bajar(listabajar, this);
        this.historial = this.historial.concat(listasubir);
        this.historial = this.historial.concat(listabajar);
    };
    return Ascensor;
}());
exports.Ascensor = Ascensor;
var Pisofinal = /** @class */ (function (_super) {
    __extends(Pisofinal, _super);
    function Pisofinal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pisofinal.prototype.setobjetivo = function (pisoelegido) {
        this.pisoobjetivo = pisoelegido;
        this.pisoanterior = pisoelegido.pisoanterior;
        this.pisosiguiente = pisoelegido.pisosiguiente;
        pisoelegido.pisoanterior = this;
        pisoelegido.pisosiguiente = this;
    };
    Pisofinal.prototype.subir = function (lista, ascensor) {
        this.final(lista, ascensor);
    };
    Pisofinal.prototype.bajar = function (lista, ascensor) {
        this.final(lista, ascensor);
    };
    Pisofinal.prototype.final = function (lista, ascensor) {
        ascensor.pisoactual = this.pisoobjetivo;
        this.pisoobjetivo.pisoanterior = this.pisoanterior;
        this.pisoobjetivo.pisosiguiente = this.pisosiguiente;
        lista.shift();
    };
    return Pisofinal;
}(Elemento));
exports.Pisofinal = Pisofinal;
var Pisonulo = /** @class */ (function (_super) {
    __extends(Pisonulo, _super);
    function Pisonulo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pisonulo.prototype.subir = function (lista, ascensor) {
        this.anular(lista, ascensor);
    };
    Pisonulo.prototype.bajar = function (lista, ascensor) {
        this.anular(lista, ascensor);
    };
    Pisonulo.prototype.anular = function (lista, ascensor) {
        lista.length = 0;
        return lista;
    };
    return Pisonulo;
}(Elemento));
exports.Pisonulo = Pisonulo;
