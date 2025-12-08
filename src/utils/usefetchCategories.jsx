import { useEffect, useState } from "react";

export default function usefetchCategories() {
  const [categories, setCategories] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    setStatus("loading");

    async function fetchCategories() {
      try {
        const res = await fetch("http://localhost:9000/categories", {
          method: "GET",
          headers: { "Content-Type": "application:json" },
        });

        if (!res.ok) throw new Error("Could not fetch categories");

        const data = await res.json();

        setCategories(data);
        setStatus("success");
      } catch (error) {
        console.log(error.message);
        setStatus("error");
      }
    }

    fetchCategories();
  }, []);

  return { categories, status };
}
