import React, { useState } from "react";
import {
  ContainerExpireCardDate,
  InputCardExpireDateMonth,
  InputCardExpireDateYear,
} from "./styles";

const MonthYearInput: React.FC = () => {
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
  };

  return (
    <ContainerExpireCardDate>
      <InputCardExpireDateMonth
        id="month"
        value={month}
        onChange={handleMonthChange}
      >
        <option value="">Selecione um mês</option>
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </InputCardExpireDateMonth>
      <InputCardExpireDateYear
        type="number"
        id="year"
        value={year}
        onChange={handleYearChange}
        min="1900"
        max="2099"
      />
    </ContainerExpireCardDate>
  );
};

export default MonthYearInput;
