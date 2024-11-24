import { Tappable } from '@telegram-apps/telegram-ui';
import './PaymentSystemCard.css';

export function PaymentSystemCard({ image, ...props }) {
    return (
        <Tappable {...props} className="tappable-payment-system">
            <div className="payment-system-card">
                <img src={image} className="payment-system-image" />
            </div>
        </Tappable>
    );
}