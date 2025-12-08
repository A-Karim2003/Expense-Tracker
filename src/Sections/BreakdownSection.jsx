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
  const prevMonthExpenses = getMonthlyExpenses(expenses, currMonth - 1);

  const currMonthCostByCategory = getCostByCategory(currMonthExpenses);
  const prevMonthCostByCategory = getCostByCategory(prevMonthExpenses);

  const { user, status: currencyStatus } = useSelector((store) => store.user);

  const isLoading =
    expensesStatus === "loading" ||
    categoriesStatus === "loading" ||
    currencyStatus === "loading";

  const isSuccess =
    categoriesStatus === "success" &&
    expensesStatus === "success" &&
    currencyStatus === "success";

  return (
    <SectionContainer SectionTitle={"Breakdown"}>
      {isLoading && <LoadingSpinner />}
      {isSuccess &&
        categories.map((category) => (
          <BreakdownContent
            key={category.id}
            category={category}
            currency={user.currency}
            currMonthCostByCategory={currMonthCostByCategory[category.id]}
            prevMonthCostByCategory={prevMonthCostByCategory[category.id]}
          />
        ))}
    </SectionContainer>
  );
}

export default BreakdownSection;
