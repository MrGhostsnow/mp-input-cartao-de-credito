import React from "react";
import {
  ContainerCreditCard,
  ContainerCreditCardFront,
  CreditCardFront,
  CardNumber,
  CardHolder,
  CardExpireDate,
} from "./styles";

import creditcard from "../../assets/credit-card.png";
import Image from "next/image";

const CreditCard: React.FC = () => {
  return (
    <ContainerCreditCard>
      <ContainerCreditCardFront>
        <Image src={creditcard} alt="credit card" />
        <CreditCardFront>
          <CardNumber>XXXX-XXXX-XXXX-XXXX</CardNumber>
          <CardHolder>
            <p>CardHolder</p>
            <p>XXXX-XXXX</p>
          </CardHolder>
          <CardExpireDate>
            <p>Expires</p>
            <p>XX/XX</p>
          </CardExpireDate>
        </CreditCardFront>
      </ContainerCreditCardFront>
    </ContainerCreditCard>
  );
};

export default CreditCard;
