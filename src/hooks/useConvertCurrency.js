import { useCallback } from "react";

export default function useConvertCurrency() {
  const convertCurrency = useCallback(async function (from, to, amount) {
    if (!from || !to || !amount) return;

    try {
      const res = await fetch(
        `https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!res.ok) throw new Error("Could not convert currencies");

      const { rates } = await res.json();
      const result = (amount * rates[to]).toFixed(2);
      return result;
    } catch (e) {
      console.error(e.message);
      return null;
    }
  }, []);

  return { convertCurrency };
}
