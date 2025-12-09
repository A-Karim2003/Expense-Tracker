import { categoryIcons } from "./BreakdownContent";

export default function CategoryOption({
  category,
  expenseCategory,
  setExpenseCategory,
}) {
  const Icon = categoryIcons[category.id];

  return (
    <div>
      <input
        type="radio"
        id={category.id}
        name="category"
        value={category.id}
        className="peer sr-only"
        onChange={(e) => setExpenseCategory(e.target.value)}
        checked={category.id === expenseCategory}
      />

      <label
        htmlFor={category.id}
        className="cursor-pointer rounded-xl p-3 bg-(--glass-bg) peer-checked:bg-blue-600 
             flex items-center justify-center"
      >
        {Icon ? (
          <Icon className="w-8 h-8" />
        ) : (
          <span className="w-8 h-8 flex items-center justify-center">
            Other
          </span>
        )}
      </label>
    </div>
  );
}
