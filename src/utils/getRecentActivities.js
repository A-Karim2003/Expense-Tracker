import React from "react";

/**
 * The function filters expenses based on whether they occurred within the last
 * 30 days.
 * @param expenses - An array of objects representing expenses, where each object has a `date` property
 * indicating the date of the expense.
 */
export default function getRecentActivities(expenses) {
  const now = new Date().getTime();
  const month = 60 * 60 * 24 * 30 * 1000;

  const last30days = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate >= now - month;
  });

  return last30days;
}
