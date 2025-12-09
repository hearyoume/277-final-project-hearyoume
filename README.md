# 💰 Budget Tracker App

A simple, maintainable React application for tracking personal expenses. Users can add expenses with details like amount, place, category, and recurrence type, then view summaries by category or filter by recurrence. Data is persisted in localeStorage so expenses remain across sessions.

## 🚀 Features

- Add Expenses: Enter amount, place, category, and recurrence (one-time or monthly) in the BudgetForm.

- Persistent Storage: Expenses are saved in `localStorage through the useExpenses custom hook.

- Delete Expenses: Each expense has a delete button to remove it from the list.

- Filter Controls: Radio buttons allow filtering by all, one-time, or monthly expenses.

- Category Summary: Totals are grouped by category using the reduce method.

- Validation: Gentle, immediate feedback for invalid inputs (via validators.js).

- Currency Formatting: Amounts are displayed with proper currency formatting (format-currency.js).

- Test Coverage: Validation logic is tested with validator.test.js.

## Implementation Highlights

- Custom Hook (useExpense)- Centralizes all state including, expenses, form inputs, filter selection, and validation flags. It also exposes addExpense and deleteExpense for expense handling.

- Parent Component (app.jsx)- Puts BudgetForm, FilterControls, ExpenseList, and CategorySummary together in working order, passing state and handlers down with props.

- Expense Flow

1. User fills out the BudgetForm and clicks Add Expense.
2. Expense object (with unique id) is added via addExpense.
3. ExpenseList maps over filtered expenses and renders each ExpenseItem.
4. Clicking Delete calls deleteExpense(id) to remove it.
5. CategorySummary calculates totals by category.

## Utilities

- format-currency.js: Ensures amounts are displayed consistently.
- validators.js: Provides reusable validation logic.
- validator.test.js: Confirms validation rules behave as expected.

## Styling with Tailwind CSS

Tailwind is used to style this App. Components are styled quickly without leaving JSX. It is consistent and responsive.
