import BudgetForm from "./components/budget-form";
import CategorySummary from "./components/category-summary";
import ExpenseList from "./components/expenses/expense-list";
import ExpenseTotals from "./components/expenses/expense-totals";
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
    categories,
    addCategory,
    deleteCategory,
    showNewCategory,
    setShowNewCategory,
    newCategoryName,
    setNewCategoryName,
  } = useExpense();

  // Handle adding a new expense
  const handleAddExpense = (expense) => {
    addExpense(expense);
  };

  // Handle adding a new category
  const handleAddNewCategory = () => {
    if (newCategoryName.trim()) {
      addCategory(newCategoryName.trim());
      setCategory(newCategoryName.trim());
      setNewCategoryName("");
      setShowNewCategory(false);
    }
  };

  // Handle deleting a category
  const handleDeleteCategory = () => {
    if (categories.length > 1) {
      deleteCategory(category);
      setCategory(categories.filter((cat) => cat !== category)[0]);
    }
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
    <div className="flex flex-col min-h-screen">
      <header className="bg-indigo-600 text-white py-6">
        <h1 className="text-2xl font-bold text-center">Budget Tracker</h1>
      </header>
      <main className="flex-1 flex items-center justify-center w-full">
        <div className="max-w-2xl w-full px-6 py-6 space-y-6">
          <section aria-labelledby="add-expense-heading" className="">
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
              categories={categories}
              showNewCategory={showNewCategory}
              setShowNewCategory={setShowNewCategory}
              newCategoryName={newCategoryName}
              setNewCategoryName={setNewCategoryName}
              handleAddNewCategory={handleAddNewCategory}
              handleDeleteCategory={handleDeleteCategory}
            />
          </section>

          <nav aria-label="Filters" className="">
            <FilterControls filter={filter} setFilter={setFilter} />
          </nav>

          <section aria-labelledby="expenses-heading" className="">
            <h2 id="expenses-heading" className="text-xl font-semibold mb-2">
              Expenses
            </h2>
            <ExpenseList
              expenses={filteredExpenses}
              handleDeleteExpense={handleDeleteExpense}
            />
            <ExpenseTotals expenses={expenses} />
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
        </div>
      </main>
    </div>
  );
}
