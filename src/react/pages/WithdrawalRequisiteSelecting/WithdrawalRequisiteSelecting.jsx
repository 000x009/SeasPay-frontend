import { useNavigate, useParams } from 'react-router-dom';

import { MainButton } from '@vkruglikov/react-telegram-web-app';

import { useRequisiteList } from '@/scripts/hooks/useRequisiteList';
import { InfiniteScroll } from '@/react/sections/InfiniteScroll/InfiniteScroll';
import { RequisitesList } from '@/react/sections/RequisitesList/RequisitesList';
import { WithdrawalRequisiteSelectingHeader } from '../../sections/WithdrawalRequisiteSelecting/Header/Header';
import { Progress } from '@/react/components/ui/Progress/Progress';

import './WithdrawalRequisiteSelecting.css';

export function WithdrawalRequisiteSelecting() {
    const navigate = useNavigate()
    const { paymentSystemName } = useParams()
    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isLoading,
    } = useRequisiteList()

    const isRequisitesExist = data?.total > 0

    const handleMainButtonClick = () => {
        navigate("/payment-details/choose")
    }
    const handleRequisiteClick = (id) => {
        navigate(`/withdraw/form`, { state: { paymentSystem: paymentSystemName, pickedRequisiteId: id } })
    }

    if (isLoading) {
        return <Progress />
    }

    return (
        <div className="withdrawal-requisite-selecting">
            <WithdrawalRequisiteSelectingHeader isRequisitesExist={isRequisitesExist} />
            <InfiniteScroll
                isLoading={isFetchingNextPage}
                hasNextPage={hasNextPage}
                fetchNextPage={fetchNextPage}
            >
                <RequisitesList
                    items={data?.requisites ?? []}
                    isFetchingNextPage={isFetchingNextPage}
                    total={data?.total}
                    onRequisiteClick={handleRequisiteClick}
                    isReadOnly={true}
                />
            </InfiniteScroll>
            {!isRequisitesExist && (
                <MainButton
                    onClick={handleMainButtonClick}
                    text="Добавить реквизиты"
                />
            )}
        </div>
    );
}