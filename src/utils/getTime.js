export default function getTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";

  const time = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}${ampm}`;
  return time;
}
