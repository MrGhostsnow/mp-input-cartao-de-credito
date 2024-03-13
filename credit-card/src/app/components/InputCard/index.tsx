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
    cardCVC,
    setCardCVC,
    setIsFlipped,
  } = useContext(InputContext);

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
          }}
        />
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
