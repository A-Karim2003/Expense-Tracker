function CategoryFilter({ filterOption, setFilterOption }) {
  return (
    <select
      className="border py-2 px-4 rounded-lg border-slate-500"
      onChange={(e) => setFilterOption(e.target.value)}
      value={filterOption}
    >
      <option value="all">All</option>
      <option value="food">Food</option>
      <option value="travel">Travel</option>
      <option value="bills">Bills</option>
      <option value="housing">Housing</option>
      <option value="other">Other</option>
    </select>
  );
}

export default CategoryFilter;
