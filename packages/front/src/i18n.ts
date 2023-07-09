import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const getLanguageFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('lang') || 'fr';
};

const resources = {
  fr: {
    translation: require('./locales/fr.json'),
  },
  en: {
    translation: require('./locales/en.json'),
  },
};
i18next.use(initReactI18next).init({
  fallbackLng: 'fr',
  interpolation: { escapeValue: false },
  lng: getLanguageFromURL(),
  resources,
});

export default i18next;
