import React, { ChangeEvent, FC } from "react";
import { InputSelectYear } from "./styles";

interface SelectYearProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectYear: FC<SelectYearProps> = ({ value, onChange }) => {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let i = currentYear; i <= currentYear + 20; i++) {
    years.push(i);
  }

  return (
    <InputSelectYear value={value || ""} onChange={onChange}>
      {years.map((year) => (
        <option key={year} value={year || ""}>
          {year}
        </option>
      ))}
    </InputSelectYear>
  );
};

export default SelectYear;
