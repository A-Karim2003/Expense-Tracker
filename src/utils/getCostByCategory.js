export default function getCostByCategory(expenses) {
  const groupByCategory = {};
  expenses.forEach((expense) => {
    if (!groupByCategory[expense.category])
      groupByCategory[expense.category] = 0;

    groupByCategory[expense.category] += expense.amount;
  });

  return groupByCategory;
}
