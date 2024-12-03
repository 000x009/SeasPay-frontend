import { Cell, Avatar, IconButton } from "@telegram-apps/telegram-ui"

import BinIcon from "@/assets/icons/bin.svg?react"
import { REQUISITE_CONFIG } from "@/constants/requisite"
import "./RequisiteCard.css"

export function RequisiteCard({ requisite, onDelete, props }) {
    const config = REQUISITE_CONFIG[requisite.type];

    return (
        <Cell
            className="requisite__card"
            description={config.getDescription(requisite)}
            before={
                <Avatar>
                    <config.icon />
                </Avatar>
            }
            {...props}
            after={
                <IconButton onClick={onDelete} className="requisite__card__delete">
                    <BinIcon />
                </IconButton>
            }
        >
            {config.title(requisite)}
        </Cell>
    );
}
