import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);

      if (item) {
        return JSON.parse(item);
      } else {
        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    let newValue = value;

    if (typeof value === "function") {
      const fn = value;
      newValue = fn(storedValue);
    } else {
      newValue = value;
    }
    localStorage.setItem(key, JSON.stringify(newValue));
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};
