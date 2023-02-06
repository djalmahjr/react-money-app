import React, { useMemo, useState } from "react";
import { useGlobal } from "../../store/useGlobal";

const Display = () => {
  const [stateSumDebit, setStateSumDebit] = useState(0);
  const [stateSumCredit, setStateSumCredit] = useState(0);
  const { editBalanceMonth } = useGlobal();

  useMemo(() => {
    const sumDebits =
      editBalanceMonth.debits &&
      editBalanceMonth.debits.reduce(
        (sum, debit) => (sum += Number(debit.total)),
        0
      );
    setStateSumDebit(sumDebits);

    let countValues = { ...editBalanceMonth };

    delete countValues.debits;
    delete countValues.description;
    delete countValues.total;
    delete countValues.month;
    delete countValues.year;

    countValues = Object.keys(countValues).reduce(
      (count, key) => (count += Number(countValues[key])),
      0
    );
    setStateSumCredit(countValues);
  }, [editBalanceMonth]);

  return (
    <div className="column">
      <h2>Consolidação do mês</h2>
      <div className="display">
        <table>
          <thead>
            <tr>
              <th>Total débitos</th>
              <th>Total credito</th>
              <th>Restante salario</th>
              <th>Disponivel para gastar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>
                  R$
                  {stateSumDebit}
                </span>
              </td>
              <td>
                <span>
                  R$
                  {stateSumCredit}
                </span>
              </td>
              <td>
                <span>
                  R$
                  {editBalanceMonth.salary &&
                    editBalanceMonth.salary - stateSumDebit}
                </span>
              </td>
              <td>
                <span>R${stateSumCredit - stateSumDebit}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Display;
