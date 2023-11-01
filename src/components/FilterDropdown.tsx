function FilterDropdown({
  setFilterRange,
}: {
  setFilterRange: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  return (
    <select
      className="ml-2 mt-2 cursor-pointer bg-transparent text-2xl"
      onChange={e => setFilterRange([e.target.value, 'none'])}
      name="filterRanges"
      id="filterRange"
    >
      <option value="all">All</option>
      <option value="today">Today</option>
      <option value="tomorrow">Tomorrow</option>
      <option value="week">This Week</option>
    </select>
  );
}

export default FilterDropdown;
