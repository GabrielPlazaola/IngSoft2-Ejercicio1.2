class Elemento{
    nombre: string;
    pisoanterior: Elemento;
    pisosiguiente: Elemento;
    pfinal: Pisofinal;
    subir(lista: Array<string>, ascensor:Ascensor){
        lista.push(this.nombre);
        return this.pisosiguiente.subir(lista, ascensor)
    }
    bajar(lista: Array<string>, ascensor:Ascensor){
        lista.push(this.nombre);
        return this.pisoanterior.bajar(lista, ascensor)
    }
    constructor(nom: string, fin: Pisofinal){
        this.nombre = nom;
        this.pfinal = fin;
    }
}

export class Piso extends Elemento{

}

export class Ascensor{
    pisoactual: Piso;
    historial: Array<string>;
    mostrarpisoactual(){
        return this.pisoactual.nombre;
    }
    mostrarhistorial(){
        return this.historial;
    }
    borrarhistorial(){
        this.historial = [this.pisoactual.nombre];
    }
    ira(pisoelegido: Piso){
        pisoelegido.pfinal.setobjetivo(pisoelegido);
        var listasubir: Array<string> = [];
        var listabajar: Array<string> = [];
        this.pisoactual.subir(listasubir, this);
        this.pisoactual.bajar(listabajar, this);
        this.historial = this.historial.concat(listasubir);
        this.historial = this.historial.concat(listabajar);
    }
    constructor(pisocomienzo: Piso){
        this.pisoactual = pisocomienzo;
        this.historial = [pisocomienzo.nombre]
    }
}

export class Pisofinal extends Elemento{
    pisoobjetivo: Piso;
    setobjetivo(pisoelegido: Piso){
        this.pisoobjetivo = pisoelegido;
        this.pisoanterior = pisoelegido.pisoanterior;
        this.pisosiguiente = pisoelegido.pisosiguiente;
        pisoelegido.pisoanterior = this;
        pisoelegido.pisosiguiente = this;
    }
    subir(lista: Array<string>, ascensor: Ascensor) {
        this.final(lista, ascensor);
    }
    bajar(lista: Array<string>, ascensor: Ascensor) {
        this.final(lista, ascensor);
    }
    final(lista: Array<string>, ascensor: Ascensor) {
        ascensor.pisoactual = this.pisoobjetivo;
        this.pisoobjetivo.pisoanterior = this.pisoanterior;
        this.pisoobjetivo.pisosiguiente = this.pisosiguiente;
        lista.shift();
    }
}

export class Pisonulo extends Elemento{
    subir(lista: Array<string>, ascensor: Ascensor) {
        this.anular(lista, ascensor);
    }
    bajar(lista: Array<string>, ascensor: Ascensor) {
        this.anular(lista, ascensor);
    }
    anular(lista: Array<string>, ascensor: Ascensor) {
        lista.length = 0;
        return lista;
    }
}
