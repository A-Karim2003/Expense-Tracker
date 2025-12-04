import formatCurrentMonth from "../utils/formatCurrentMonth";

export default function DisplayDate() {
  const currDate = formatCurrentMonth();
  return <div>{currDate}</div>;
}
