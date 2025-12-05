import { v4 as uuidv4 } from "uuid";

import { isValidAmount, isValidPlace } from "../utils/validators";

// BudgetForm component for adding a new expense
export default function BudgetForm({
  amount,
  setAmount,
  place,
  setPlace,
  category,
  setCategory,
  recurring,
  setRecurring,
  onAddExpense,
  touchedAmount,
  setTouchedAmount,
  touchedPlace,
  setTouchedPlace,
}) {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: uuidv4(), // always unique
      amount: parseFloat(amount),
      place,
      category,
      recurring,
    };
    onAddExpense(expense);

    // Clear form fields after submission
    setAmount("");
    setPlace("");
    setCategory("Amazon");
    setRecurring("one-time");
    setTouchedAmount(false);
    setTouchedPlace(false);
  };

  return (
    // Renders the budget form with validation feedback
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-md shadow space-y-4"
    >
      <div className="mb-2">
        <label htmlFor="amount-input">Amount:</label>
        <input
          id="amount-input"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          onBlur={() => setTouchedAmount(true)}
          className={getAmountClass(amount, touchedAmount)}
        />
        {getAmountMessage(amount, touchedAmount)}
      </div>

      <div className="mb-2">
        <label htmlFor="place-input">Where it was spent:</label>
        <input
          id="place-input"
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          onBlur={() => setTouchedPlace(true)}
          className={getPlaceClass(place, touchedPlace)}
        />
        {getPlaceMessage(place, touchedPlace)}
      </div>

      <div className="mb-2">
        <label
          htmlFor="category-select"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Category:
        </label>
        <select
          id="category-select"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded px-2 py-1"
        >
          <option value="Groceries">Groceries</option>
          <option value="Eating Out">Eating Out</option>
          <option value="Vacation">Vacation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Utilities">Utilities</option>
          <option value="Home Upkeep">Home Upkeep</option>
          <option value="Mortgage">Mortgage</option>
          <option value="Health">Health</option>
          <option value="Amazon">Amazon</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <fieldset className="mt-3 border-t pt-3">
        <legend className="text-sm font-medium mb-2">Recurrence</legend>
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <input
              id="recurring-monthly"
              type="radio"
              name="recurring"
              value="monthly"
              checked={recurring === "monthly"}
              onChange={(e) => setRecurring(e.target.value)}
              className="h-4 w-4"
            />
            <label htmlFor="recurring-monthly" className="ml-2 text-sm">
              Monthly
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="recurring-one-time"
              type="radio"
              name="recurring"
              value="one-time"
              checked={recurring === "one-time"}
              onChange={(e) => setRecurring(e.target.value)}
              className="h-4 w-4"
            />
            <label htmlFor="recurring-one-time" className="ml-2 text-sm">
              One-time
            </label>
          </div>
        </div>
      </fieldset>
      <button
        type="submit"
        disabled={!isValidAmount(amount) || !isValidPlace(place)}
        className={`mt-3 px-4 py-2 rounded ${
          !isValidAmount(amount) || !isValidPlace(place)
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 text-white"
        }`}
      >
        Add Expense
      </button>
    </form>
  );
}

// Helper to compute className
function getAmountClass(amount, touched) {
  if (isValidAmount(amount)) {
    return "w-full border border-green-600 rounded px-2 py-1";
  }
  if (!touched) {
    return "w-full border border-gray-300 rounded px-2 py-1";
  }
  return "w-full border border-red-600 rounded px-2 py-1";
}

// Helper to compute feedback message
function getAmountMessage(amount, touched) {
  if (!touched) {
    return <p className="text-gray-400 text-xs">Enter a positive number.</p>;
  }
  if (!isValidAmount(amount)) {
    return (
      <p className="text-red-500 text-sm">Amount must be greater than 0.</p>
    );
  }
  return null;
}

function getPlaceClass(place, touched) {
  if (isValidPlace(place)) {
    return "w-full border border-green-600 rounded px-2 py-1";
  }
  if (!touched) {
    return "w-full border border-gray-300 rounded px-2 py-1";
  }
  return "w-full border border-red-600 rounded px-2 py-1";
}

function getPlaceMessage(place, touched) {
  if (!touched) {
    return (
      <p className="text-gray-400 text-xs">Enter a place name (3–50 chars).</p>
    );
  }
  if (!isValidPlace(place)) {
    return (
      <p className="text-red-500 text-sm">
        Place must be between 3 and 50 characters.
      </p>
    );
  }
  return null;
}
