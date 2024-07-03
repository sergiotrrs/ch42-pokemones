// Importación de una función exportada por default
import cantidadDeLetras, { cadena } from '../../../src/components/quiz/quiz.js'
// Importación de una exportación nombrada
import { cadena as phrase } from '../../../src/components/quiz/quiz.js'

// test( "Descripción", ()=> );
test( "Verificar la cantidad de letras en una palabra", ()=>{
    expect( cantidadDeLetras("i", phrase ) ).toBe( 4 );
    expect( cantidadDeLetras("a", phrase ) ).toBe( 4 );
    expect( cantidadDeLetras("e", phrase ) ).toBe( 0 );
});

test( "Verificar la cantidad de letras en una frase con Mayúsculas", ()=>{
    const phraseWithMayus = "Miguel Está Muy Grande pero muy hermoso";
    expect( cantidadDeLetras("m", phraseWithMayus).toBe( 4 ) );
});