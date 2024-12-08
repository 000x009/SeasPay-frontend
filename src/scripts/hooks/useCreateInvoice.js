import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useTelegram } from "./useTelegram";
import { PaymentAPI } from "../backend/api/payment";

/**
 * @returns {Object}
 * @returns {function} handleCreateCryptoPayInvoice
 * @returns {boolean} isLoading
 */
export function useCreateInvoice() {
    const { WebApp } = useTelegram();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationKey: ['payment', 'create', 'crypto-pay'],
        mutationFn: async (data) => {
            const response = await PaymentAPI.createCryptoPayInvoice(data, WebApp.initData);
            console.log(response);
            return response.data;
        },
        onSuccess: (data) => {
            WebApp.openTelegramLink(data.invoice_url);
        }
    });

    const handleCreateInvoice = async (amount) => {
        queryClient.cancelQueries({
            queryKey: ['order', 'create', 'digital-product']
        })
        mutation.mutate({ amount: amount });
    };

    return {
        handleCreateInvoice,
        data: mutation.data,
        isLoading: mutation.isPending,
        isSuccess: mutation.isSuccess
    };
}