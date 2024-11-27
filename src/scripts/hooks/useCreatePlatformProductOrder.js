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
export function useCreatePlatformProductOrder() {
    const { WebApp } = useTelegram();
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationKey: ['order', 'create', 'platform-product'],
        mutationFn: async (data) => {
            const response = await CloudAPI.getObjectPresignedPost(data.filename, WebApp.initData);
            console.log("response", response);
            const presignedPostResponse = await AWSCloudAPI.uploadObjectPresignedPost(response.data.url, response.data.data, data.file);
            console.log("presignedPostResponse", presignedPostResponse);
            if (presignedPostResponse.status === 204) {
                return await OrderAPI.createPlatformProductOrderCard(
                    {
                        product_id: data.product_id,
                        payment_receipt_url: response.data.object_url,
                        login_data: data.login_data
                    },
                    WebApp.initData
                )
            }
        },
        onSuccess: () => {
            navigate("/");
        }
    });

    const handleCreatePlatformProductOrder = async (formData, file, productId) => {
        queryClient.cancelQueries({
            queryKey: ['order', 'create', 'platform-product']
        })
        mutation.mutate({
            product_id: productId,
            filename: file.name,
            file: file,
            login_data: formData,
        });
    };

    return { handleCreatePlatformProductOrder, isLoading: mutation.isPending, isSuccess: mutation.isSuccess };
}