import { formatCurrency } from "../../utils/format-currency";

export default function ExpenseItem({ expense, handleDeleteExpense }) {
  // Renders individual expense details
  return (
    <li>
      {expense.place}: {formatCurrency(expense.amount)} ({expense.recurring})
      {/* Delete button */}
      <button
        onClick={() => handleDeleteExpense(expense.id)}
        className="ml-4 min-w-[100px] px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
}
