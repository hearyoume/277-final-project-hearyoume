export default function CategorySummary({ category, expenses }) {
  // use reduce method to sum up total expenses in the category
  const categoryTotal = expenses.reduce(
    (currentExpense, nextExpense) => currentExpense + nextExpense.amount,
    0
  );

  return (
    <div>
      <h3>{category}</h3>
      <p>Total Spent: ${categoryTotal.toFixed(2)}</p>
    </div>
  );
}
