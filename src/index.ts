export class Piso{
    nombre: string;
    pisoanterior: Piso;
    pisosiguiente: Piso;
    subir(destino: Piso, lista: Array<string>, ascensor:Ascensor){
        lista.push(this.nombre);
        if (this != destino){
            try{
                return this.pisosiguiente.subir(destino, lista, ascensor)
            }
            catch{
                lista.length = 0;
            }
        }
        else{
            lista.shift();
        }
    }
    bajar(destino: Piso, lista: Array<string>, ascensor:Ascensor){
        lista.push(this.nombre);
        if (this != destino){
            try{
                return this.pisoanterior.bajar(destino, lista, ascensor)
            }
            catch{
                lista.length = 0;
            }
        }
        else{
            lista.shift();
        }
    }
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
        this.pisoactual.subir(pisoelegido, listasubir, this);
        this.pisoactual.bajar(pisoelegido, listabajar, this);
        this.historial = this.historial.concat(listasubir);
        this.historial = this.historial.concat(listabajar);
        this.pisoactual = pisoelegido;
    }
    constructor(pisocomienzo: Piso){
        this.pisoactual = pisocomienzo;
        this.historial = [pisocomienzo.nombre]
    }
}
