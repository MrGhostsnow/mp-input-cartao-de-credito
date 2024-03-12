import { createContext, useContext, ReactNode, useState } from "react";

interface InputContextProviderProps {
  children: ReactNode;
}

interface InputContextData {
  cardNumber: string;
  setCardNumber: (value: string) => void;
  cardName: string;
  setCardName: (value: string) => void;
  cardExpireDate: string;
  setCardExpireDate: (value: string) => void;
  cardCVC: string;
  setCardCVC: (value: string) => void;
}

export const InputContext = createContext({} as InputContextData);

export const InputContextProvider = ({
  children,
}: InputContextProviderProps) => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardName, setCardName] = useState<string>("");
  const [cardExpireDate, setCardExpireDate] = useState<string>("");
  const [cardCVC, setCardCVC] = useState<string>("");

  return (
    <InputContext.Provider
      value={{
        cardNumber,
        setCardNumber,
        cardName,
        setCardName,
        cardExpireDate,
        setCardExpireDate,
        cardCVC,
        setCardCVC,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};

export const useInputContext = (): InputContextData => {
  return useContext(InputContext);
};
