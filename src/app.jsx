/* eslint-disable use-encapsulation/prefer-custom-hooks */
import { useState } from "react";

import BudgetForm from "./components/BudgetForm";
import CategorySummary from "./components/CategorySummary";
import ExpenseList from "./components/expenses/ExpenseList";
import FilterControls from "./components/FilterControls";

export default function App() {
  // Main application component
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };
  // Filter expenses based on recurrence type
  const filteredExpenses = expenses.filter((expense) => {
    if (filter === "all") return true;
    return expense.recurring === filter;
  });

  return (
    <div>
      <h1>Budget Tracker</h1>
      <BudgetForm onAddExpense={handleAddExpense} />
      <FilterControls filter={filter} setFilter={setFilter} />
      <ExpenseList expenses={filteredExpenses} />
      <CategorySummary expenses={expenses} />
    </div>
  );
}
