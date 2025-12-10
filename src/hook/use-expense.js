import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";

const DEFAULT_CATEGORIES = [
  "Groceries",
  "Eating Out",
  "Vacation",
  "Entertainment",
  "Utilities",
  "Toiletries",
  "Home Upkeep",
  "Mortgage",
  "Health",
  "Amazon",
  "Other",
];

export default function useExpense() {
  const [expenses, setExpenses] = useLocalStorage("expenses", []);
  const [categories, setCategories] = useLocalStorage(
    "categories",
    DEFAULT_CATEGORIES
  );
  const [filter, setFilter] = useState("all");
  const [amount, setAmount] = useState("");
  const [place, setPlace] = useState("");
  const [category, setCategory] = useState("Amazon");
  const [recurring, setRecurring] = useState("one-time");
  const [touchedAmount, setTouchedAmount] = useState(false);
  const [touchedPlace, setTouchedPlace] = useState(false);
  const [showNewCategory, setShowNewCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((e) => e.id !== id));
  };

  const addCategory = (newCategory) => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories((prevCategories) => [...prevCategories, newCategory]);
    }
  };

  const deleteCategory = (categoryToDelete) => {
    setCategories((prevCategories) =>
      prevCategories.filter((cat) => cat !== categoryToDelete)
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
    categories,
    addCategory,
    deleteCategory,
    showNewCategory,
    setShowNewCategory,
    newCategoryName,
    setNewCategoryName,
  };
}
