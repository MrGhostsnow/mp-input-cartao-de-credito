import React, { useContext } from "react";
import {
  ContainerCreditCard,
  ContainerCreditCardFront,
  CreditCardFront,
  CardNumber,
  CardInfos,
  CardHolder,
  CardExpireDate,
} from "./styles";
import Image from "next/image";
import creditcard from "../../assets/credit-card.png";
import { InputContext } from "@/app/services/InputContext"; // Ajuste o caminho de importação conforme necessário
import formatInput from "../../utils/formatInput";

const CreditCard: React.FC = () => {
  const { cardNumber, cardName, cardExpireDate } = useContext(InputContext);

  return (
    <ContainerCreditCard>
      <ContainerCreditCardFront>
        <Image src={creditcard} alt="credit card" />
        <CreditCardFront>
          <CardNumber>{cardNumber}</CardNumber>
          <CardInfos>
            <CardHolder>
              <p>CardHolder</p>
              <p>{formatInput(cardName)}</p>
            </CardHolder>
            <CardExpireDate>
              <p>Expires</p>
              <p>{cardExpireDate}</p>
            </CardExpireDate>
          </CardInfos>
        </CreditCardFront>
      </ContainerCreditCardFront>
    </ContainerCreditCard>
  );
};

export default CreditCard;
