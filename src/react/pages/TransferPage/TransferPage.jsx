import { Image, Title } from '@telegram-apps/telegram-ui';
import { useNavigate } from 'react-router-dom';
import ThinkingDuckGIF from '@/assets/gif/thinking_duck.gif';
import PaypalIcon from '@/assets/icons/paypal.svg';
import ApplePayIcon from '@/assets/icons/apple_pay.svg';
import { PaymentSystemsSection } from '@/react/sections/PaymentSystemsSection/PaymentSystemsSection';

import './TransferPage.css';

const paymentSystems = [
    {
        id: 1,
        name: "PayPal",
        image: PaypalIcon,
    },
    {
        id: 2,
        name: "Apple Pay",
        image: ApplePayIcon,
    },
];

export const TransferPage = () => {
    const navigate = useNavigate();

    return (
        <div className="transfer-page__container">
            <div className="transfer-page__header">
                <Image
                    src={ThinkingDuckGIF}
                    className="transfer-page__image"
                    style={{
                        width: "200px",
                        height: "200px",
                        visibility: "hidden",
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