import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { useTelegram } from "./useTelegram";
import { PaymentAPI } from "../backend/api/payment";
import { OrderAPI } from "../backend/api/order";

/**
 * @returns {Object}
 * @returns {function} handleCreateCryptoPayInvoice
 * @returns {boolean} isLoading
 */
export function useCreateInvoice() {
    const { WebApp } = useTelegram();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationKey: ['payment', 'create', 'crypto-pay'],
        mutationFn: async (data) => {
            const response = await PaymentAPI.createCryptoPayInvoice({amount: data.amount}, WebApp.initData);
            if (data.orderType === 'transfer') {
                await OrderAPI.createTransferOrder({
                    receiver_email: data.data.form.email,
                    amount: data.data.form.amount,
                    payment_id: response.data.id,
                }, WebApp.initData);
            } else if (data.orderType === 'product') {
                await OrderAPI.createPlatformProductOrderCard({
                    product_id: data.data.productId,
                    login_data: data.data.form,
                    payment_id: response.data.id,
                }, WebApp.initData);
            }
            return response.data;
        },
        onSuccess: (data) => {
            WebApp.openTelegramLink(data.invoice_url);
            navigate('/');
        }
    });

    const handleCreateInvoice = async (data) => {
        queryClient.cancelQueries({
            queryKey: ['order', 'create', 'digital-product']
        })
        mutation.mutate(data);
    };

    return {
        handleCreateInvoice,
        data: mutation.data,
        isLoading: mutation.isPending,
        isSuccess: mutation.isSuccess
    };
}