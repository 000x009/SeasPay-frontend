import { Text } from "@telegram-apps/telegram-ui";
import { MainButton } from "@vkruglikov/react-telegram-web-app";

import ChequeIcon from "@/assets/icons/cheque.svg?react";
import { useTelegram } from "@/scripts/hooks/useTelegram";
import { useCreateInvoice } from "@/scripts/hooks/useCreateInvoice";
import "./CryptoPage.css";


export function CryptoPage({ locationState }) {
    const { WebApp } = useTelegram();
    const createInvoice = useCreateInvoice();
    const amount = locationState.amount;

    const handleCreateCryptoPayInvoice = async () => {
        if (!createInvoice.data) {
            createInvoice.handleCreateInvoice(parseFloat(amount));
        } else {
            WebApp.openTelegramLink(createInvoice.data.invoice_url);
        }
    };

    return (
        <div className="crypto-page">
            <div className="crypto-page__icon-container">
                <ChequeIcon className="crypto-page__cheque-icon" />
            </div>
            <div className="crypto-page__title-container">
                <Text weight="2">
                    Вам был выставлен чек на оплату в {amount}$ Оплатите его по кнопке ниже.
                </Text>
            </div>
            <MainButton
                text={`Оплатить ${amount}$`}
                onClick={handleCreateCryptoPayInvoice}
                progress={createInvoice.isLoading}
            />
        </div>
    );
}