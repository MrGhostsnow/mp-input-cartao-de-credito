import React, { useContext, useState } from "react";
import {
  ContainerExpireCardDate,
  InputCardExpireDateMonth,
  InputCardExpireDateYear,
} from "./styles";
import { InputContext } from "@/app/services/InputContext";
import SelectYear from "../SelectYear.tsx";
import formatCardYear from "@/app/utils/formatCardYear";

const MonthYearInput: React.FC = () => {
  const { cardExpireDate, setCardExpireDate } = useContext(InputContext);
  const [month, setMonth] = useState<string>(cardExpireDate.split("/")[0]);
  const [year, setYear] = useState<string>(cardExpireDate.split("/")[1] || "");

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(event.target.value);
    setCardExpireDate(`${event.target.value}/${year}`);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(event.target.value);
    setCardExpireDate(`${month}/${formatCardYear(event.target.value)}`);
  };

  return (
    <ContainerExpireCardDate>
      <InputCardExpireDateMonth
        id="month"
        value={month}
        onChange={handleMonthChange}
        required
      >
        <option value="">mm</option>
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </InputCardExpireDateMonth>
      <SelectYear value={year || ""} onChange={handleYearChange} />
    </ContainerExpireCardDate>
  );
};

export default MonthYearInput;
