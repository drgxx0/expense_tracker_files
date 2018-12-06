import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import NavBar from "Components/dashboard/navbar/navbar";
import Modal from "Components/UI/modal/modal";
import AddExpense from "Components/dashboard/addexpense/addExpense";
import ExpenseLog from "Components/dashboard/expenseLog/expenseLog";
import Profile from "Components/dashboard/profile/profile";
import Chart from "Components/dashboard/chart/Chart";
import AddFund from "Components/dashboard/addfun/AddFun";
import ChangeCurrency from "Components/dashboard/changeCurrency/changeCurrency";
import Footer from "Components/footer/footer";

import * as uiActions from "store/actions/actionUI";
import * as xpActions from "../../store/actions/actionXP";

import "./dashboard.css";

const Dashboard = ({
  xp,
  modal,
  modalManage,
  modalRoute,
  total,
  logExpense,
  handleError,
  error,
  addFund,
  deleteLog,
  users,
  currency,
  handleCurrency,
  handleAuth
}) => {
  const [currencySymbol, setCurrencySymbol] = useState("$");

  useEffect(
    () => {
      if (total === 0) {
        modalManage(true, "addFund");
      }
    },
    [total]
  );

  const orderXp = xp.sort((a, b) => b.id - a.id);
  const mapXpLog = orderXp.map((info, i) => {
    return (
      <ExpenseLog
        xp={xp}
        currencySymbol={currencySymbol}
        deleteLog={deleteLog}
        date={xp[i].date}
        detail={xp[i].detail}
        sp={xp[i].sp}
        id={xp[i].id}
        key={i}
      />
    );
  });

  const changeCurrenciesSymbol = currency => {
    switch (currency) {
      case "EUR":
        setCurrencySymbol("€");
        break;
      case "PEN":
        setCurrencySymbol("S/.");
        break;
      case "USD":
        setCurrencySymbol("$");
        break;
      default:
        setCurrencySymbol("$");
    }
  };

  const jsx = (
    <div className="dashboard">
      <NavBar />
      <div className="phoneLogout" onClick={() => handleAuth(false)}>
        <p>Log out</p>
      </div>
      <div className="counter">
        <div className="text">
          {currencySymbol}
          {total.toFixed(2)}
        </div>
        <div className="countBt" onClick={() => modalManage(true, "expense")}>
          <i className="fas fa-plus" />
        </div>
        <div
          className="countBtGraph"
          onClick={() => modalManage(true, "graph")}
        >
          <i className="fas fa-chart-line" />
        </div>
        <div className="changeCurrency">
          <ChangeCurrency
            changeCurrenciesSymbol={changeCurrenciesSymbol}
            xp={xp}
            total={total}
            currency={currency}
            handleCurrency={handleCurrency}
          />
        </div>
      </div>
      <div className="profile">
        <Profile handleAuth={handleAuth} user={users} />
      </div>
      <div className="add">
        <AddExpense
          total={total}
          error={error}
          handleError={handleError}
          logExpense={logExpense}
          currencySymbol={currencySymbol}
        />
      </div>
      <div className="graph">
        <Chart xp={xp} />
      </div>
      <div className="log">
        {xp.length >= 1 ? (
          mapXpLog
        ) : (
          <p style={{ textAlign: "center" }}>
            You don't have any expense registered
          </p>
        )}
      </div>
      <Footer />
    </div>
  );

  return (
    <React.Fragment>
      {modal ? (
        <React.Fragment>
          <Modal modalManage={modalManage} handleError={handleError}>
            {modalRoute === "expense" ? (
              <AddExpense
                modalManage={modalManage}
                logExpense={logExpense}
                handleError={handleError}
                error={error}
                total={total}
                currencySymbol={currencySymbol}
                xpId={xp.id}
              />
            ) : modalRoute === "addFund" ? (
              <AddFund
                modalManage={modalManage}
                logExpense={logExpense}
                addFund={addFund}
                handleError={handleError}
                error={error}
                currencySymbol={currencySymbol}
              />
            ) : modalRoute === "graph" ? (
              <Chart xp={xp} />
            ) : null}
          </Modal>
          {jsx}
        </React.Fragment>
      ) : (
        jsx
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    modalRoute: state.ui.modalRoute,
    total: state.xp.total,
    error: state.ui.error,
    xp: state.xp.xp,
    currency: state.xp.currency,
    auth: state.auth.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    modalManage: (stat, route) => dispatch(uiActions.modalManage(stat, route)),
    logExpense: (desc, sp, id) => dispatch(xpActions.logExpense(desc, sp, id)),
    handleError: (stat, message) =>
      dispatch(uiActions.handleError(stat, message)),
    addFund: fund => dispatch(xpActions.addFund(fund)),
    deleteLog: (xp, id, sp) => dispatch(xpActions.deleteLog(xp, id, sp)),
    handleCurrency: (nowCu, nextCu, total, xp) =>
      dispatch(xpActions.handleCurrency(nowCu, nextCu, total, xp))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
