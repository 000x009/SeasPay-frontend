import { PaymentSystemCard } from '../../components/cards/PaymentSystemCard/PaymentSystemCard';
import './PaymentSystemsSection.css';

export function PaymentSystemsSection({ paymentSystems }) {
    return (
        <div className="payment-systems-section">
            {paymentSystems.map((paymentSystem) => (
                <PaymentSystemCard
                    key={paymentSystem.id}
                    image={paymentSystem.image}
                />
            ))}
        </div>
    );
}