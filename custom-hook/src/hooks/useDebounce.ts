import React from "react";
import { debounce } from "../utils/debounce";

type DebounceProps = {
  delay: number;
};

export const useDebounce = ({ delay }: DebounceProps) => {
  const [debouncedSearch, setDebouncedSearch] = React.useState("");

  const debouncedSetSearch = debounce((value: string) => {
    setDebouncedSearch(value);
  }, delay);

  return {
    debouncedSearch,
    debouncedSetSearch,
  };
};
