import Small from "./Small";

function BreakdownSection() {
  return (
    <div className="flex items-center justify-between text-white px-2 hover:bg-(--glass-bg) rounded-lg">
      <div className="flex gap-4 items-center text-[18px]">
        <span>🍔</span>
        <span>food</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-[18px]">£80.30</span>
        <Small text={"6%"}></Small>
      </div>
    </div>
  );
}

export default BreakdownSection;
