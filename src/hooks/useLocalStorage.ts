import { useState } from "react";

// Custom Hook برای استفاده از localStorage
function useLocalStorageCustom( key, initialValue) {
  // گرفتن مقدار از localStorage یا استفاده از مقدار اولیه
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage", error);
      return initialValue;
    }
  });

  // ذخیره‌سازی مقدار در localStorage
  const setValue = (value: any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorageCustom;
