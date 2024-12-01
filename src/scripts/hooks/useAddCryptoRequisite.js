import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { RequisiteAPI } from "@/scripts/backend/api/requisite";
import { queryClient } from "../shared/api/queryClient";

export function useAddCryptoRequisite() {
    const navigate = useNavigate()
    const addCryptoRequisiteMutation = useMutation({
        mutationKey: ['requisite', 'add-crypto'],
        mutationFn: async (data) => await RequisiteAPI.createCryptoRequisite(data.cryptoRequisiteData, data.initData),
        onSuccess: () => {
            navigate('/payment-details')
        }
    })

    const handleAddCryptoRequisite = async (cryptoRequisiteData, initData) => {
        queryClient.cancelQueries({
            queryKey: ['requisite', 'add-crypto']
        })
        addCryptoRequisiteMutation.mutate({cryptoRequisiteData, initData})
        queryClient.invalidateQueries({ queryKey: ['requisites'] })
    }
    const isLoading = addCryptoRequisiteMutation.isPending

    return {
        handleAddCryptoRequisite,
        isLoading,
    }
}