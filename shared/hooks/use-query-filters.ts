import React from "react";
import { Filters } from "./use-filters";
import qs from "qs";
import { useRouter } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();
  React.useEffect(() => {
    const paramms = {
      ...filters.prices,
      sizes: Array.from(filters.sizes),
      pizzaType: Array.from(filters.pizzaTypes),
      ingredients: Array.from(filters.selectedIngredients),
    };

    const query = qs.stringify(paramms, { arrayFormat: "comma" });

    router.push(`?${query}`, { scroll: false });
  }, [filters]);
};
