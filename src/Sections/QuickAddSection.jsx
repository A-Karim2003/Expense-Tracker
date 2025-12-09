import { useSelector } from "react-redux";
import CategoryOption from "../components/CategoryOption";
import SectionContainer from "../components/SectionContainer";
import LoadingSpinner from "../components/LoadingSpinner";
import { useState } from "react";

const classes =
  "w-full bg-(--overlay) border border-(--glass-border) py-2 px-4 text-[16px] outline-none focus:ring-2 focus:ring-(--accent-secondary-hover) rounded-xl";

function QuickAddSection() {
  const { categories, status: categoriesStatus } = useSelector(
    (store) => store.categories
  );

  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (!expenseAmount || !expenseCategory) return;

    const newExpense = {
      amount: undefined,
      category: expenseCategory,
      description: expenseDescription || "",
      date: "2025-12-02T14:40:00.000Z",
      time: "2:40pm",
    };
  }

  const isLoading = categoriesStatus === "loading";
  const isSucessful = categoriesStatus === "success";

  return (
    <SectionContainer SectionTitle={"Quick Add"} className="pb-8">
      {isLoading && <LoadingSpinner />}

      {isSucessful && (
        <form className=" text-white flex flex-col gap-4" onSubmit={onSubmit}>
          <input
            type="number"
            placeholder="£ 0.00"
            className={classes}
            onChange={(e) => setExpenseAmount(e.target.value)}
            value={expenseAmount}
          />

          <textarea
            placeholder="Description (e.g., Lunch at Cafe)"
            className={classes}
            onChange={(e) => setExpenseDescription(e.target.value)}
            value={expenseDescription}
          ></textarea>

          <div className="flex gap-4 mt-4">
            {categories.map((catergory, i) => (
              <CategoryOption
                category={catergory}
                key={i}
                expenseCategory={expenseCategory}
                setExpenseCategory={setExpenseCategory}
              />
            ))}
          </div>

          <button className="bg-linear-to-r from-(--accent-primary) to-(--accent-secondary) mt-6 p-2 rounded-xl cursor-pointer">
            Add Expence &rarr;
          </button>
        </form>
      )}
    </SectionContainer>
  );
}

export default QuickAddSection;
