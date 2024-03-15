import React, { useContext, useState } from "react";
import MonthYearInput from "../MonthYearInput";
import {
  ContainerInputCard,
  TitleContainer,
  InputForm,
  InputCardNumber,
  InputCardName,
  InputCardExpireDate,
  InputCardCVC,
} from "./styles";
import { InputContext } from "@/app/services/InputContext";
import formatCardNumber from "@/app/utils/formatCardNumber";
import formatCardName from "@/app/utils/formatCardName";

const InputCard: React.FC = () => {
  const {
    cardNumber,
    setCardNumber,
    cardName,
    setCardName,
    cardCVC,
    setCardCVC,
    setIsFlipped,
  } = useContext(InputContext);

  const [numberError, setNumberError] = useState(false);
  const [numberErrorMessage, setNumberErrorMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState("");

  const [cvcError, setCvcError] = useState(false);
  const [cvcErrorMessage, setCvcErrorMessage] = useState("");

  const [expireDateError, setExpireDateError] = useState(false);
  const [expireDateErrorMessage, setExpireDateErrorMessage] = useState("");

  return (
    <ContainerInputCard>
      <TitleContainer>Digite os dados do seu cartão</TitleContainer>
      <InputForm>
        <p>Número do cartão</p>
        <InputCardNumber
          onClick={() => setIsFlipped(false)}
          type={"text"}
          value={cardNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const formattedValue = formatCardNumber(e.target.value);
            setCardNumber(formattedValue);
            if (formattedValue.length === 16) {
              // Exemplo de validação
              setNumberError(false);
              setNumberErrorMessage("");
            } else {
              setNumberError(true);
              setNumberErrorMessage("O número do cartão deve ter 16 dígitos.");
            }
          }}
        />
        {numberError && <p style={{ color: "red" }}>{numberErrorMessage}</p>}
      </InputForm>
      <InputForm>
        <p>Nome impresso</p>
        <InputCardName
          onClick={() => setIsFlipped(false)}
          type={"text"}
          value={cardName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const formattedValue = formatCardName(e.target.value);
            setCardName(formattedValue);
            if (formattedValue.length > 0) {
              // Exemplo de validação
              setNameError(false);
              setNameErrorMessage("");
            } else {
              setNameError(true);
              setNameErrorMessage("O nome do titular do cartão é obrigatório.");
            }
          }}
        />
        {nameError && <p style={{ color: "red" }}>{nameErrorMessage}</p>}
      </InputForm>
      <InputForm>
        <p>Validade</p>
        <MonthYearInput />
      </InputForm>
      <InputForm>
        <p>CVC</p>
        <InputCardCVC
          onClick={() => setIsFlipped(true)}
          type={"text"}
          value={cardCVC}
          maxLength={3}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCardCVC(e.target.value)
          }
        />
      </InputForm>
    </ContainerInputCard>
  );
};

export default InputCard;
