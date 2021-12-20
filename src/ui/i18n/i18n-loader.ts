import i18next from "i18next";

export function loadTranslations(){
    i18next.addResourceBundle('fr_fr', 'common', require('./fr_fr.json'));
    i18next.addResourceBundle('en_us', 'common', require('./en_us.json'));
}