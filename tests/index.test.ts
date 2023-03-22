import { Piso, Ascensor } from '../src/index';

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

describe('testing index file', () => {
  test('subir al piso 3', () => {
    ascensor1.ira(piso1);
    
    expect(ascensor1.mostrarhistorial()).toEqual( ["Planta Baja", "Piso 1"] );
    expect(ascensor1.mostrarpisoactual()).toEqual( "Piso 1" );
  });
});

describe('testing index file', () => {
  test('subir al piso 5', () => {
    ascensor2.ira(piso5);
    
    expect(ascensor2.mostrarhistorial()).toEqual( ["Planta Baja","Piso 1","Piso 2","Piso 3","Piso 4","Piso 5"] );
    expect(ascensor2.mostrarpisoactual()).toEqual( "Piso 5" );
  });
});

describe('testing index file', () => {
  test('piso 3 -> piso3 -> piso2 -> piso2', () => {
    ascensor3.ira(piso3);
    ascensor3.ira(piso3);
    ascensor3.ira(piso2);
    ascensor3.ira(piso2);
    
    expect(ascensor3.mostrarhistorial()).toEqual( ["Planta Baja","Piso 1","Piso 2","Piso 3","Piso 2"] );
    expect(ascensor3.mostrarpisoactual()).toEqual( "Piso 2" );
  });
});

describe('testing index file', () => {
  test('piso 5 -> piso4', () => {
    ascensor4.ira(piso5);
    ascensor4.ira(piso4);
    
    expect(ascensor4.mostrarhistorial()).toEqual( ["Planta Baja","Piso 1","Piso 2","Piso 3","Piso 4","Piso 5", "Piso 4"] );
    expect(ascensor4.mostrarpisoactual()).toEqual( "Piso 4" );
  });
});

