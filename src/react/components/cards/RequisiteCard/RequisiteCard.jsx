import { Cell, Avatar } from "@telegram-apps/telegram-ui"

import BinIcon from "@/assets/icons/bin.svg?react"
import { REQUISITE_CONFIG } from "@/constants/requisite"
import "./RequisiteCard.css"

export function RequisiteCard({ requisite, props }) {
    const config = REQUISITE_CONFIG[requisite.type];

    console.log("requisite", requisite)

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
            after={<BinIcon />}
        >
            {config.title(requisite)}
        </Cell>
    );
}
