import getMonthlyExpenses from "./getMonthlyExpenses";

/**
 *
 * @param {Array<object>} expenses
 * @param {Number} currMonth
 * @returns {Number} - Total amount spent in the month
 */

function getTotalMonthlySpending(expenses, target) {
  const monthlyExpenses = getMonthlyExpenses(expenses, target);

  return monthlyExpenses.reduce((acc, transaction) => {
    return (acc += transaction.amount);
  }, 0);
}

export default getTotalMonthlySpending;
