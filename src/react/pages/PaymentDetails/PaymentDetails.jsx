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
        data,
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

    console.log("data", data)

    return (
        <>
            <PaymentDetailsHeader isRequisitesExist={data?.total} />
            <InfiniteScroll
                isLoading={isFetchingNextPage}
                hasNextPage={hasNextPage}
                fetchNextPage={fetchNextPage}
            >
                <RequisitesList
                    items={data?.requisites ?? []}
                    isFetchingNextPage={isFetchingNextPage}
                    total={data?.total}
                />
            </InfiniteScroll>
            <MainButton
                text="Добавить реквизиты"
                onClick={handleMainButtonClick}
            />
        </>
    )
}