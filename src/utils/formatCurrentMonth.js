/**
 * @returns {String} - returns formatted month similar to |December 2025|
 */

export default function formatCurrentMonth() {
  const date = new Date();

  return new Intl.DateTimeFormat("en-GB", {
    month: "long",
    year: "numeric",
  }).format(date);
}
