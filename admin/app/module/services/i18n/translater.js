import config from "../../../config.js";
import * as fr from './fr.js'
import * as en from './en.js';

const translations = {
    en,
    fr
}

export const t = translations[config.locale];