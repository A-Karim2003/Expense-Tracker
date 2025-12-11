import SectionContainer from "../components/SectionContainer";
import Card from "../components/Card";
import Small from "../components/Small";
import CategoryFilter from "../components/CategoryFilter";
import getRecentActivities from "../utils/getRecentActivities";
import { useSelector } from "react-redux";
import { categoryIcons } from "../components/BreakdownContent";
import formatCurrency from "../utils/formatCurrency";
import { useState } from "react";

function RecentActivitySection() {
  const { expenses } = useSelector((store) => store.expenses);
  const { categories } = useSelector((store) => store.categories);
  const { user } = useSelector((store) => store.user);
  const [filterOption, setFilterOption] = useState("all");

  const categoryColors = categories.reduce((acc, category) => {
    acc[category.id] = category.color;
    return acc;
  }, {});

  const recentActivities = getRecentActivities(expenses).reverse();

  return (
    <SectionContainer
      SectionTitle={"Recent Activity"}
      SectionNav={
        <CategoryFilter
          filterOption={filterOption}
          setFilterOption={setFilterOption}
        />
      }
    >
      {recentActivities.map((expense) => {
        const Icon = categoryIcons[expense.category];
        const amount = formatCurrency(expense.amount, user?.currency);
        return (
          <Card
            className="flex items-center justify-between text-white"
            key={expense.id}
          >
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center h-10 w-10 rounded-md "
                  style={{ backgroundColor: categoryColors[expense.category] }}
                >
                  {Icon ? (
                    <Icon className="min-w-8 min-h-8 text-white" />
                  ) : (
                    "Other"
                  )}
                </div>

                <div className="flex flex-col">
                  <strong className="text-base font-semibold">
                    {expense.description}
                  </strong>

                  <Small text="Food • Yesterday" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between items-center">
              <strong>-{amount}</strong>
              <Small text={expense.time} />
            </div>
          </Card>
        );
      })}
    </SectionContainer>
  );
}

export default RecentActivitySection;
