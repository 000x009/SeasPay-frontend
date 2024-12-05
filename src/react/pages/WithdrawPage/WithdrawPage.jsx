import { Image, Title } from '@telegram-apps/telegram-ui';
import ThinkingDuckGIF from '@/assets/gif/thinking_duck.gif';
import PaypalIcon from '@/assets/icons/paypal.svg';
import { PaymentSystemsSection } from '@/react/sections/PaymentSystemsSection/PaymentSystemsSection';

import './WithdrawPage.css';

const paymentSystems = [
    {
        id: 1,
        name: "PayPal",
        image: PaypalIcon,
    },
];

export const WithdrawPage = () => {
    return (
        <div className="withdraw-page__container">
            <div className="withdraw-page__header">
                <Image
                    src={ThinkingDuckGIF}
                    className="withdraw-page__image"
                    style={{
                        width: "200px",
                        height: "200px",
                        visibility: "hidden",
                    }}
                />
                <Title level='3' weight='1' className="withdraw-page__title">
                    Выберите способ вывода/приема платежа
                </Title>
            </div>
            <div className='payment-systems-section__container'>
                <PaymentSystemsSection paymentSystems={paymentSystems} type="withdraw" />
            </div>
        </div>
    );
};