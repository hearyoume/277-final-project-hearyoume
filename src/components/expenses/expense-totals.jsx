import { formatCurrency } from "../../utils/format-currency";

export default function ExpenseTotals({ expenses }) {
  // Calculate total for all expenses
  const totalAll = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  // Calculate total for one-time expenses
  const totalOneTime = expenses
    .filter((expense) => expense.recurring === "one-time")
    .reduce((sum, expense) => sum + expense.amount, 0);

  // Calculate total for monthly expenses
  const totalMonthly = expenses
    .filter((expense) => expense.recurring === "monthly")
    .reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-blue-50 p-4 rounded-md border border-blue-200 w-full text-center break-words">
        <p className="text-sm font-medium text-gray-600">All Expenses</p>
        <p className="text-2xl font-bold text-blue-600">
          {formatCurrency(totalAll)}
        </p>
      </div>
      <div className="bg-green-50 p-4 rounded-md border border-green-200 w-full text-center break-words">
        <p className="text-sm font-medium text-gray-600">One-time</p>
        <p className="text-2xl font-bold text-green-600">
          {formatCurrency(totalOneTime)}
        </p>
      </div>
      <div className="bg-orange-50 p-4 rounded-md border border-orange-200 w-full text-center break-words">
        <p className="text-sm font-medium text-gray-600">Monthly</p>
        <p className="text-2xl font-bold text-orange-600">
          {formatCurrency(totalMonthly)}
        </p>
      </div>
    </div>
  );
}
