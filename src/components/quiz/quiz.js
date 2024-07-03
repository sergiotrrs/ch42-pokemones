
// Calcular la cantidad de letras que hay
const cadena = "parangaricutirimicuaro";


const cantidadDeLetras = ( charToFind , phrase ) => {
    const chars = phrase.toLowerCase().split("");
    const lowerCaseCharToFind = charToFind.toLowerCase();
    const foundChars = chars.filter( char => char === lowerCaseCharToFind );
    return foundChars.length;
} 

// exportacion nombrada
 export { cadena };

// exportación por default
export default cantidadDeLetras;


