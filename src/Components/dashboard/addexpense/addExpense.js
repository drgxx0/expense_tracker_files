import React, { useState, useRef, useEffect } from "react";

import "./addExpense.css";

const AddExpense = ({
  logExpense,
  modalManage,
  handleError,
  error,
  total,
  currencySymbol,
  xpId
}) => {
  const [desc, setDesc] = useState("");
  const [sp, setSp] = useState("");

  const inputRef = useRef(null);

  useEffect(
    () => {
      inputRef.current.focus();
    },
    [inputRef]
  );

  const reset = () => {
    setDesc("");
    setSp("");
    inputRef.current.focus();
  };

  const handleAdded = () => {
    const numSp = parseFloat(sp);
    if (total === 0 || total < numSp) {
      handleError(true, "Please add funds");
      reset();
    } else if (sp.length && desc.length) {
      logExpense(desc, -numSp, xpId);
      handleError(false);
      reset();
      if (modalManage) {
        modalManage(false);
      } else {
        return null;
      }
    } else {
      handleError(true, "Please provide valid information and try again");
      reset();
    }
  };

  return (
    <div className="addexp">
      <h2>Add an expense</h2>
      <div className="form">
        <p>Description:</p>
        <input
          ref={inputRef}
          type="text"
          placeholder="Description"
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
        <p>Spend:</p>
        <input
          type="text"
          placeholder={currencySymbol}
          value={sp}
          onChange={e => setSp(e.target.value)}
        />
      </div>
      <div className="addBtn" onClick={handleAdded}>
        Add
      </div>
      {error.stat ? <p style={{ color: "red" }}>{error.message}</p> : null}
    </div>
  );
};

export default AddExpense;
