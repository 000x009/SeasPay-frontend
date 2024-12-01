import { Cell, Avatar } from "@telegram-apps/telegram-ui";
import { TYPE_MAP, ICON_MAP } from "@/constants/transactions";
import { parseDate } from "@/scripts/helpers/parseDate";
import "./TransactionCard.css";

export function TransactionCard({ transaction, ...props }) {
    const TransactionIcon = ICON_MAP[transaction.type];
    const TransactionType = TYPE_MAP[transaction.type];

    return (
        <Cell
            className="transaction_card"
            before={
                <Avatar className="transaction_card_icon">
                    <TransactionIcon/>
                </Avatar>
            }
            description={parseDate(transaction.created_at)}
            {...props}
        >
            {TransactionType}
        </Cell>
    )
}