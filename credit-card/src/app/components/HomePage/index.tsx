"use client";
import React from "react";
import { ContainerHomePage } from "./styles";
import CreditCard from "../CreditCard";

const HomePage: React.FC = () => {
  return (
    <ContainerHomePage>
      <CreditCard />
    </ContainerHomePage>
  );
};

export default HomePage;
