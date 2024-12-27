// src/contexts/LanguageContext.js
import React, { createContext, useState } from "react";
import languageData from "../data/data_language.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const switchLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  return (
    <LanguageContext.Provider
      value={{ language, text: languageData[language], switchLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};