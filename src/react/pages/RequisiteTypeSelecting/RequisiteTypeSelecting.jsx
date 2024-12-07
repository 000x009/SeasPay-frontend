import { useNavigate } from "react-router-dom"

import { RequisiteTypeCard } from "@/react/components/cards/RequisiteTypeCard/RequisiteTypeCard"
import CardIcon from "@/assets/icons/card_no_background.svg?react"
import LightCardIcon from "@/assets/icons/card-light.svg?react"
import ChequeIcon from "@/assets/icons/cheque_no_background.svg?react"
import LightChequeIcon from "@/assets/icons/cheque-light.svg?react"
import { useTelegram } from "@/scripts/hooks/useTelegram"
import "./RequisiteTypeSelecting.css"

const requisiteTypes = [ 
    {
        id: 1,
        darkIcon: CardIcon,
        lightIcon: LightCardIcon,
        name: "Карта",
        path: "/payment-details/add?type=card"
    },
    {
        id: 2,
        darkIcon: ChequeIcon,
        lightIcon: LightChequeIcon,
        name: "Крипто",
        path: "/payment-details/add?type=crypto"
    }
]

export function RequisiteTypeSelecting() {
    const navigate = useNavigate()
    const { theme } = useTelegram();

    return (
        <div className="requisite_type_selecting">
            {requisiteTypes.map((requisiteType) => (
                <RequisiteTypeCard
                    key={requisiteType.id}
                    icon={theme === "light" ? requisiteType.lightIcon : requisiteType.darkIcon}
                    onClick={() => navigate(requisiteType.path)}
                >
                    {requisiteType.name}
                </RequisiteTypeCard>
            ))}
        </div>
    )
}