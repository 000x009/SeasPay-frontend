import { Cell, IconButton } from "@telegram-apps/telegram-ui"

import BinIcon from "@/assets/icons/bin.svg?react"
import ChevronForwardIcon from "@/assets/icons/chevron_forward.svg?react"
import { REQUISITE_CONFIG } from "@/constants/requisite"
import "./RequisiteCard.css"

export function RequisiteCard({
    requisite,
    onDelete,
    isReadOnly = false,
    ...props
}) {
    const config = REQUISITE_CONFIG[requisite.type];

    return (
        <Cell
            className="requisite__card"
            description={config.getDescription(requisite)}
            before={
                <div
                    style={{
                        width: "35px",
                        height: "35px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <config.icon />
                </div>
            }
            after={
                <IconButton onClick={onDelete} className="requisite__card__delete">
                    {!isReadOnly ? <BinIcon /> : <ChevronForwardIcon />}
                </IconButton>
            }
            {...props}
        >
            {config.title(requisite)}
        </Cell>
    );
}
