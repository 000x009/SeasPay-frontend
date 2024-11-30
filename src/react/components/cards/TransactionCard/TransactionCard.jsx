import { Cell, Avatar } from "@telegram-apps/telegram-ui";
import { TYPE_MAP, STATUS_MAP, ICON_MAP } from "@/constants/transactions";
import { parseDate } from "@/scripts/helpers/parseDate";
import "./TransactionCard.css";

export function TransactionCard({ transaction }) {
    const TransactionIcon = ICON_MAP[transaction.type];
    const TransactionStatusIcon = STATUS_MAP[transaction.status].icon;
    const TransactionType = TYPE_MAP[transaction.type];

    return (
        <Cell
            className="transaction_card"
            before={<Avatar><TransactionIcon/></Avatar>}
            description={parseDate(transaction.date)}
            after={
                <div className="transaction_card_status">
                    {TransactionStatusIcon && <TransactionStatusIcon/>}
                </div>
            }
        >
            {TransactionType}
        </Cell>
    )
}