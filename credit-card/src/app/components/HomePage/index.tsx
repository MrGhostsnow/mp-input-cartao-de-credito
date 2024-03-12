"use client";
import React from "react";
import { ContainerHomePage } from "./styles";
import CreditCard from "../CreditCard";
import InputCard from "../InputCard";

const HomePage: React.FC = () => {
  return (
    <ContainerHomePage>
      <CreditCard />
      <InputCard />
    </ContainerHomePage>
  );
};

export default HomePage;
