import { useNavigate } from 'react-router-dom';

import { PaymentSystemCard } from '../../components/cards/PaymentSystemCard/PaymentSystemCard';
import './PaymentSystemsSection.css';

export function PaymentSystemsSection({ paymentSystems, type }) {
    const navigate = useNavigate();

    const handlePaymentSystemClick = (paymentSystemName) => {
        if (type === "withdraw") {
            navigate(`/withdraw/requisite-selecting`, { state: { paymentSystemName } })
        } else {
            navigate(`/transfer/form`, { state: { paymentSystemName } })
        }
    }

    return (
        <div className="payment-systems-section">
            {paymentSystems.map((paymentSystem) => (
                <PaymentSystemCard
                    key={paymentSystem.id}
                    image={paymentSystem.image}
                    onClick={() => handlePaymentSystemClick(paymentSystem.name)}
                />
            ))}
        </div>
    );
}