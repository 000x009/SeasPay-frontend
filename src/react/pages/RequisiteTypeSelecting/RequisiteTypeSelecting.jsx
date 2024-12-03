import { useNavigate } from "react-router-dom"

import { RequisiteTypeCard } from "@/react/components/cards/RequisiteTypeCard/RequisiteTypeCard"
import CardIcon from "@/assets/icons/card_no_background.svg?react"
import ChequeIcon from "@/assets/icons/cheque_no_background.svg?react"
import "./RequisiteTypeSelecting.css"

const requisiteTypes = [ 
    {
        id: 1,
        icon: CardIcon,
        name: "Карта",
        path: "/payment-details/add?type=card"
    },
    {
        id: 2,
        icon: ChequeIcon,
        name: "Крипто",
        path: "/payment-details/add?type=crypto"
    }
]

export function RequisiteTypeSelecting() {
    const navigate = useNavigate()

    return (
        <div className="requisite_type_selecting">
            {requisiteTypes.map((requisiteType) => (
                <RequisiteTypeCard
                    key={requisiteType.id}
                    icon={requisiteType.icon}
                    onClick={() => navigate(requisiteType.path)}
                >
                    {requisiteType.name}
                </RequisiteTypeCard>
            ))}
        </div>
    )
}