export default function ExpenseItem({ expense }) {
  return (
    <div>
      <h3>{expense.place}</h3>
      <p>Amount: ${expense.amount}</p>
      <p>Category: {expense.category}</p>
      <p>Recurrence: {expense.recurring}</p>
    </div>
  );
}
