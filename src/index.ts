export class Piso{
    nombre: string;
    pisoanterior: Piso;
    pisosiguiente: Piso;
    constructor(nom: string){
        this.nombre = nom;
    }
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
        var listasubir: Array<string> = [];
        var listabajar: Array<string> = [];
        this.subir(pisoelegido, listasubir, this.pisoactual);
        this.bajar(pisoelegido, listabajar, this.pisoactual);
        console.log(listasubir);
        console.log(listabajar);
        this.historial = this.historial.concat(listasubir);
        this.historial = this.historial.concat(listabajar);
        this.pisoactual = pisoelegido;
    }
    subir(destino: Piso, lista: Array<string>, estepiso:Piso){
        lista.push(estepiso.nombre);
        if (estepiso != destino){
            try{
                return this.subir(destino, lista, estepiso.pisosiguiente)
            }
            catch{
                lista.length = 0;
            }
        }
        else{
            lista.shift();
        }
    }
    bajar(destino: Piso, lista: Array<string>, estepiso:Piso){
        lista.push(estepiso.nombre);
        if (estepiso != destino){
            try{
                return this.bajar(destino, lista, estepiso.pisoanterior)
            }
            catch{
                lista.length = 0;
            }
        }
        else{
            lista.shift();
        }
    }
    constructor(pisocomienzo: Piso){
        this.pisoactual = pisocomienzo;
        this.historial = [pisocomienzo.nombre]
    }
}
