import React, { createContext, useContext } from "react";
import languageData from "../data/data_language.json";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage("language", "en");
  const [theme, setTheme] = useLocalStorage("theme", "light");

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const switchLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === "en" ? "tr" : "en";
      return newLanguage;
    });
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      return newTheme;
    });
  };

  return (
    <AppContext.Provider
      value={{
        language,
        text: languageData[language],
        switchLanguage,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
