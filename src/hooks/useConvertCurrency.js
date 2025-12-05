import { useState, useEffect } from "react";

export default function useConvertCurrency() {
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(null);

  async function convertCurrency(from, to, amount) {
    if (!from || !to || !amount) return;

    setStatus("status");
    setError(null);

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
      setConvertedAmount(result);
      setStatus("success");

      return result;
    } catch (e) {
      setError(e.message);
    }
  }

  return { convertCurrency, convertedAmount, status, error };
}
