export default function ExpenseItem({ expense }) {
  // Renders individual expense details
  return (
    <li>
      {expense.place}: ${expense.amount.toFixed(2)} ({expense.recurring})
    </li>
  );
}
