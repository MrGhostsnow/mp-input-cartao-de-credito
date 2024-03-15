"use client";
import React from "react";
import { ContainerHomePage } from "./styles";
import CreditCard from "../CreditCard";
import InputCard from "../InputCard";
import { InputContextProvider } from "@/app/services/InputContext";

const HomePage: React.FC = () => {
  return (
    <ContainerHomePage>
      <InputContextProvider>
        <CreditCard />
        <InputCard />
      </InputContextProvider>
    </ContainerHomePage>
  );
};

export default HomePage;
