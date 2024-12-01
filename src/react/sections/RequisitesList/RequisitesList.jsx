import { useNavigate } from "react-router-dom";
import { RequisiteCard } from "@/react/components/cards/RequisiteCard/RequisiteCard";
import { RequisiteListSkeleton } from "../RequisiteListSkeleton/RequisiteListSkeleton";
import "./RequisitesList.css"

export function RequisitesList({ items, isFetchingNextPage, total }) {
    const navigate = useNavigate();

    console.log("items", items)

    return (
        <div className="requisites_cards_container">
            {items.length > 0 && items?.map((item) => (
                <RequisiteCard
                    key={item.id}
                    requisite={item}
                    onClick={() => navigate(`/requisite/${item.id}`)}
                />
            ))}
            {isFetchingNextPage && <RequisiteListSkeleton remaining={total - (items?.length || 0)} />}
        </div>  
    )
}
