const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'eng',
  otherLanguages: ['esp'],
  fallbackLng: 'eng',
  initImmediate: false,
  localePath: 'public/locales',
  react: {
    useSuspense: false,
  },
  localeSubpaths: {
    eng: 'en',
    esp: 'es',
  },
});
