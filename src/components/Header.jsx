import SelectCurrency from "./SelectCurrency";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-[32px] text-white font-bold tracking-wide">
        💰 Expense Tracker
      </h1>

      <SelectCurrency />
    </div>
  );
}

export default Header;

/*
 
 "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "currency": "GBP",
      "monthlyBudget": 5500
    }

 */
