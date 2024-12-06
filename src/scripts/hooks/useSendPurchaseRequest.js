import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { PurchaseRequestAPI } from "@/scripts/backend/api/purchaseRequest";

export function useSendPurchaseRequest() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const sendRequestMutation = useMutation({
        mutationKey: ['purchase-request', 'send'],
        mutationFn: async (data) => await PurchaseRequestAPI.sendRequest(data.purchaseRequestData, data.initData),
        onSuccess: () => {
            navigate("/success", {
                state: {
                    successType: "PURCHASE_REQUEST"
                }
            });
        }
    })

    const handleSendRequest = async (purchaseUrl, initData) => {
        const purchaseRequestData = {
            purchase_url: purchaseUrl
        }
        queryClient.cancelQueries({
            queryKey: ['purchase-request', 'send']
        })
        sendRequestMutation.mutate({purchaseRequestData, initData})
    }
    const isLoading = sendRequestMutation.isPending

    return {
        handleSendRequest,
        isLoading
    }
}