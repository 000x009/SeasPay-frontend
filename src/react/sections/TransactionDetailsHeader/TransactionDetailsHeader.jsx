import { Subheadline } from '@telegram-apps/telegram-ui';
import './TransactionDetailsHeader.css';

export function TransactionDetailsHeader() {
    return (
        <div className="transaction_details_header">
            <Subheadline level='1' weight='2'>Информация о транзакции</Subheadline>
        </div>
    );
}