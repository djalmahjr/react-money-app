import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import Display from "./Display";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useGlobal } from "../../store/useGlobal";
import DateSelect from "../../components/DateSelect";

const FormPay = () => {
  const { balances, saveBalance, getBalances, setEditBalanceMonth } =
    useGlobal();
  const [dateSelected, setDateSelected] = useState({ year: "", month: "" });
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const fetchData = async () => {
      await getBalances();
      setDateSelected({ month, year });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const values = balances.find(
      ({ month, year }) =>
        String(month) === String(dateSelected.month) &&
        String(year) === String(dateSelected.year)
    );

    if (!values) {
      setFormValues({
        salary: "",
        help: "",
        loan: "",
        save: "",
        debits: [],
        description: "",
        total: "",
      });
    } else {
      setFormValues({
        salary: values.credit.salary,
        help: values.credit.help,
        loan: values.credit.loan,
        save: values.credit.save,
        debits: values.debit,
        description: "",
        total: "",
      });
    }
  }, [dateSelected]);

  useEffect(() => {
    setEditBalanceMonth({ ...formValues, ...dateSelected });
  }, [formValues]);

  function change(event) {
    setFormValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  }

  function addDebit() {
    setFormValues((values) => ({
      ...values,
      description: "",
      total: "",
      debits: [
        ...values.debits,
        { description: formValues.description, total: formValues.total },
      ],
    }));
  }
  function excludeDebit(indentifier) {
    setFormValues((values) => ({
      ...values,
      description: "",
      total: "",
      debits: values.debits.filter(
        (debit) => debit.description !== indentifier
      ),
    }));
  }
  return (
    <div className="balanceMonth">
      <div className="month">
        <h1>Balanço do Mês</h1>
        <div>
          <DateSelect
            setDateSelected={setDateSelected}
            dateSelected={dateSelected}
          />
        </div>
      </div>
      <div className="row">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            saveBalance({
              salary: formValues.salary,
              loan: formValues.loan,
              help: formValues.help,
              save: formValues.save,
              debits: formValues.debits,
              month: dateSelected.month,
              year: dateSelected.year,
            });
          }}
        >
          <div className="row form">
            <div className="column collectionInput">
              <h2>Saldo</h2>
              <Input
                type="number"
                name="salary"
                label="Salário:"
                change={change}
                state={formValues.salary}
                classInput="money"
              />
              <Input
                type="number"
                name="help"
                label="Ajuda:"
                change={change}
                state={formValues.help}
                classInput="money"
              />
              <Input
                type="number"
                name="loan"
                label="Empréstimo:"
                change={change}
                state={formValues.loan}
                classInput="money"
              />
              <Input
                type="number"
                name="save"
                label="Guardado:"
                change={change}
                state={formValues.save}
                classInput="money"
              />
            </div>
            <div className="column collectionInput">
              <h2>Contas</h2>
              <Input
                type="text"
                name="description"
                label="Descrição:"
                change={change}
                state={formValues.description}
                classInput="money"
              />
              <Input
                type="number"
                name="total"
                label="Total:"
                change={change}
                state={formValues.total}
                classInput="money"
              />
            </div>
          </div>

          <div className="sendButton">
            <button type="button" onClick={addDebit} className="include">
              Incluir <FontAwesomeIcon icon={faPlus} size="sm" />
            </button>
            <button type="submit">
              Salvar <FontAwesomeIcon icon={faFloppyDisk} size="sm" />
            </button>
          </div>
        </form>
        <div className="debits">
          <table>
            <thead>
              <th>Descrição</th>
              <th>Valor</th>
              <th></th>
            </thead>
            <tbody>
              {formValues.debits &&
                formValues.debits.map((debit) => {
                  return (
                    <tr>
                      <td>{debit.description}</td>
                      <td>R$ {debit.total}</td>
                      <td>
                        <button
                          type="button"
                          onClick={() => excludeDebit(debit.description)}
                        >
                          <FontAwesomeIcon icon={faTrash} color="#FF595E" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <Display />
    </div>
  );
};

export default FormPay;
