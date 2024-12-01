import { TransactionDetailsHeader } from '@/react/sections/TransactionDetailsHeader/TransactionDetailsHeader';
import { TransactionDetailsCard } from '@/react/components/cards/TransactionDetailsCard/TransactionDetailsCard';
import { useParams } from 'react-router-dom';

export function TransactionDetails() {
    const { id } = useParams();

    return (
        <div className="transaction_details__page">
            <TransactionDetailsHeader />
            <TransactionDetailsCard />
        </div>
    );
}