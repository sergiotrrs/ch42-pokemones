import { domainName } from "../api/domainName";

const postRegisterForm = async ( registerFormData ) => {
  const url = `${domainName()}/api/v2/users`;

  const options = {
    method: "POST", // DELETE, PUT, POST, GET
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registerFormData),
  };

  const response = await fetch(url, options);

  if( response.status !== 201){
    const serverError = await response.json();
    throw serverError.message;
  }

  const registerResult = await response.json();
  console.log(registerResult);

  return registerResult;
};

export { postRegisterForm };
