const postContactForm = async ( contactFormData ) => {
  const url = "https://reqres.in/api/users";

  const options = {
    method: "POST", // DELETE, PUT, POST, GET
    header: { "Content-Type": "application/json" },
    body: JSON.stringify(contactFormData),
  };

  const response = await fetch(url, options);

  if( response.status !== 201){
    throw "Problemas con el registro";
  }

  const contactResult = await response.json();
  console.log(contactResult);

  return contactResult;
};

export { postContactForm };
