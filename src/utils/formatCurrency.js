export default function formatCurrency(amount, currencyCode) {
  const formattedCurrency = Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currencyCode,
  }).format(amount);

  return formattedCurrency;
}
