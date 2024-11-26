import { useMutation } from "@tanstack/react-query";

import { PurchaseRequestAPI } from "@/scripts/backend/api/purchaseRequest";
import { queryClient } from "../shared/api/queryClient";

export function useSendPurchaseRequest() {
    const sendRequestMutation = useMutation({
        mutationKey: ['send-purchase-request'],
        mutationFn: async (data) => await PurchaseRequestAPI.sendRequest(data.purchaseRequestData, data.initData)
    })

    const handleSendRequest = async (purchaseUrl, initData, onSuccess) => {
        const purchaseRequestData = {
            purchase_url: purchaseUrl
        }
        queryClient.cancelQueries({
            queryKey: PurchaseRequestAPI.baseEndpoint
        })
        sendRequestMutation.mutate({purchaseRequestData, initData}, { onSuccess: onSuccess })
    }
    const isLoading = sendRequestMutation.isPending

    return {
        handleSendRequest,
        isLoading
    }
}