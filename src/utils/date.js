export default function date() {
  const date = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    month: "long",
    year: "numeric",
  }).format(date);

  return formattedDate;
}
