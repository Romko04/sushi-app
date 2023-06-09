import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationUK from './locales/uk.json';

const resources = {
  uk: {
    translation: translationUK
  }
  // Додайте інші мови та файли перекладів за потреби
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uk', // Встановіть мову за замовчуванням
    fallbackLng: 'uk', // Якщо переклад не знайдений, використовуйте українську мову
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
