import React, { useEffect, useMemo, useState } from "react";
import DateSelect from "../../components/DateSelect";
import Navbar from "../../components/Navbar";
import { useGlobal } from "../../store/useGlobal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faSave } from "@fortawesome/free-solid-svg-icons";

import "./MarketList.css";
import Input from "../../components/Input";
import { maskMoney, onlyNumbers } from "../../utils";

function MarketList() {
  const { getMarketList, marketList, saveMarketlist } = useGlobal();
  const [dateSelected, setDateSelected] = useState({ year: "", month: "" });
  const [listShow, setListShow] = useState({
    total: 0,
    list: [],
  });
  const [valuesForm, setValuesForm] = useState({
    name: "",
    value: "",
    amount: "",
  });

  const [loading, setLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const getList = async () => {
      await getMarketList();
      setDateSelected({ month, year });
    };
    getList();
  }, []);

  useEffect(() => {
    const values = marketList.find(
      ({ month, year }) =>
        String(month) === String(dateSelected.month) &&
        String(year) === String(dateSelected.year)
    );

    if (!values) {
      setListShow({ ...dateSelected, list: [], total: 0 });
    } else {
      setListShow(values);
    }
  }, [dateSelected]);

  useMemo(() => {
    const total = listShow.list
      ? listShow.list.reduce((sum, i) => {
          return (sum += i.value * i.amount);
        }, 0)
      : 0;
    setTotal(total);
  }, [listShow]);

  const change = (event) => {
    if (event.target.name === "value") {
      setValuesForm((v) => ({
        ...v,
        [event.target.name]: maskMoney(event.target.value),
      }));
    } else if (event.target.name === "amount") {
      setValuesForm((v) => ({
        ...v,
        [event.target.name]: event.target.value.replace(/[^0-9]/g, ""),
      }));
    } else {
      setValuesForm((v) => ({
        ...v,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const changeItem = (event) => {
    setListShow((values) => ({
      ...values,
      list: values.list.map((item, i) => ({
        ...item,
        checked: event.target.name === String(i) ? !item.checked : item.checked,
      })),
    }));
  };

  const removeItem = () => {
    setListShow((values) => ({
      ...values,
      list: values.list.filter((item) => !item.checked),
    }));
    if (isSaved) setIsSaved(false);
  };

  const addItem = (event) => {
    event.preventDefault();

    let newList = { ...listShow };
    newList.list.push({
      name: valuesForm.name,
      value: onlyNumbers(valuesForm.value),
      amount: onlyNumbers(valuesForm.amount),
    });
    setValuesForm({
      name: "",
      value: "",
      amount: "",
    });
    setListShow(newList);
    if (isSaved) setIsSaved(false);
  };

  const sendList = async (event) => {
    setLoading(true);
    setIsSaved(!isSaved);
    await saveMarketlist({
      ...dateSelected,
      total,
      list: listShow.list.map((i) => ({
        name: i.name,
        value: i.value,
        amount: i.amount,
      })),
    });
    setLoading(false);
    setIsSaved(true);
  };

  return (
    <>
      <Navbar />
      <div className="contentTab">
        <div className="list">
          <div>
            <div className="inputs-settings">
              <form onSubmit={addItem}>
                <button type="button" className="remove" onClick={removeItem}>
                  <FontAwesomeIcon icon={faTrash} color="#202020" />
                </button>
                <Input
                  type="text"
                  name="name"
                  label="Nome"
                  placeholder="Item1"
                  change={change}
                  state={valuesForm.name}
                  classInput="itens"
                />
                <Input
                  type="text"
                  name="value"
                  label="Valor"
                  placeholder="R$ 1,00"
                  change={change}
                  state={valuesForm.value}
                  classInput="itens"
                />
                <Input
                  type="text"
                  name="amount"
                  label="Quantidade"
                  placeholder="2"
                  change={change}
                  state={valuesForm.amount}
                  classInput="itens"
                />

                <div className="wrapper-button">
                  <button type="submit" className="add">
                    <FontAwesomeIcon icon={faPlus} color="#fff" />
                  </button>
                </div>
                <div className="wrapper-button">
                  <button
                    type="button"
                    className={`button ${loading ? "loading" : ""}`}
                    onClick={sendList}
                  >
                    {!loading && <FontAwesomeIcon icon={faSave} color="#fff" />}
                  </button>
                </div>
              </form>

              <div className="select-date">
                <DateSelect
                  setDateSelected={setDateSelected}
                  dateSelected={dateSelected}
                />
              </div>
            </div>
            <div className="space-body"></div>
            <div className="list-market">
              <p className={!isSaved ? "show" : ""}>
                Alterações não foram salvas
              </p>
              <ul>
                {listShow.list &&
                  listShow.list.map((item, i) => (
                    <li className={() => {}} key={i}>
                      <input
                        type="checkbox"
                        name={i}
                        value={i}
                        checked={item.checked}
                        onChange={changeItem}
                      />
                      <div>
                        <span>{item.name}</span>
                      </div>
                      <div>
                        <span>{maskMoney(item.value)}</span>
                      </div>
                      <div>
                        <span>{item.amount}</span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div>
            <table className="sum">
              <thead>
                <th>Total</th>
              </thead>
              <tbody>
                <td>{maskMoney(total)}</td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketList;
