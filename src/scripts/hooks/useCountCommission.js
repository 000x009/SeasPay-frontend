import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { retrieveLaunchParams } from "@telegram-apps/sdk";

import { UserCommissionAPI } from "../backend/api/commission";

export function useCountCommission() {
    const queryClient = useQueryClient();
    const { initDataRaw } = retrieveLaunchParams();
    const navigate = useNavigate();

    const countCommissionMutation = useMutation({
        mutationKey: ['commission', 'count'],
        mutationFn: async (data) => {
            const response = await UserCommissionAPI.countCommission(initDataRaw, data.amount)
            return response.data
        },
    })

    const handleCountCommission = async (amount, state, navigate_path) => {
        queryClient.cancelQueries({
            queryKey: ['requisites']
        })
        countCommissionMutation.mutate({ amount }, {
            onSuccess: (data) => {
                if (state.state.payment_type === "transfer") {
                    const updatedState = {
                        ...state.state,
                        amount: data.transfer_final_usd,
                        finalRubAmount: data.transfer_final_rub,
                        cryptoUsdtAmount: data.transfer_crypto_usdt
                    }
                    navigate(navigate_path, { state: updatedState })
                } else if (state.state.payment_type === "product-application") {
                    const updatedState = {
                        ...state.state,
                        amount: data.digital_product_final_usd,
                        cryptoUsdtAmount: data.digital_product_crypto_usdt,
                        finalRubAmount: data.digital_product_final_rub 
                    }
                    navigate(navigate_path, { state: updatedState })
                } else if (state.state.payment_type === "product") {
                    const updatedState = {
                        ...state.state,
                        amount: data.digital_product_final_usd,
                        cryptoUsdtAmount: data.digital_product_crypto_usdt,
                        finalRubAmount: data.digital_product_final_rub
                    }
                    navigate(navigate_path, { state: updatedState })
                }
            }
        })
    }
    const isLoading = countCommissionMutation.isPending

    return {
        data: countCommissionMutation.data,
        handleCountCommission,
        isLoading,
    }
}