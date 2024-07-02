

const validateFullName = ( fullName ) => {
    let isValid = true;

    
    if( fullName.length <= 3){ // Longitud mínima
        isValid = false;
    } else if (  fullName.length >= 50){ // Longitud máxima
        isValid = false;
    }

    return isValid;
}

export { validateFullName };
