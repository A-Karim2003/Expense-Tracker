import SectionContainer from "../components/SectionContainer";
import Card from "../components/Card";
import DisplayDate from "../components/DisplayDate";
import Small from "../components/Small";
import { useSelector } from "react-redux";

function ThisMonthSection() {
  const { expenses, status } = useSelector((store) => store.expenses);

  const currMonth = new Date().getMonth() + 1;

  const currentMonth = expenses.filter((expense) => {
    const month = new Date(expense.date).getMonth() + 1;
    return month === currMonth && expense;
  });

  const totalCurrMonthSpending = currentMonth.reduce((acc, transaction) => {
    return (acc += transaction.amount);
  }, 0);

  return (
    <SectionContainer
      SectionTitle={"This Month"}
      SectionNav={<DisplayDate />}
      className="bg-linear-to-r from-(--accent-primary) to-(--accent-secondary)"
    >
      <Card>
        <h3 className="text-white text-2xl font-bold tracking-[2px] mb-2">
          £1400.30
        </h3>
        <Small text={"+17.0%"} />
      </Card>
      <Card>
        <h3 className="text-white text-2xl font-bold tracking-[2px] mb-2">
          €1638.35
        </h3>
        <Small text={"+17.0%"} />
      </Card>
      <Card>
        <h3 className="text-white text-2xl font-bold tracking-[2px] mb-2">
          $1778.38
        </h3>
        <Small text={"+17.0%"} />
      </Card>
    </SectionContainer>
  );
}

export default ThisMonthSection;
