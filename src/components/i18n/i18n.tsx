import React from "react";
import { useTranslation } from "react-i18next";

function I18n() {
    const { i18n } = useTranslation();

    function handleChangeLanguage(language: any) {
        i18n.changeLanguage(language);
    }

    const selectedLanguage = i18n.language;
    return (
        <div className="select">
            <select onChange={(e) => handleChangeLanguage(e.target.value)}>
                <option value="pt-BR" selected={selectedLanguage === `pt-BR`}>
                    π§π·
                </option>
                <option value="en-US" selected={selectedLanguage === `en-US`}>
                    πΊπΈ
                </option>
            </select>
        </div>
    );
}

export default I18n;
