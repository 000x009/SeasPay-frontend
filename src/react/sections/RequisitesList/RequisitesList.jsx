import { useCallback } from "react";

import { useTelegram } from "@/scripts/hooks/useTelegram";
import { RequisiteCard } from "@/react/components/cards/RequisiteCard/RequisiteCard";
import { RequisiteListSkeleton } from "../RequisiteListSkeleton/RequisiteListSkeleton";
import { useDeleteRequisite } from "@/scripts/hooks/useDeleteRequisite"
import "./RequisitesList.css"

export function RequisitesList({
    items,
    isFetchingNextPage,
    total,
    onRequisiteClick,
    isReadOnly = false,
}) {
    const { handleDeleteRequisite } = useDeleteRequisite()
    const { WebApp } = useTelegram()

    const deleteRequisite = useCallback((id) => async () => {
        await handleDeleteRequisite(id)
        items = items.filter(item => item.id !== id)
    }, [handleDeleteRequisite, items])

    const handleDelete = async (id) => {
        WebApp.showPopup(
            {
                title: "Удаление реквизита",
                message: "Вы уверены, что хотите удалить реквизит?",
                buttons: [
                    {
                        text: "Удалить",
                        type: "destructive",
                    }
                ]
            },
            deleteRequisite(id)
        )
    }

    console.log(items)

    return (
        <div className="requisites_cards_container">
            {total > 0 && items?.map((item) => (
                <RequisiteCard
                    key={item.id}
                    requisite={item}
                    onClick={() => onRequisiteClick(item.id)}
                    onDelete={async () => await handleDelete(item.id)}
                    isReadOnly={isReadOnly}
                />
            ))}
            {isFetchingNextPage && <RequisiteListSkeleton remaining={total - (items?.length || 0)} />}
        </div>  
    )
}
