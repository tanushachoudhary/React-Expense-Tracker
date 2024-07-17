import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header_";
import { Balance } from "./components/Balance_";
import { IncomeExp } from "./components/IncomeExp";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  const [count, setCount] = useState(0);

  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExp />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
