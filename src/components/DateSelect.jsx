import React from "react";

function DateSelect({ dateSelected, setDateSelected }) {
  const initYears = new Date("01-01-1990").getFullYear();
  const finalYears = new Date().getFullYear();
  const years = Array.from(
    new Array(finalYears - initYears + 2),
    (val, index) => index + initYears
  ).reverse();
  const monthToText = {
    1: "Janeiro",
    2: "Fevereiro",
    3: "Março",
    4: "Abril",
    5: "Maio",
    6: "Junho",
    7: "Julho",
    8: "Agosto",
    9: "Setembro",
    10: "Outubro",
    11: "Novembro",
    12: "Dezembro",
  };
  const selectDate = (event) => {
    const nameField = event.target.name;
    const value = event.target.value;

    setDateSelected({ ...dateSelected, [nameField]: value });
  };
  return (
    <>
      <select
        name="month"
        value={dateSelected.month}
        onChange={(event) => selectDate(event)}
      >
        {Object.keys(monthToText).map((month) => (
          <option key={month} value={month}>
            {monthToText[month]}
          </option>
        ))}
      </select>
      <select
        name="year"
        value={dateSelected.year}
        onChange={(event) => selectDate(event)}
      >
        {Object.keys(years).map((year) => (
          <option key={year} value={years[year]}>
            {years[year]}
          </option>
        ))}
      </select>
    </>
  );
}

export default DateSelect;
