import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header_";
import { Balance } from "./components/Balance_";
import { IncomeExp } from "./components/IncomeExp";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  // 1. Initialize state from localStorage or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // 2. Effect to apply the theme to the HTML tag
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Save preference
  }, [theme]);

  // 3. Toggle Function
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <GlobalProvider>
      <div className="app-wrapper">
        {/* Toggle Button */}
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>

        <div className="container">
          <Header />
          <Balance />
          <IncomeExp />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
