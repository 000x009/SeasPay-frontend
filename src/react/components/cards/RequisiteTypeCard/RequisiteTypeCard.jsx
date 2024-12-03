import { Caption, Tappable } from "@telegram-apps/telegram-ui"

import "./RequisiteTypeCard.css"

export function RequisiteTypeCard({ icon: Icon, children, ...props }) {
    return (
        <Tappable className="requisite_type_card" {...props}>
            <div className="requisite-type__image">
                <Icon />
            </div>
            <Caption level="3" weight="2">{children}</Caption>
        </Tappable>
    )
}