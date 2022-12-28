import axios from "axios";
import React, { useContext, createContext, useState } from "react";

export const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [global, setGlobal] = useState([]);
  const [editBalanceMonth, setEditBalanceMonth] = useState({});
  async function getBalances() {
    const { data } = await axios.get("http://localhost:3000/balance");
    setGlobal(data);
  }
  async function saveBalance({
    year,
    month,
    salary,
    help,
    loan,
    save,
    debits,
  }) {
    const existMonth = global.find(
      (balance) => balance.month == month && balance.year == year
    );

    if (!existMonth) {
      const { data } = await axios.post("http://localhost:3000/balance", {
        year,
        month,
        credit: {
          salary,
          help,
          loan,
          save,
        },
        debit: debits,
      });
      await getBalances();
      console.log(data);
    } else {
      const { data } = await axios.put(
        `http://localhost:3000/balance/${existMonth.id}`,
        {
          year,
          month,
          credit: {
            salary,
            help,
            loan,
            save,
          },
          debit: debits,
        }
      );
      await getBalances();
      console.log(data);
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        global,
        setGlobal,
        getBalances,
        saveBalance,
        editBalanceMonth,
        setEditBalanceMonth,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobal() {
  return useContext(GlobalContext);
}

export { useGlobal, GlobalProvider };
