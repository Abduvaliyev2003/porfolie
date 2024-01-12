import i18next from "i18next";
import {initReactI18next} from "react-i18next";

import Uz from '../../lang/uz.json'
import Ru from '../../lang/ru.json'
import En from '../../lang/en.json'


i18next.use(initReactI18next).init({
    resources: {
        Uz: {
            translation: Uz,
        },
        Ru: {
            translation: Ru,
        },
        En: {
            translation: En,
        },
        
    },
    lng: localStorage.getItem("lang") || "En",
})

export default i18next;