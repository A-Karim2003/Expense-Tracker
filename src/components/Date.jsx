import date from "../utils/date";

function Date() {
  const currDate = date();
  return <div>{currDate}</div>;
}

export default Date;
