function Header() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-[32px] text-white font-bold tracking-wide">
        💰 Expense Tracker
      </h1>
      <select
        defaultValue="GBP"
        className="border border-(--card-border) bg-(--glass-bg) text-white tracking-wide py-2 px-4 rounded-lg hover:bg-(--card-hover) cursor-pointer"
      >
        <option value="GBP">GBP (£)</option>
        <option value="EUR">EUR (€)</option>
        <option value="USD">USD ($)</option>
      </select>
    </div>
  );
}

export default Header;
