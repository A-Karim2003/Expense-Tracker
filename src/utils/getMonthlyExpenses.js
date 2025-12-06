/**
 * @param {Array<object>} expenses - These are expenses from http://localhost:9000/expenses
 * @param {*} targetMonth - The month to filter by (1–12).
 * @returns {Array<Object>} A list of expenses that match the given month.
 */

function getMonthlyExpenses(expenses, targetMonth) {
  return expenses.filter((expense) => {
    const month = new Date(expense.date).getMonth() + 1;
    return month === targetMonth && expense;
  });
}

export default getMonthlyExpenses;
