import SectionContainer from "../components/SectionContainer";

function QuickAddSection() {
  return (
    <SectionContainer SectionTitle={"Quick Add"} className="pb-8">
      <form className=" text-white flex flex-col gap-4">
        <input
          type="number"
          placeholder="£ 0.00"
          className="w-full bg-(--overlay) border border-(--glass-border) py-2 px-4 text-[16px] outline-none focus:ring-2 focus:ring-(--accent-secondary-hover) rounded-xl"
        />

        <textarea
          placeholder="Description (e.g., Lunch at Cafe)"
          className="w-full bg-(--overlay) border border-(--glass-border) py-2 px-4 text-[16px] outline-none focus:ring-2 focus:ring-(--accent-secondary-hover) rounded-xl"
        ></textarea>

        <div className="flex gap-4 mt-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}>
              <input
                type="radio"
                id="food"
                name="category"
                value="food"
                className="peer sr-only"
              />

              <label
                htmlFor="food"
                className="cursor-pointer rounded-xl text-3xl p-3 bg-(--glass-bg) peer-checked:bg-blue-600"
              >
                🍔
              </label>
            </div>
          ))}
        </div>

        <button className="bg-linear-to-r from-(--accent-primary) to-(--accent-secondary) mt-6 p-2 rounded-xl cursor-pointer">
          Add Expence &rarr;
        </button>
      </form>
    </SectionContainer>
  );
}

export default QuickAddSection;
