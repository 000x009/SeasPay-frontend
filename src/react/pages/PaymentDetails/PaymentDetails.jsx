import PaymentDetailsHeader from "@/react/sections/PaymentDetailsHeader/PaymentDetailsHeader"
import { useNavigate } from "react-router-dom"
import { useRequisiteList } from "@/scripts/hooks/useRequisiteList"
import { Progress } from "@/react/components/ui/Progress/Progress"
import { InfiniteScroll } from "@/react/sections/InfiniteScroll/InfiniteScroll"
import { MainButton } from "@vkruglikov/react-telegram-web-app"
import { RequisitesList } from "@/react/sections/RequisitesList/RequisitesList"
import "./PaymentDetails.css"

export function PaymentDetails() {
    const navigate = useNavigate()
    const {
        items,
        total,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isLoading,
    } = useRequisiteList()

    const handleMainButtonClick = () => {
        navigate("/payment-details/choose")
    }

    if (isLoading) {
        return <Progress />
    }

    return (
        <>
            <PaymentDetailsHeader isRequisitesExist={total !== 0} />
            <InfiniteScroll
                isLoading={isFetchingNextPage}
                hasNextPage={hasNextPage}
                fetchNextPage={fetchNextPage}
            >
                <RequisitesList
                    items={items.requisites}
                    isFetchingNextPage={isFetchingNextPage}
                    total={total}
                />
            </InfiniteScroll>
            <MainButton
                text="Добавить реквизиты"
                onClick={handleMainButtonClick}
            />
        </>
    )
}