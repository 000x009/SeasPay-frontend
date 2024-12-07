import { Title } from '@telegram-apps/telegram-ui';
import Lottie from "lottie-react"

import ThinkingDuckAnimation from '@/assets/animations/thinking-duck.json';
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
                <Lottie
                    animationData={ThinkingDuckAnimation}
                    loop={true}
                    autoplay={true}
                    style={{
                        width: "150px",
                        height: "150px",
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