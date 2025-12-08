export default function formatCurrency(amount, currencyCode) {
  if (!amount || !currencyCode) return;

  const formattedCurrency = Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currencyCode,
  }).format(amount);

  return formattedCurrency;
}
