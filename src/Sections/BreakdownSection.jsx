import SectionContainer from "../components/SectionContainer";
import BreakdownContent from "../components/BreakdownContent";
import { useSelector } from "react-redux";
import getCostByCategory from "../utils/getCostByCategory";
import getMonthlyExpenses from "../utils/getMonthlyExpenses";
import LoadingSpinner from "../components/LoadingSpinner";
import usefetchCategories from "../utils/usefetchCategories";

function BreakdownSection() {
  const { expenses, status: expensesStatus } = useSelector(
    (store) => store.expenses
  );
  const { categories, status: categoriesStatus } = usefetchCategories();
  const currMonth = new Date().getMonth() + 1;
  const currMonthExpenses = getMonthlyExpenses(expenses, currMonth);
  const CostByCategory = getCostByCategory(currMonthExpenses);

  const isLoading =
    expensesStatus === "loading" || categoriesStatus === "loading";

  const isSuccess =
    categoriesStatus === "success" && expensesStatus === "success";

  return (
    <SectionContainer SectionTitle={"Breakdown"}>
      {isLoading && <LoadingSpinner />}
      {isSuccess &&
        categories.map((category) => (
          <BreakdownContent
            key={category.id}
            category={category}
            categoryCost={CostByCategory[category.id]}
          />
        ))}
    </SectionContainer>
  );
}

export default BreakdownSection;
