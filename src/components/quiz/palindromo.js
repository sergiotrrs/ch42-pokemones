/**
 Palíndromo: palabra que se lee igual de izquierda a derecha
  y viceversa.

  Ejemplo: oso, Anita lava la tina
*/
const palindrome = ( phrase ) =>{
    if(phrase === "") return false;

    const lowerCasePhrase = phrase.toLowerCase();

    let phraseWithoutSpace = "";
    for(let i = 0; i < lowerCasePhrase.length; i++){
        if( lowerCasePhrase.charAt(i) !== " " ){
            phraseWithoutSpace += lowerCasePhrase.charAt(i); 
            // phraseWithoutSpace = phraseWithoutSpace + lowerCasePhrase.charAt(i)
        }
    }

    const reversePhrase = phraseWithoutSpace.split("").reverse().join("");

    return phraseWithoutSpace === reversePhrase;
}

export { palindrome };