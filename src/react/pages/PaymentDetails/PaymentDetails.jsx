import DetailsModal from "@/react/sections/DetailsModal/DetailsModel"
import PaymentDetailsHeader from "@/react/sections/PaymentDetailsHeader/PaymentDetailsHeader"
import { useRequisiteList } from "@/scripts/hooks/useRequisiteList"
import { Progress } from "@/react/components/ui/Progress/Progress"
import { InfiniteScroll } from "@/react/sections/InfiniteScroll/InfiniteScroll"
import { RequisitesList } from "@/react/sections/RequisitesList/RequisitesList"
import "./PaymentDetails.css"

export function PaymentDetails() {
    const {
        items,
        total,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isLoading,
    } = useRequisiteList()

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
                    items={items}
                    isFetchingNextPage={isFetchingNextPage}
                    total={total}
                />
            </InfiniteScroll>
            <DetailsModal />
        </>
    )
}