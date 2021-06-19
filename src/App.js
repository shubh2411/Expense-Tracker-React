import "./App.css";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import AddTransaction from "./Components/AddTransaction";
import TransactionList from "./Components/TransactionList";
import IncomeExpenses from "./Components/IncomeExpenses";
import React from "react";

import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
