export default function getFormattedText(percentageChange) {
  const isNegative = percentageChange < 0;
  const formattedPercent = Math.abs(percentageChange);

  const message = isNegative
    ? `You've spent ${formattedPercent}% less than last month`
    : `You've spent ${formattedPercent}% more than last month`;

  const colourClass = isNegative ? "text-green-200 " : "text-red-200";

  return { message, colourClass };
}
