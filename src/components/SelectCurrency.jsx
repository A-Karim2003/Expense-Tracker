import { useDispatch, useSelector } from "react-redux";
import { updateDefaultCurrency } from "../features/user/userSlice";

function SelectCurrency() {
  const { currencies } = useSelector((store) => store.currencies);
  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  return (
    <select
      value={user.currency}
      className="border border-(--card-border) bg-(--glass-bg) text-white tracking-wide py-2 px-4 rounded-lg hover:bg-(--card-hover) cursor-pointer"
      onChange={(e) => dispatch(updateDefaultCurrency(e.target.value))}
    >
      {currencies.map((currency) => (
        <option key={currency.code} value={currency.code}>
          {currency.code} ({currency.symbol})
        </option>
      ))}
    </select>
  );
}
export default SelectCurrency;
