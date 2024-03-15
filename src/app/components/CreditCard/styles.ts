"use client"
import React, { useState } from 'react';
import styled from "styled-components";


export const ContainerCreditCard = styled.div`
    
`

export const ContainerCreditCardFront = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 300px;

    @media (max-width: 425px) {
        height: 200px;
    }
   
`

export const FlipContainer = styled.div`
    position: relative;
    width: 300px;
    height: 200px;
    perspective: 1000px;
`;

export const Flipper = styled.div<{ isFlipped: boolean }>`
    width: 100%;
    height: 100%;
    transition: transform 0.1s ease-in-out;
    transform-style: preserve-3d;
    position: relative;
    transform: ${props => props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

export const FrontImage = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
`;

export const BackImage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateY(180deg);
    backface-visibility: hidden;
`;

export const CreditCardFront = styled.div`
    position: relative;
    top: -6rem;
    left: 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80px;
    width: 290px;
    gap: 1.1rem;

    @media (max-width: 425px) {
        top: -4.5rem;
    }
`

export const CardInfos = styled.div`
    display: flex;
    width: 260px;
    height: 34px;
    justify-content: space-between;
    
`;

export const CardNumber = styled.p`
    
`;

export const CardHolder = styled.div`
    
    
`;

export const CardExpireDate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   
`;

export const CreditCardBack = styled.div`
    position: relative;
    top: -6rem;
    left: 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80px;
    width: 290px;
    gap: 1.1rem;
`;

export const CardCVC = styled.div`
   border: 1px solid #507FFA;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 62px;
   height: 34px;
   position: relative;
   right: -4.5rem;
   top: 0.5rem;
   border-radius: 6px;

   @media (max-width: 425px) {
    top: 3.5rem;
   }
`;