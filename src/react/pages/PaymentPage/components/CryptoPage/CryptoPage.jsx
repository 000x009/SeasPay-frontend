import { Text } from "@telegram-apps/telegram-ui";
import { MainButton } from "@vkruglikov/react-telegram-web-app";

import ChequeIcon from "@/assets/icons/cheque.svg?react";
import "./CryptoPage.css";

export function CryptoPage({ locationState }) {
    return (
        <div className="crypto-page">
            <div className="crypto-page__icon-container">
                <ChequeIcon className="crypto-page__cheque-icon" />
            </div>
            <div className="crypto-page__title-container">
                <Text weight="2">
                    Вам был выставлен чек на оплату в 10$ Оплатите его по кнопке ниже.
                </Text>
            </div>
            <MainButton text="Оплатить 10$"/>
        </div>
    );
}