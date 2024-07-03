
// Calcular la cantidad de letras que hay
const cadena = "parangaricutirimicuaro";


const cantidadDeLetras = ( letra, frase ) => {
    let letrasEncontradas = 0;
    const letraEnMinuscula = letra.toLowerCase();
    const fraseEnMinuscula = frase.toLowerCase();

    for(let i=0; i < fraseEnMinuscula.length; i++  ){
        if( letraEnMinuscula === fraseEnMinuscula[i] ) {  // letra === frase.charAt( i )
           letrasEncontradas++; // letrasEncontradas = letrasEncontradas + 1; 
        }
    }

    return letrasEncontradas;
} 



// exportacion nombrada
 export { cadena };

// exportación por default
export default cantidadDeLetras;


