import { validateFullName } from "./validateFullName.js";

const validateInputsForm = (formData) => {
  const results = {
    isValid: true,
    error: "",
  };

  if ( validateFullName(formData.fullName) == false ){
    results.isValid = false;
    results.error = "El nombre no está bien definido"
  }

  return results;
};

export { validateInputsForm };