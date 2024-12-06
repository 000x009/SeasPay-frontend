import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { OrderAPI } from "../backend/api/order";
import { useTelegram } from "./useTelegram";
import { CloudAPI } from "../backend/api/cloud";
import { AWSCloudAPI } from "../backend/api/aws";

/**
 * @returns {Object}
 * @returns {function} handleCreateDigitalProductOrder
 * @returns {boolean} isLoading
 */
export function useCreateDigitalProductOrder() {
    const { WebApp } = useTelegram();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationKey: ['order', 'create', 'digital-product'],
        mutationFn: async (data) => {
            const response = await CloudAPI.getObjectPresignedPost(data.file.name, WebApp.initData);
            const presignedPostResponse = await AWSCloudAPI.uploadObjectPresignedPost(response.data.url, response.data.data, data.file);
            if (presignedPostResponse.status === 204) {
                return await OrderAPI.createDigitalProductOrder(
                    {
                        application_id: data.application_id,
                        payment_receipt_url: response.data.object_url,
                        login_data: data.login_data
                    },
                    WebApp.initData
                )
            }
        },
        onSuccess: () => {
            navigate("/success", {
                state: {
                    successType: "PRODUCT_APPLICATION"
                }
            });
        }
    });

    const handleCreateDigitalProductOrder = async (formData, file, applicationId) => {
        queryClient.cancelQueries({
            queryKey: ['order', 'create', 'digital-product']
        })
        mutation.mutate({
            application_id: applicationId,
            file: file,
            login_data: formData,
        });
    };

    return { handleCreateDigitalProductOrder, isLoading: mutation.isPending, isSuccess: mutation.isSuccess };
}