import SectionContainer from "../components/SectionContainer";
import Card from "../components/Card";
import DisplayDate from "../components/DisplayDate";
import Small from "../components/Small";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCurrencyTypes } from "../features/currencies/currenciesSlice";
import LoadingSpinner from "../components/LoadingSpinner";
import useConvertCurrency from "../hooks/useConvertCurrency";
import formatCurrency from "../utils/formatCurrency";
import getTotalMonthlySpending from "../utils/getTotalMonthlySpending";
import calculatePercentage from "../utils/calculatePercentage";

function ThisMonthSection() {
  const dispatch = useDispatch();
  const { convertCurrency } = useConvertCurrency();

  const { expenses, status: expensesStatus } = useSelector(
    (store) => store.expenses
  );
  const { currencies, status: currenciesStatus } = useSelector(
    (store) => store.currencies
  );

  const { user, status: userStatus } = useSelector((store) => store.user);

  const [convertedAmounts, setConvertedAmounts] = useState([]);
  const [convertedAmountsStatus, setConvertedAmountsStatus] = useState("idle");

  const currMonth = new Date().getMonth() + 1;
  const prevMonth = currMonth - 1;
  const totalCurrMonthSpending = getTotalMonthlySpending(expenses, currMonth);
  const totalPrevMonthSpending = getTotalMonthlySpending(expenses, prevMonth);

  const percentageChange = calculatePercentage(
    totalCurrMonthSpending,
    totalPrevMonthSpending
  );

  useEffect(() => {
    dispatch(fetchCurrencyTypes());
  }, [dispatch]);

  //? preload convertedAmounts state with converted currency values
  useEffect(() => {
    if (currencies.length === 0 || !totalCurrMonthSpending || !user) return;
    setConvertedAmountsStatus("loading");

    const converted = {};
    async function loadData() {
      for (const currency of currencies) {
        if (currency.code === user.currency) {
          converted[currency.code] = {
            convertedValue: totalCurrMonthSpending,
            symbol: currency.symbol,
          };
          continue;
        }

        converted[currency.code] = {
          convertedValue: await convertCurrency(
            user.currency,
            currency.code,
            totalCurrMonthSpending
          ),
          symbol: currency.symbol,
        };
      }

      setConvertedAmounts(converted);
      setConvertedAmountsStatus("success");
    }

    loadData();
  }, [currencies, totalCurrMonthSpending, user.currency]);

  const isLoading =
    convertedAmountsStatus === "loading" ||
    expensesStatus === "loading" ||
    currenciesStatus === "loading" ||
    userStatus === "loading";

  return (
    <SectionContainer
      SectionTitle={"This Month"}
      SectionNav={<DisplayDate />}
      className="bg-linear-to-r from-(--accent-primary) to-(--accent-secondary)"
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        Object.entries(convertedAmounts).map(([key, value]) => {
          const formattedConvertedValue = formatCurrency(
            value.convertedValue,
            key
          );

          const isSelectedCurrency = key === user.currency;

          return (
            <Card
              key={key}
              className={`${isSelectedCurrency ? "bg-teal-600" : ""}`}
            >
              <h3 className="text-white text-2xl font-bold tracking-[2px] mb-2">
                {`${formattedConvertedValue}`}
              </h3>
              <Small
                text={isSelectedCurrency && `${percentageChange}%`}
                className={`${
                  percentageChange < 0 ? "text-red-500" : "text-green-500"
                } text-shadow-md tracking-wider`}
              />
            </Card>
          );
        })
      )}
    </SectionContainer>
  );
}

export default ThisMonthSection;
