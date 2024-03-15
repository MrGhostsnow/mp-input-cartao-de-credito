import React, { useContext, useState } from "react";
import {
  ContainerCreditCard,
  ContainerCreditCardFront,
  FlipContainer,
  Flipper,
  FrontImage,
  BackImage,
  CreditCardFront,
  CardNumber,
  CardInfos,
  CardHolder,
  CardExpireDate,
  CreditCardBack,
  CardCVC,
} from "./styles";
import Image from "next/image";
import front_card from "../../assets/front-card.png";
import back_card from "../../assets/credit-card-back.png";
import { InputContext } from "@/app/services/InputContext";
import formatInput from "../../utils/formatInput";

const CreditCard: React.FC = () => {
  const {
    cardNumber,
    cardName,
    cardExpireDate,
    cardCVC,
    isFlipped,
    setIsFlipped,
  } = useContext(InputContext);

  const handleFlip = () => {
    setIsFlipped(true);
  };

  return (
    <ContainerCreditCard>
      <ContainerCreditCardFront>
        <FlipContainer>
          <Flipper isFlipped={isFlipped}>
            <FrontImage>
              <Image src={front_card} alt="credit card" />
            </FrontImage>
            <BackImage>
              <Image src={back_card} alt="credit card" />
            </BackImage>
          </Flipper>
        </FlipContainer>
        {!isFlipped ? (
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
        ) : (
          <CreditCardBack>
            <CardCVC>{cardCVC}</CardCVC>
          </CreditCardBack>
        )}
      </ContainerCreditCardFront>
    </ContainerCreditCard>
  );
};

export default CreditCard;
