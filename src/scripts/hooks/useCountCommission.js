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
                    console.log("transfer")
                    console.log("data", data)
                    navigate(navigate_path, { state: { ...state.state, finalRubAmount: data.transfer_final_rub } })
                } else if (state.state.payment_type === "product-application") {
                    console.log("product-application")
                    navigate(navigate_path, { state: { ...state.state, finalRubAmount: data.digital_product_final_rub } })
                } else if (state.state.payment_type === "product") {
                    console.log("product")
                    console.log("data", data)
                    navigate(navigate_path, { state: { ...state.state, finalRubAmount: data.digital_product_final_rub } })
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