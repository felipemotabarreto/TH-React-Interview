const createResult = (isValid, errorMessage) => ({
  isValid,
  errorMessage: isValid ? "" : errorMessage,
});

export const required = (value) => {
  return createResult(!!value, "Campo Obrigatório");
};

export const validEmail = (value) => {
  const createEmailResult = (isValid) => {
    return createResult(isValid, "Você deve informar um e-mail válido.");
  };

  const email = value.trim();
  const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //NOSONAR: Executa no front.

  return createEmailResult(!!regex.test(email));
};

export const minLength = () => {
  // TODO: implementar
};

export const validateFields = () => {
  // TODO: implementar
};
