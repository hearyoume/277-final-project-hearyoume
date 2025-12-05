import ExpenseItem from "./expense-item";

export default function ExpenseList({ expenses, handleDeleteExpense }) {
  // Renders a list of expenses
  if (expenses.length === 0)
    return <p className="text-gray-600">No expenses to display.</p>;

  return (
    <ul className="divide-y divide-gray-200 bg-white rounded-md shadow overflow-hidden">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          handleDeleteExpense={handleDeleteExpense}
        />
      ))}
    </ul>
  );
}
