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
  categories,
  showNewCategory,
  setShowNewCategory,
  newCategoryName,
  setNewCategoryName,
  handleAddNewCategory,
  handleDeleteCategory,
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
          htmlFor={showNewCategory ? "new-category-input" : "category-select"}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Category:
        </label>
        {!showNewCategory ? (
          <div className="flex flex-col sm:flex-row flex-wrap gap-2">
            <select
              id="category-select"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="flex-1 min-w-[150px] border border-gray-300 rounded px-2 py-1"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <div className="flex gap-2 w-auto">
              <button
                type="button"
                onClick={() => setShowNewCategory(true)}
                className="min-w-[100px] px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                + Add
              </button>
              {categories.length > 1 && (
                <button
                  type="button"
                  onClick={handleDeleteCategory}
                  className="min-w-[100px] px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  title="Delete current category"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <input
              id="new-category-input"
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="New category name"
              className="flex-1 border border-gray-300 rounded px-2 py-1"
              autoFocus
            />
            <button
              type="button"
              onClick={handleAddNewCategory}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => {
                setShowNewCategory(false);
                setNewCategoryName("");
              }}
              className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        )}
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
        className={`min-w-[100px] px-3 py-2 rounded ${
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
