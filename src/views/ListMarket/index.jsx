import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

function App() {
  const [inputText, updateInput] = useState("");

  const handleChangeInput = (event) => {
    updateInput(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="contentTab">
        <form onSubmit={() => {}}>
          <input type="text" onChange={handleChangeInput} value={inputText} />
          <button type="button" onClick={() => {}}>
            Limpar
          </button>
          <button type="submit">Add</button>
          <ul>{}</ul>
          <br />
          <span>
            Tamanho da lista: <bold>{"sizeList"}</bold>
          </span>
        </form>
      </div>
    </>
  );
}

export default App;
