import ExpenseItem from "./expense-item";

export default function ExpenseList({ expenses }) {
  // Renders a list of expenses
  if (expenses.length === 0) return <p>No expenses to display.</p>;

  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
}
