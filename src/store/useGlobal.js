import axios from "axios";
import React, { useContext, createContext, useState } from "react";

export const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [balances, setBalance] = useState([]);
  const [marketList, setMarketList] = useState([]);
  const [editBalanceMonth, setEditBalanceMonth] = useState({});

  const getBalances = async () => {
    const { data } = await axios.get("http://localhost:3000/balance");
    setBalance(data);
  };
  const saveBalance = async ({
    year,
    month,
    salary,
    help,
    loan,
    save,
    debits,
  }) => {
    const existMonth = balances.find(
      (balance) =>
        String(balance.month) === String(month) &&
        String(balance.year) === String(year)
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
  };

  const getMarketList = async () => {
    const { data } = await axios.get("http://localhost:3000/marketList");
    setMarketList(data);
  };

  const saveMarketlist = async (values) => {
    const existMonth = marketList.find(
      (list) =>
        String(list.month) === String(values.month) &&
        String(list.year) === String(values.year)
    );

    if (!existMonth) {
      const { data } = await axios.post(
        "http://localhost:3000/marketList",
        values
      );
      await getMarketList();
      console.log(data);
    } else {
      const { data } = await axios.put(
        `http://localhost:3000/marketList/${existMonth.id}`,
        values
      );
      await getMarketList();
      console.log(data);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        balances,
        setBalance,
        getBalances,
        marketList,
        getMarketList,
        saveMarketlist,
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
