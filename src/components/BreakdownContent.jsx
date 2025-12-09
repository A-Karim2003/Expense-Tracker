import Small from "./Small";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdCardTravel } from "react-icons/md";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { MdOutlineHouse } from "react-icons/md";
import formatCurrency from "../utils/formatCurrency";
import calculatePercentage from "../utils/calculatePercentage";
import getFormattedText from "../utils/getFormattedText";

export const categoryIcons = {
  food: IoFastFoodOutline,
  travel: MdCardTravel,
  bills: LiaMoneyBillSolid,
  housing: MdOutlineHouse,
};

function BreakdownSection({
  category,
  currency,
  currMonthCostByCategory,
  prevMonthCostByCategory,
}) {
  const Icon = categoryIcons[category.id];
  const cost = formatCurrency(currMonthCostByCategory ?? 0, currency);

  const percentageChange = calculatePercentage(
    currMonthCostByCategory ?? 0,
    prevMonthCostByCategory ?? 0
  );

  const { message, colourClass } = getFormattedText(percentageChange);

  return (
    <div className="flex items-center justify-between text-white px-2 hover:bg-(--glass-bg) rounded-lg">
      <div className="flex gap-4 items-center text-[18px]">
        <span
          className="min-h-10 min-w-10"
          style={{
            background: category.color,
            padding: "4px",
            borderRadius: "4px",
          }}
        >
          {Icon && <Icon className="w-8 h-8  " />}
        </span>
        <span>{category.label}</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-[18px]">{cost ?? 0}</span>
        <Small
          text={message}
          className={`${colourClass} text-shadow-md tracking-wider`}
        />
      </div>
    </div>
  );
}

export default BreakdownSection;
