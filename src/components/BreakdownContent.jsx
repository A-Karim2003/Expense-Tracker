import Small from "./Small";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdCardTravel } from "react-icons/md";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { MdOutlineHouse } from "react-icons/md";
import formatCurrency from "../utils/formatCurrency";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useConvertCurrency from "../hooks/useConvertCurrency";

const categoryIcon = {
  food: IoFastFoodOutline,
  travel: MdCardTravel,
  bills: LiaMoneyBillSolid,
  housing: MdOutlineHouse,
};

function BreakdownSection({ category, categoryCost }) {
  const {
    user: { currency },
  } = useSelector((store) => store.user);

  const Icon = categoryIcon[category.id];
  const cost = formatCurrency(categoryCost ?? 0, currency);

  return (
    <div className="flex items-center justify-between text-white px-2 hover:bg-(--glass-bg) rounded-lg">
      <div className="flex gap-4 items-center text-[18px]">
        <span
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
        <Small text={"6%"}></Small>
      </div>
    </div>
  );
}

export default BreakdownSection;
