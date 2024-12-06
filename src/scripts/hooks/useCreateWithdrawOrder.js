import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { retrieveLaunchParams } from "@telegram-apps/sdk";

import { OrderAPI } from "../backend/api/order";
import { CloudAPI } from "../backend/api/cloud";
import { AWSCloudAPI } from "../backend/api/aws";

export function useCreateWithdrawOrder() {
    const { initDataRaw } = retrieveLaunchParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const createWithdrawOrderMutation = useMutation({
        mutationKey: ['order', 'create', 'withdraw'],
        mutationFn: async (data) => {
            const response = await CloudAPI.getObjectPresignedPost(data.file.name, initDataRaw);
            const presignedPostResponse = await AWSCloudAPI.uploadObjectPresignedPost(response.data.url, response.data.data, data.file);

            if (presignedPostResponse.status === 204) {
                return await OrderAPI.createWithdrawOrder(
                    {
                        requisite_id: data.requisite_id,
                        payment_receipt_url: response.data.object_url,
                    },
                    initDataRaw
                )
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['orders']
            })
            navigate('/success', {
                state: {
                    successType: "WITHDRAWAL"
                }
            })
        }
    })

    const handleCreateWithdrawOrder = async (requisiteId, file) => {
        queryClient.cancelQueries({
            queryKey: ['order', 'create', 'withdraw']
        })
        createWithdrawOrderMutation.mutate({ requisite_id: requisiteId, file: file })
    }

    return {
        handleCreateWithdrawOrder,
        isLoading: createWithdrawOrderMutation.isPending
    }
}