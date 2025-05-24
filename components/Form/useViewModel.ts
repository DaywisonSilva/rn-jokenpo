import { useState } from "react";

const useViewModel = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const validateCode = (value: string) => {
    // Remove espaços em branco
    const cleanValue = value.replace(/\s/g, "");

    // Verifica se o valor está vazio
    if (!cleanValue) {
      setError("");
      return;
    }

    // Verifica se o valor contém apenas letras e números
    if (!/^[a-zA-Z0-9-]+$/.test(cleanValue)) {
      setError("O código deve conter apenas letras e números");
      return;
    }

    // Verifica o padrão xxxx-xxx-xxx apenas se o código estiver completo
    if (
      cleanValue.length === 12 &&
      !/^[a-zA-Z0-9]{4}-[a-zA-Z0-9]{3}-[a-zA-Z0-9]{3}$/.test(cleanValue)
    ) {
      setError("Código inválido");
      return;
    }

    setError("");
  };

  const handleCodeChange = (value: string) => {
    // Converte para maiúsculas, remove caracteres especiais, acentos e hífens existentes
    const normalizedValue = value
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/-/g, "");

    // Se o valor normalizado for maior que 10 caracteres, mantém o valor anterior
    if (normalizedValue.length > 10) {
      return;
    }

    // Formata o código com os hífens nas posições corretas
    let formattedValue = "";
    for (let i = 0; i < normalizedValue.length; i++) {
      if (i === 4 || i === 7) {
        formattedValue += "-";
      }
      formattedValue += normalizedValue[i];
    }

    setCode(formattedValue);
    validateCode(formattedValue);
  };

  return {
    code,
    error,
    setCode: handleCodeChange,
  };
};

export default useViewModel;
