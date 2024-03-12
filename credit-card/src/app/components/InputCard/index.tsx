import React from "react";
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

const InputCard: React.FC = () => {
  return (
    <ContainerInputCard>
      <TitleContainer>Digite os dados do seu cartão</TitleContainer>
      <InputForm>
        <p>Número do cartão</p>
        <InputCardNumber type={"text"} />
      </InputForm>
      <InputForm>
        <p>Nome impresso</p>
        <InputCardName type={"text"} />
      </InputForm>
      <InputForm>
        <p>Validade</p>
        <MonthYearInput />
      </InputForm>
      <InputForm>
        <p>CVC</p>
        <InputCardCVC type={"text"} />
      </InputForm>
    </ContainerInputCard>
  );
};

export default InputCard;
