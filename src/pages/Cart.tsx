import { useTranslation } from "react-i18next";

import { I18n } from "../components/i18n/index";
import { Title } from "./styles";

export function Cart() {
    const { t } = useTranslation();
    return (
        <>
            <Title>{t(`home.message`)}</Title>
            <I18n />
        </>
    );
}
