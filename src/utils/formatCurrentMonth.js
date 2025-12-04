export default function formatCurrentMonth() {
  const date = new Date();

  return new Intl.DateTimeFormat("en-GB", {
    month: "long",
    year: "numeric",
  }).format(date);
}
