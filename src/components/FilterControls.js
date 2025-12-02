export default function FilterControls({ filter, setFilter }) {
  return (
    <div>
      <label>Filter by Recurrence:</label>
      <label>
        <input
          type="radio"
          value="all"
          checked={filter === "all"}
          onChange={(e) => setFilter(e.target.value)}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          value="one-time"
          checked={filter === "one-time"}
          onChange={(e) => setFilter(e.target.value)}
        />
        One-time
      </label>
      <label>
        <input
          type="radio"
          value="monthly"
          checked={filter === "monthly"}
          onChange={(e) => setFilter(e.target.value)}
        />
        Monthly
      </label>
    </div>
  );
}
