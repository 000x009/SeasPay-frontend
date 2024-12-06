import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { OrderAPI } from "../backend/api/order";
import { useTelegram } from "./useTelegram";
import { queryClient } from "@/scripts/shared/api/queryClient";
import { CloudAPI } from "../backend/api/cloud";
import { AWSCloudAPI } from "../backend/api/aws";

/**
 * @returns {Object}
 * @returns {function} handleCreatePlatformProductOrder
 * @returns {boolean} isLoading
 */
export function useCreateTransferOrder() {
    const { WebApp } = useTelegram();
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationKey: ['order', 'create', 'transfer'],
        mutationFn: async (data) => {
            const response = await CloudAPI.getObjectPresignedPost(data.file.name, WebApp.initData);
            const presignedPostResponse = await AWSCloudAPI.uploadObjectPresignedPost(response.data.url, response.data.data, data.file);

            if (presignedPostResponse.status === 204) {
                return await OrderAPI.createTransferOrder(
                    {
                        amount: data.amount,
                        receiver_email: data.email,
                        payment_receipt_url: response.data.object_url,
                    },
                    WebApp.initData
                )
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['orders']
            });
            navigate("/success", {
                state: {
                    successType: "TRANSFER"
                }
            });
        }
    });

    const handleCreateTransferOrder = async (formData, file) => {
        queryClient.cancelQueries({
            queryKey: ['order', 'create', 'transfer']
        })
        mutation.mutate({
            amount: formData.amount,
            email: formData.email,
            file: file,
        });
    };

    return { handleCreateTransferOrder, isLoading: mutation.isPending, isSuccess: mutation.isSuccess };
}