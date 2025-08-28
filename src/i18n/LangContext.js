import React, { createContext, useContext, useState, useMemo } from 'react';
import translations from './translations';

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem('site_lang') || 'ru');

  // persist selection
  React.useEffect(() => {
    try { localStorage.setItem('site_lang', lang); document.documentElement.lang = lang; } catch (e) {}
  }, [lang]);

  const value = useMemo(() => ({
    lang,
    setLang,
    t: (key) => (translations[lang] && translations[lang][key]) || translations['ru'][key] || key,
  }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
