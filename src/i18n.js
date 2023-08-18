import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en.json";
import translationRU from "./locales/ru.json";
import translationKG from "./locales/kg.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  kg: {
    translation: translationKG,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  keySeparator: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;