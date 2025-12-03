import useExpense from "../hook/use-expense";

export default function BudgetForm({ onAddExpense }) {
  const {
    amount,
    setAmount,
    place,
    setPlace,
    category,
    setCategory,
    recurring,
    setRecurring,
  } = useExpense();

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      amount,
      place,
      category,
      recurring,
    };
    onAddExpense(expense);
    setAmount("");
    setPlace("");
    setCategory("Food");
    setRecurring("one-time");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Where it was spent:</label>
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
      </div>
      <div>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Groceries">Groceries</option>
          <option value="Eating Out">Eating Out</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Utilities">Utilities</option>
          <option value="Health">Health</option>
          <option value="Amazon">Amazon</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="monthly"
            checked={recurring === "monthly"}
            onChange={(e) => setRecurring(e.target.value)}
          />
          Monthly
        </label>
        <label>
          <input
            type="radio"
            value="one-time"
            checked={recurring === "one-time"}
            onChange={(e) => setRecurring(e.target.value)}
          />
          One-time
        </label>
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}
