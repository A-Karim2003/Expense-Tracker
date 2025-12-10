import SectionContainer from "../components/SectionContainer";
import Card from "../components/Card";
import Small from "../components/Small";
import CategoryFilter from "../components/CategoryFilter";
import getRecentActivities from "../utils/getRecentActivities";
import { useSelector } from "react-redux";
import { categoryIcons } from "../components/BreakdownContent";

function RecentActivitySection() {
  const { expenses } = useSelector((store) => store.expenses);
  const { categories } = useSelector((store) => store.categories);

  const categoryColors = categories.reduce((acc, category) => {
    acc[category.id] = category.color;
    return acc;
  }, {});

  const recentActivities = getRecentActivities(expenses);

  return (
    <SectionContainer
      SectionTitle={"Recent Activity"}
      SectionNav={<CategoryFilter />}
    >
      {expenses.map((expense) => {
        const Icon = categoryIcons[expense.category];

        return (
          <Card
            className="flex items-center justify-between text-white"
            key={expense.id}
          >
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-3 border border-green-300">
                <div
                  className="flex items-center justify-center h-10 w-10 rounded-md "
                  style={{ backgroundColor: categoryColors[expense.category] }}
                >
                  {Icon ? <Icon className="w-6 h-6 text-white" /> : "Other"}
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
              <strong>-£67.80</strong>
              <Small text="9:15am" />
            </div>
          </Card>
        );
      })}
    </SectionContainer>
  );
}

export default RecentActivitySection;
