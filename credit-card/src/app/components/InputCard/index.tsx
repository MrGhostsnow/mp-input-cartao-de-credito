import React, { useContext } from "react";
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
    cardExpireDate,
    setCardExpireDate,
    cardCVC,
    setCardCVC,
  } = useContext(InputContext);

  return (
    <ContainerInputCard>
      <TitleContainer>Digite os dados do seu cartão</TitleContainer>
      <InputForm>
        <p>Número do cartão</p>
        <InputCardNumber
          type={"text"}
          value={cardNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const formattedValue = formatCardNumber(e.target.value);
            setCardNumber(formattedValue);
          }}
        />
      </InputForm>
      <InputForm>
        <p>Nome impresso</p>
        <InputCardName
          type={"text"}
          value={cardName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const formattedValue = formatCardName(e.target.value);
            setCardName(formattedValue);
          }}
        />
      </InputForm>
      <InputForm>
        <p>Validade</p>
        <MonthYearInput />
      </InputForm>
      <InputForm>
        <p>CVC</p>
        <InputCardCVC
          type={"text"}
          value={cardCVC}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCardCVC(e.target.value)
          }
        />
      </InputForm>
    </ContainerInputCard>
  );
};

export default InputCard;
