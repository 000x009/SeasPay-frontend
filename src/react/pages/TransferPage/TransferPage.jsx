import { Title } from '@telegram-apps/telegram-ui';

import Lottie from "lottie-react"

import ThinkingDuckAnimation from '@/assets/animations/thinking-duck.json';
import PaypalIcon from '@/assets/icons/paypal.svg';
import { PaymentSystemsSection } from '@/react/sections/PaymentSystemsSection/PaymentSystemsSection';

import './TransferPage.css';

const paymentSystems = [
    {
        id: 1,
        name: "PayPal",
        image: PaypalIcon,
    },
];

export const TransferPage = () => {
    return (
        <div className="transfer-page__container">
            <div className="transfer-page__header">
                <Lottie
                    animationData={ThinkingDuckAnimation}
                    loop={true}
                    autoplay={true}
                    style={{
                        width: "200px",
                        height: "200px",
                    }}
                />
                <Title level='3' weight='1' className="transfer-page__title">
                    Выберите способ перевода
                </Title>
            </div>
            <div className='payment-systems-section__container'>
                <PaymentSystemsSection paymentSystems={paymentSystems} type="transfer" />
            </div>
        </div>
    );
};