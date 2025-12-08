import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";

export default function useExpense() {
  const [expenses, setExpenses] = useLocalStorage("expenses", []);
  const [filter, setFilter] = useState("all");
  const [amount, setAmount] = useState("");
  const [place, setPlace] = useState("");
  const [category, setCategory] = useState("Amazon");
  const [recurring, setRecurring] = useState("one-time");
  const [touchedAmount, setTouchedAmount] = useState(false);
  const [touchedPlace, setTouchedPlace] = useState(false);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const deleteExpense = (expense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((e) => e.id !== expense.id)
    );
  };

  return {
    expenses,
    filter,
    setFilter,
    amount,
    setAmount,
    place,
    setPlace,
    category,
    setCategory,
    recurring,
    setRecurring,
    addExpense,
    touchedAmount,
    setTouchedAmount,
    touchedPlace,
    setTouchedPlace,
    deleteExpense,
  };
}
