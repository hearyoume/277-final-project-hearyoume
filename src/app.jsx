import BudgetForm from "./components/budget-form";
import CategorySummary from "./components/category-summary";
import ExpenseList from "./components/expenses/expense-list";
import FilterControls from "./components/filter-controls";
import useExpense from "./hook/use-expense";

export default function App() {
  // Main application component
  const {
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
  } = useExpense();

  // Handle adding a new expense
  const handleAddExpense = (expense) => {
    addExpense(expense);
  };

  // Delete an expense by its ID
  const handleDeleteExpense = (expense) => {
    deleteExpense(expense);
  };

  // Filter expenses based on recurrence type
  const filteredExpenses = expenses.filter((expense) => {
    if (filter === "all") return true;
    return expense.recurring === filter;
  });

  return (
    <>
      <header className="bg-indigo-600 text-white py-6">
        <h1 className="text-2xl font-bold text-center">Budget Tracker</h1>
      </header>
      <main className="max-w-4xl mx-auto p-6 grid gap-6 md:grid-cols-3">
        <section
          aria-labelledby="add-expense-heading"
          className="md:col-span-2"
        >
          <h2 id="add-expense-heading" className="sr-only">
            Add Expense
          </h2>
          <BudgetForm
            amount={amount}
            setAmount={setAmount}
            place={place}
            setPlace={setPlace}
            category={category}
            setCategory={setCategory}
            recurring={recurring}
            setRecurring={setRecurring}
            onAddExpense={handleAddExpense}
            touchedAmount={touchedAmount}
            setTouchedAmount={setTouchedAmount}
            touchedPlace={touchedPlace}
            setTouchedPlace={setTouchedPlace}
          />
        </section>

        <nav aria-label="Filters" className="md:col-span-2">
          <FilterControls filter={filter} setFilter={setFilter} />
        </nav>

        <section aria-labelledby="expenses-heading" className="md:col-span-2">
          <h2 id="expenses-heading" className="text-xl font-semibold mb-2">
            Expenses
          </h2>
          <ExpenseList
            expenses={filteredExpenses}
            handleDeleteExpense={handleDeleteExpense}
          />
          <section
            aria-labelledby="summary-heading"
            className="mt-6 bg-gray-50 p-4 rounded-md shadow"
          >
            <h2 id="summary-heading" className="text-lg font-medium">
              Category Summary
            </h2>
            <CategorySummary expenses={expenses} />
          </section>
        </section>
      </main>
    </>
  );
}
