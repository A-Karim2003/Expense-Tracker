import SectionContainer from "../components/SectionContainer";
import Card from "../components/Card";
import DisplayDate from "../components/DisplayDate";
import Small from "../components/Small";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCurrencyTypes } from "../features/currencies/currenciesSlice";
import LoadingSpinner from "../components/LoadingSpinner";
import useConvertCurrency from "../hooks/useConvertCurrency";

function ThisMonthSection() {
  const dispatch = useDispatch();
  const { convertCurrency, convertedAmount, status, error } =
    useConvertCurrency();

  const { expenses, status: expensesStatus } = useSelector(
    (store) => store.expenses
  );
  const { currencies, status: currenciesStatus } = useSelector(
    (store) => store.currencies
  );
  const [convertedAmounts, setConvertedAmounts] = useState({});

  const currMonth = new Date().getMonth() + 1;
  const currentMonth = expenses.filter((expense) => {
    const month = new Date(expense.date).getMonth() + 1;
    return month === currMonth && expense;
  });

  const totalCurrMonthSpending = currentMonth.reduce((acc, transaction) => {
    return (acc += transaction.amount);
  }, 0);

  // 81.64

  useEffect(() => {
    dispatch(fetchCurrencyTypes());
  }, []);

  //? preload convertedAmounts state with converted currency values
  useEffect(() => {
    if (currencies.length === 0 || !totalCurrMonthSpending) return;

    const converted = {};
    async function loadData() {
      for (const currency of currencies) {
        if (currency.code === "GBP") continue;

        converted[currency.code] = await convertCurrency(
          "GBP",
          currency.code,
          totalCurrMonthSpending
        );
      }

      console.log(converted);
    }

    loadData();
  }, [currencies, totalCurrMonthSpending]);

  return (
    <SectionContainer
      SectionTitle={"This Month"}
      SectionNav={<DisplayDate />}
      className="bg-linear-to-r from-(--accent-primary) to-(--accent-secondary)"
    >
      {(expensesStatus === "loading" || currenciesStatus === "loading") && (
        <LoadingSpinner />
      )}
      {(expensesStatus === "success" || currenciesStatus === "success") &&
        currencies.map((currency) => {
          return (
            <Card key={currency.id}>
              <h3 className="text-white text-2xl font-bold tracking-[2px] mb-2">
                {`${currency.symbol}1400.30`}
              </h3>
              <Small text={"+17.0%"} />
            </Card>
          );
        })}
    </SectionContainer>
  );
}

export default ThisMonthSection;
