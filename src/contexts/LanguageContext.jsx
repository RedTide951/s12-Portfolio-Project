// this is not used anymore but I keep it for reference

import React, { createContext, useState, useEffect } from "react";
import languageData from "../data/data_language.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const switchLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  // lokalde saklama
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, text: languageData[language], switchLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
