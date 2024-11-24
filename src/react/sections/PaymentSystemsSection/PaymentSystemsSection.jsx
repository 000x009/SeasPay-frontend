import { useNavigate } from 'react-router-dom';

import { PaymentSystemCard } from '../../components/cards/PaymentSystemCard/PaymentSystemCard';
import './PaymentSystemsSection.css';

export function PaymentSystemsSection({ paymentSystems, type }) {
    const navigate = useNavigate();

    return (
        <div className="payment-systems-section">
            {paymentSystems.map((paymentSystem) => (
                <PaymentSystemCard
                    key={paymentSystem.id}
                    image={paymentSystem.image}
                    onClick={() => navigate(`/${type}/form?name=${paymentSystem.name}`)}
                />
            ))}
        </div>
    );
}